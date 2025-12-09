import React from 'react';
import { cn } from '@/utils';

const base =
  'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed';

const variants = {
  default: 'bg-blue-600 text-white hover:bg-blue-700',
  outline:
    'border border-slate-300 text-slate-800 hover:border-blue-600 hover:text-blue-600 bg-white',
};

export const Button = React.forwardRef(function Button(
  { className = '', variant = 'default', size = 'md', ...props },
  ref
) {
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-3 text-base',
  };

  return (
    <button
      ref={ref}
      className={cn(base, variants[variant] ?? variants.default, sizes[size] ?? sizes.md, className)}
      {...props}
    />
  );
});

