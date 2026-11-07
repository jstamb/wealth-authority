/** Drop the markdown marker some FAQ questions still carry from the source notes. */
export function cleanFaqQuestion(question: string): string {
  return question.replace(/^###\s*/, '').trim();
}

/** Show wiki-style links as plain words. Do not leave [[brackets]] in the page. */
export function readableText(text: string): string {
  return text.replace(/\[\[([^[\]]+)\]\]/g, '$1').replace(/\s+---\s*$/, '').trim();
}
