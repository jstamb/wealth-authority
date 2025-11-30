#!/usr/bin/env python3
"""
Obsidian to TypeScript Sync Script
Converts Obsidian markdown files to TypeScript article data
"""

import os
import re
import json
import yaml
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Any, Optional
import argparse

# Configuration
OBSIDIAN_VAULT = "/Users/cosmodrome/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/8 - Projects/Wealth Management/Content"
WEBSITE_ROOT = "/Users/cosmodrome/Local Sites/wealth-authority"
DATA_DIR = os.path.join(WEBSITE_ROOT, "data")

class ObsidianToTSConverter:
    """Converts Obsidian markdown to TypeScript Article format"""

    def __init__(self):
        self.sync_log = []
        self.errors = []

    def log(self, message: str, level: str = "INFO"):
        """Log a message with timestamp"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_entry = f"[{timestamp}] {level}: {message}"
        self.sync_log.append(log_entry)
        print(log_entry)

    def parse_frontmatter(self, content: str) -> tuple[Dict[str, Any], str]:
        """Extract YAML frontmatter and content body"""
        if not content.startswith('---'):
            return {}, content

        try:
            # Split frontmatter from content
            parts = content.split('---', 2)
            if len(parts) < 3:
                return {}, content

            frontmatter = yaml.safe_load(parts[1])
            body = parts[2].strip()
            return frontmatter, body
        except Exception as e:
            self.log(f"Error parsing frontmatter: {e}", "ERROR")
            return {}, content

    def markdown_to_html(self, md_text: str) -> str:
        """Convert markdown to HTML (basic conversion)"""
        if not md_text:
            return ""

        # Remove markdown heading markers (##, ###, etc.) for content
        # We'll preserve them for section detection
        html = md_text

        # Convert bold **text** to <strong>
        html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', html)

        # Convert italic *text* to <em>
        html = re.sub(r'\*(.*?)\*', r'<em>\1</em>', html)

        # Convert links [text](url) to <a>
        html = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2">\1</a>', html)

        # Convert code `text` to <code>
        html = re.sub(r'`(.*?)`', r'<code>\1</code>', html)

        return html

    def extract_sections(self, content: str) -> List[Dict[str, Any]]:
        """Parse markdown content into sections"""
        sections = []

        # Split by H2 headers
        parts = re.split(r'\n## ', content)

        for i, part in enumerate(parts):
            if i == 0 and not part.startswith('## '):
                # Skip intro before first H2
                continue

            # Extract title
            lines = part.split('\n', 1)
            title = lines[0].strip()
            section_content = lines[1] if len(lines) > 1 else ""

            # Skip FAQ sections (handled separately)
            if 'FAQ' in title or 'Frequently Asked' in title:
                continue

            # Skip Key Takeaways and Bottom Line (handled separately)
            if 'Key Takeaway' in title or 'Bottom Line' in title:
                continue

            # Convert content to HTML-like format
            html_content = self.process_section_content(section_content)

            sections.append({
                'type': 'text',
                'title': title,
                'content': html_content
            })

        return sections

    def process_section_content(self, content: str) -> str:
        """Process section content into HTML format"""
        if not content:
            return ""

        html_parts = []
        current_paragraph = []
        in_list = False
        list_items = []

        for line in content.split('\n'):
            line = line.strip()

            if not line:
                # Close any open elements
                if in_list:
                    html_parts.append('</ul>')
                    in_list = False
                if current_paragraph:
                    html_parts.append(f"<p>{' '.join(current_paragraph)}</p>")
                    current_paragraph = []
                continue

            # H3 headers
            if line.startswith('### '):
                if in_list:
                    html_parts.append('</ul>')
                    in_list = False
                if current_paragraph:
                    html_parts.append(f"<p>{' '.join(current_paragraph)}</p>")
                    current_paragraph = []
                html_parts.append(f'<h3 class="text-xl font-bold mt-8 mb-4">{line[4:]}</h3>')

            # H4 headers
            elif line.startswith('#### '):
                if in_list:
                    html_parts.append('</ul>')
                    in_list = False
                if current_paragraph:
                    html_parts.append(f"<p>{' '.join(current_paragraph)}</p>")
                    current_paragraph = []
                html_parts.append(f'<h4 class="text-lg font-bold mt-6 mb-3">{line[5:]}</h4>')

            # Bullet lists
            elif line.startswith('- '):
                if current_paragraph:
                    html_parts.append(f"<p>{' '.join(current_paragraph)}</p>")
                    current_paragraph = []
                if not in_list:
                    html_parts.append('<ul class="list-disc pl-6 space-y-2 my-4">')
                    in_list = True
                html_parts.append(f'<li>{self.markdown_to_html(line[2:])}</li>')

            # Regular paragraph text
            else:
                if in_list:
                    html_parts.append('</ul>')
                    in_list = False
                current_paragraph.append(self.markdown_to_html(line))

        # Close any remaining open elements
        if in_list:
            html_parts.append('</ul>')
        if current_paragraph:
            html_parts.append(f"<p>{' '.join(current_paragraph)}</p>")

        return '\n          '.join(html_parts)

    def extract_key_takeaways(self, content: str) -> List[str]:
        """Extract key takeaways from content"""
        takeaways = []

        # Look for Key Takeaways section
        match = re.search(r'## Key Takeaways?\s*\n(.*?)(?=\n##|\Z)', content, re.DOTALL | re.IGNORECASE)
        if match:
            section = match.group(1)
            # Extract bullet points
            for line in section.split('\n'):
                line = line.strip()
                if line.startswith('- '):
                    takeaways.append(line[2:].strip())

        return takeaways

    def extract_faqs(self, content: str) -> List[Dict[str, str]]:
        """Extract FAQ items from content"""
        faqs = []

        # Look for FAQ section
        match = re.search(r'## (?:FAQ|Frequently Asked Questions)\s*\n(.*?)(?=\n##|\Z)', content, re.DOTALL | re.IGNORECASE)
        if not match:
            return faqs

        faq_section = match.group(1)

        # Parse FAQ items (### Question format)
        questions = re.split(r'\n### ', faq_section)
        for q in questions:
            if not q.strip():
                continue

            lines = q.split('\n', 1)
            question = lines[0].strip().rstrip('?') + '?'
            answer = lines[1].strip() if len(lines) > 1 else ""

            # Clean answer (remove markdown)
            answer = re.sub(r'\*\*(.*?)\*\*', r'\1', answer)
            answer = re.sub(r'\*(.*?)\*', r'\1', answer)
            answer = answer.replace('\n', ' ').strip()

            if question and answer:
                faqs.append({
                    'question': question,
                    'answer': answer
                })

        return faqs

    def extract_bottom_line(self, content: str) -> str:
        """Extract bottom line summary"""
        match = re.search(r'## (?:The )?Bottom Line\s*\n(.*?)(?=\n##|\Z)', content, re.DOTALL | re.IGNORECASE)
        if match:
            text = match.group(1).strip()
            # Convert to single paragraph
            return re.sub(r'\s+', ' ', text)
        return ""

    def generate_slug(self, title: str) -> str:
        """Generate URL slug from title"""
        slug = title.lower()
        slug = re.sub(r'[^\w\s-]', '', slug)
        slug = re.sub(r'[-\s]+', '-', slug)
        return slug.strip('-')

    def estimate_read_time(self, content: str) -> str:
        """Estimate reading time based on word count"""
        words = len(content.split())
        minutes = max(1, round(words / 200))  # 200 words per minute
        return f"{minutes} min read"

    def convert_spoke_article(self, filepath: str, frontmatter: Dict, content: str) -> Dict[str, Any]:
        """Convert a spoke article to TypeScript format"""

        # Generate article ID
        article_id = frontmatter.get('content_id', self.generate_slug(frontmatter.get('title', Path(filepath).stem)))

        # Determine hub ID from parent_hub or parent_hub_id
        parent_hub = frontmatter.get('parent_hub', '').lower().replace(' ', '-')
        hub_id = frontmatter.get('hub_id', parent_hub if parent_hub else 'retirement')

        # Extract sections
        sections = self.extract_sections(content)
        key_takeaways = self.extract_key_takeaways(content)
        faqs = self.extract_faqs(content)
        bottom_line = self.extract_bottom_line(content)

        # Ensure dates are strings
        publish_date = frontmatter.get('publish_date', datetime.now().strftime('%Y-%m-%d'))
        if not isinstance(publish_date, str):
            publish_date = publish_date.strftime('%Y-%m-%d') if hasattr(publish_date, 'strftime') else str(publish_date)

        last_updated = frontmatter.get('last_updated')
        if last_updated and not isinstance(last_updated, str):
            last_updated = last_updated.strftime('%Y-%m-%d') if hasattr(last_updated, 'strftime') else str(last_updated)

        # Get title from meta_title or extract from content
        title = frontmatter.get('meta_title', frontmatter.get('title', 'Untitled'))

        article = {
            'id': article_id,
            'title': title,
            'slug': frontmatter.get('url_slug', '/' + article_id).strip('/'),
            'hubId': hub_id,
            'type': 'spoke',
            'excerpt': frontmatter.get('meta_description', ''),
            'readTime': self.estimate_read_time(content),
            'publishDate': publish_date,
            'author': {'name': frontmatter.get('author', 'Wealth Authority Team') or 'Wealth Authority Team', 'role': 'Editorial Staff'},
            'primaryKeyword': frontmatter.get('primary_keyword', ''),
            'metaDescription': frontmatter.get('meta_description', ''),
            'keyTakeaways': key_takeaways,
            'sections': sections,
            'bottomLine': bottom_line
        }

        if last_updated:
            article['lastUpdated'] = last_updated

        reviewer = frontmatter.get('reviewer')
        if reviewer and reviewer.strip():
            article['reviewer'] = {'name': reviewer, 'role': 'Content Reviewer'}

        if faqs:
            article['faqs'] = faqs

        return article

    def convert_to_typescript(self, articles: List[Dict[str, Any]], import_name: str) -> str:
        """Convert articles to TypeScript format"""

        ts_lines = ["import { Article } from '../types';", "", f"export const {import_name}: Article[] = ["]

        for i, article in enumerate(articles):
            ts_lines.append("  {")

            # Simple fields
            ts_lines.append(f"    id: '{article['id']}',")
            ts_lines.append(f"    title: '{self.escape_string(article['title'])}',")
            ts_lines.append(f"    slug: '{article['slug']}',")
            ts_lines.append(f"    hubId: '{article['hubId']}',")
            ts_lines.append(f"    type: '{article['type']}',")
            ts_lines.append(f"    excerpt: '{self.escape_string(article['excerpt'])}',")
            ts_lines.append(f"    readTime: '{article['readTime']}',")
            ts_lines.append(f"    publishDate: '{article['publishDate']}',")

            # Author
            ts_lines.append(f"    author: {{ name: '{article['author']['name']}', role: '{article['author']['role']}' }},")

            if 'reviewer' in article:
                ts_lines.append(f"    reviewer: {{ name: '{article['reviewer']['name']}', role: '{article['reviewer']['role']}' }},")

            if article.get('primaryKeyword'):
                ts_lines.append(f"    primaryKeyword: '{self.escape_string(article['primaryKeyword'])}',")

            if article.get('metaDescription'):
                ts_lines.append(f"    metaDescription: '{self.escape_string(article['metaDescription'])}',")

            if article.get('lastUpdated'):
                ts_lines.append(f"    lastUpdated: '{article['lastUpdated']}',")

            # Key takeaways
            ts_lines.append("    keyTakeaways: [")
            for takeaway in article['keyTakeaways']:
                ts_lines.append(f"      '{self.escape_string(takeaway)}',")
            ts_lines.append("    ],")

            # Sections
            ts_lines.append("    sections: [")
            for section in article['sections']:
                ts_lines.append("      {")
                ts_lines.append(f"        type: '{section['type']}',")
                if section.get('title'):
                    ts_lines.append(f"        title: '{self.escape_string(section['title'])}',")
                ts_lines.append(f"        content: `")
                ts_lines.append(f"          {self.escape_template_literal(section['content'])}")
                ts_lines.append("        `")
                ts_lines.append("      },")
            ts_lines.append("    ],")

            # FAQs
            if article.get('faqs'):
                ts_lines.append("    faqs: [")
                for faq in article['faqs']:
                    ts_lines.append("      {")
                    ts_lines.append(f"        question: '{self.escape_string(faq['question'])}',")
                    ts_lines.append(f"        answer: '{self.escape_string(faq['answer'])}'")
                    ts_lines.append("      },")
                ts_lines.append("    ],")

            # Bottom line
            ts_lines.append(f"    bottomLine: '{self.escape_string(article['bottomLine'])}'")

            # Close article object
            if i < len(articles) - 1:
                ts_lines.append("  },")
            else:
                ts_lines.append("  }")

        ts_lines.append("];")
        ts_lines.append("")

        return '\n'.join(ts_lines)

    def escape_string(self, s: str) -> str:
        """Escape string for TypeScript single quotes"""
        if not s:
            return ""
        return s.replace("'", "\\'").replace('\n', ' ').replace('\r', '')

    def escape_template_literal(self, s: str) -> str:
        """Escape string for TypeScript template literals (backticks)"""
        if not s:
            return ""
        # Escape backticks and ${} expressions in template literals
        return s.replace('`', '\\`').replace('${', '\\${')

    def format_single_article(self, article: Dict[str, Any]) -> str:
        """Format a single article as TypeScript object (without array wrapper)"""
        ts_lines = ["  {"]

        # Simple fields
        ts_lines.append(f"    id: '{article['id']}',")
        ts_lines.append(f"    title: '{self.escape_string(article['title'])}',")
        ts_lines.append(f"    slug: '{article['slug']}',")
        ts_lines.append(f"    hubId: '{article['hubId']}',")
        ts_lines.append(f"    type: '{article['type']}',")
        ts_lines.append(f"    excerpt: '{self.escape_string(article['excerpt'])}',")
        ts_lines.append(f"    readTime: '{article['readTime']}',")
        ts_lines.append(f"    publishDate: '{article['publishDate']}',")

        # Author
        ts_lines.append(f"    author: {{ name: '{article['author']['name']}', role: '{article['author']['role']}' }},")

        if 'reviewer' in article:
            ts_lines.append(f"    reviewer: {{ name: '{article['reviewer']['name']}', role: '{article['reviewer']['role']}' }},")

        if article.get('primaryKeyword'):
            ts_lines.append(f"    primaryKeyword: '{self.escape_string(article['primaryKeyword'])}',")

        if article.get('metaDescription'):
            ts_lines.append(f"    metaDescription: '{self.escape_string(article['metaDescription'])}',")

        if article.get('lastUpdated'):
            ts_lines.append(f"    lastUpdated: '{article['lastUpdated']}',")

        # Key takeaways
        ts_lines.append("    keyTakeaways: [")
        for takeaway in article['keyTakeaways']:
            ts_lines.append(f"      '{self.escape_string(takeaway)}',")
        ts_lines.append("    ],")

        # Sections
        ts_lines.append("    sections: [")
        for section in article['sections']:
            ts_lines.append("      {")
            ts_lines.append(f"        type: '{section['type']}',")
            if section.get('title'):
                ts_lines.append(f"        title: '{self.escape_string(section['title'])}',")
            ts_lines.append(f"        content: `")
            ts_lines.append(f"          {self.escape_template_literal(section['content'])}")
            ts_lines.append("        `")
            ts_lines.append("      },")
        ts_lines.append("    ],")

        # FAQs
        if article.get('faqs'):
            ts_lines.append("    faqs: [")
            for faq in article['faqs']:
                ts_lines.append("      {")
                ts_lines.append(f"        question: '{self.escape_string(faq['question'])}',")
                ts_lines.append(f"        answer: '{self.escape_string(faq['answer'])}'")
                ts_lines.append("      },")
            ts_lines.append("    ],")

        # Bottom line
        ts_lines.append(f"    bottomLine: '{self.escape_string(article['bottomLine'])}'")

        ts_lines.append("  }")

        return '\n'.join(ts_lines)

    def sync_file(self, filepath: str, force: bool = False) -> Optional[Dict[str, Any]]:
        """Sync a single file from Obsidian to TypeScript"""
        try:
            self.log(f"Processing: {filepath}")

            # Read file
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Parse frontmatter
            frontmatter, body = self.parse_frontmatter(content)

            if not frontmatter:
                self.log(f"No frontmatter found in {filepath}, skipping", "WARNING")
                return None

            # Convert based on content type
            content_level = frontmatter.get('content_level', 'spoke')

            if content_level in ['spoke', 'city-spoke']:
                article = self.convert_spoke_article(filepath, frontmatter, body)
                return article
            else:
                self.log(f"Content level '{content_level}' not yet supported", "WARNING")
                return None

        except Exception as e:
            self.log(f"Error processing {filepath}: {e}", "ERROR")
            self.errors.append(f"{filepath}: {e}")
            return None

    def scan_directory(self, directory: str, pattern: str = "*.md") -> List[str]:
        """Scan directory for markdown files"""
        path = Path(directory)
        return [str(f) for f in path.rglob(pattern) if f.is_file()]

    def sync_all(self, source_dir: str, filter_date: Optional[str] = None):
        """Sync all markdown files from source directory"""
        self.log(f"Starting sync from {source_dir}")

        # Find all markdown files
        files = self.scan_directory(source_dir)
        self.log(f"Found {len(files)} markdown files")

        # Filter by date if specified
        if filter_date:
            files = [f for f in files if self.is_file_updated_after(f, filter_date)]
            self.log(f"Filtered to {len(files)} files updated after {filter_date}")

        # Group files by topic/hub
        articles_by_hub = {}

        for filepath in files:
            article = self.sync_file(filepath)
            if article:
                hub_id = article['hubId']
                if hub_id not in articles_by_hub:
                    articles_by_hub[hub_id] = []
                articles_by_hub[hub_id].append(article)

        # Generate TypeScript files
        for hub_id, articles in articles_by_hub.items():
            self.write_typescript_file(hub_id, articles)

        # Summary
        self.log("\n" + "="*50)
        self.log("SYNC COMPLETE")
        self.log(f"Total files processed: {len(files)}")
        self.log(f"Articles converted: {sum(len(a) for a in articles_by_hub.values())}")
        self.log(f"Errors: {len(self.errors)}")

        if self.errors:
            self.log("\nErrors encountered:")
            for error in self.errors:
                self.log(f"  - {error}")

    def is_file_updated_after(self, filepath: str, date_str: str) -> bool:
        """Check if file was modified after given date"""
        try:
            file_mtime = datetime.fromtimestamp(os.path.getmtime(filepath))
            filter_date = datetime.strptime(date_str, '%Y-%m-%d')
            return file_mtime >= filter_date
        except:
            return True

    def write_typescript_file(self, hub_id: str, articles: List[Dict[str, Any]]):
        """Write articles to TypeScript file"""
        # Determine filename based on hub ID
        hub_names = {
            'retirement-planning': 'retirementArticles',
            'investment-strategies': 'investmentArticles',
            'tax-planning': 'taxPlanningArticles',
            'estate-planning': 'estatePlanningArticles',
            'financial-planning': 'financialPlanningArticles',
            'risk-management': 'riskManagementArticles',
            'high-net-worth': 'highNetWorthArticles',
            'find-a-wealth-manager': 'findAdvisorArticles',
            'find-wealth-manager': 'findAdvisorArticles',
        }

        # Check if it's a city-based article (city-spoke type)
        is_city = any(a.get('type') == 'city-spoke' for a in articles)

        if is_city:
            filename = 'cityArticles'
        else:
            filename = hub_names.get(hub_id, 'cityArticles')

        const_name = filename.replace('Articles', '_ARTICLES').upper()

        output_file = os.path.join(DATA_DIR, f"{filename}.ts")

        # Read existing file and merge with new articles
        existing_articles = []
        existing_ids = set()

        if os.path.exists(output_file):
            try:
                with open(output_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Extract existing article IDs to avoid duplicates
                    import re
                    ids = re.findall(r"id: '([^']+)'", content)
                    existing_ids = set(ids)
                    self.log(f"Found {len(existing_ids)} existing articles in {output_file}")
            except Exception as e:
                self.log(f"Could not read existing file: {e}", "WARNING")

        # Filter out articles that already exist
        new_articles = [a for a in articles if a['id'] not in existing_ids]

        if not new_articles:
            self.log(f"No new articles to add to {output_file}", "INFO")
            return

        # Append new articles to existing file
        if os.path.exists(output_file):
            # Read existing content
            with open(output_file, 'r', encoding='utf-8') as f:
                existing_content = f.read()

            # Find the closing bracket of the array
            # Look for the pattern: }]; or }\n]; at the end
            import re
            match = re.search(r'\}\s*\];?\s*$', existing_content)
            if match:
                # Insert new articles before the closing bracket
                insert_pos = match.start() + 1  # After the }

                # Generate TypeScript for new articles only (without import/export wrapper)
                new_articles_ts = []
                for article in new_articles:
                    article_ts = self.format_single_article(article)
                    new_articles_ts.append(article_ts)

                # Combine: existing content up to }, comma, new articles, closing ];
                new_content = (
                    existing_content[:insert_pos] +
                    ',\n' +
                    ',\n'.join(new_articles_ts) +
                    '\n];' +
                    '\n'
                )

                with open(output_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                self.log(f"Appended {len(new_articles)} new articles to {output_file}")
            else:
                self.log(f"Could not find insertion point in {output_file}", "ERROR")
        else:
            # Create new file
            ts_content = self.convert_to_typescript(new_articles, const_name)
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(ts_content)
            self.log(f"Created {output_file} with {len(new_articles)} articles")


def main():
    parser = argparse.ArgumentParser(description='Sync Obsidian content to TypeScript')
    parser.add_argument('--source', default=OBSIDIAN_VAULT, help='Source Obsidian directory')
    parser.add_argument('--date', help='Only sync files updated after this date (YYYY-MM-DD)')
    parser.add_argument('--file', help='Sync a specific file')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be synced without writing')

    args = parser.parse_args()

    converter = ObsidianToTSConverter()

    if args.file:
        # Sync single file
        article = converter.sync_file(args.file)
        if article:
            print(json.dumps(article, indent=2))
    else:
        # Sync all files
        converter.sync_all(args.source, args.date)


if __name__ == '__main__':
    main()
