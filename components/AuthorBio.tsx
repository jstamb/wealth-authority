import React from 'react';
import { Author } from '../types';
import { User, Award, Linkedin, Calendar } from 'lucide-react';

interface AuthorBioProps {
  author: Author;
  reviewer?: Author;
  publishDate: string;
  lastUpdated?: string;
  compact?: boolean;
}

const AuthorBio: React.FC<AuthorBioProps> = ({
  author,
  reviewer,
  publishDate,
  lastUpdated,
  compact = false
}) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>By <strong className="text-gray-900">{author.name}</strong></span>
          {author.credentials && (
            <span className="text-emerald-700 font-medium">{author.credentials}</span>
          )}
        </div>
        {reviewer && (
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>Reviewed by <strong className="text-gray-900">{reviewer.name}</strong></span>
            {reviewer.credentials && (
              <span className="text-emerald-700 font-medium">{reviewer.credentials}</span>
            )}
          </div>
        )}
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>Published {formatDate(publishDate)}</span>
          {lastUpdated && lastUpdated !== publishDate && (
            <span className="text-gray-500">| Updated {formatDate(lastUpdated)}</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <h3 className="font-semibold text-gray-900 mb-4">About the Author</h3>

      <div className="flex items-start gap-4">
        {author.image ? (
          <img
            src={author.image}
            alt={author.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
            <User className="w-8 h-8 text-emerald-700" />
          </div>
        )}

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-gray-900">{author.name}</h4>
            {author.credentials && (
              <span className="text-sm text-emerald-700 font-medium">{author.credentials}</span>
            )}
            {author.linkedIn && (
              <a
                href={author.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">{author.role}</p>
          {author.experience && (
            <p className="text-sm text-gray-500 mb-2">{author.experience}</p>
          )}
          {author.bio && (
            <p className="text-sm text-gray-600">{author.bio}</p>
          )}
        </div>
      </div>

      {reviewer && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="text-gray-600">
              Fact-checked by <strong>{reviewer.name}</strong>
              {reviewer.credentials && (
                <span className="text-emerald-700 ml-1">{reviewer.credentials}</span>
              )}
            </span>
          </div>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-200 flex gap-4 text-xs text-gray-500">
        <span>Published: {formatDate(publishDate)}</span>
        {lastUpdated && lastUpdated !== publishDate && (
          <span>Last Updated: {formatDate(lastUpdated)}</span>
        )}
      </div>
    </div>
  );
};

export default AuthorBio;
