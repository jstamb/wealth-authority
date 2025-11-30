import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'dark' | 'light';
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, variant = 'dark' }) => {
  const allItems = [{ name: 'Home', url: '/' }, ...items];

  const isLight = variant === 'light';
  const chevronClass = isLight ? 'text-emerald-300' : 'text-gray-400';
  const currentClass = isLight ? 'text-white font-medium' : 'text-gray-600 font-medium';
  const linkClass = isLight
    ? 'text-emerald-100 hover:text-white hover:underline flex items-center gap-1'
    : 'text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1';

  return (
    <>
      <SchemaMarkup type="breadcrumb" items={allItems} />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className={`w-4 h-4 ${chevronClass} mx-1`} />
              )}
              {index === allItems.length - 1 ? (
                <span className={currentClass}>{item.name}</span>
              ) : (
                <Link
                  to={item.url}
                  className={linkClass}
                >
                  {index === 0 && <Home className="w-3.5 h-3.5" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
