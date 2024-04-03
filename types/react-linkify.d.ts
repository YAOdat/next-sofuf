declare module 'react-linkify' {
    import React from 'react';
  
    interface LinkifyProps {
      properties?: {
        target?: string;
        style?: React.CSSProperties;
        [key: string]: any;
      };
      children: React.ReactNode;
      linkDecorator?: (
        decoratedHref: string,
        decoratedText: string,
        key: string
      ) => React.ReactNode;
    }
  
    const Linkify: React.FC<LinkifyProps>;
  
    export default Linkify;
  }