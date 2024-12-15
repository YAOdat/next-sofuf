import React from 'react';

interface DocsLayoutProps {
  children: React.ReactNode;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default DocsLayout;

