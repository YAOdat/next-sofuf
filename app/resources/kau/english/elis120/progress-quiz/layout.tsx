import React from 'react';
import type { Metadata } from 'next'

interface LayoutProps {
  
    children: React.ReactNode; 
}

export const metadata: Metadata = {
    title: 'حلول اختبارات التقدم - علمي 2',
    description: 'حلول اختبارات التقدم  - جامعة الملك عبد العزيز - علمي المستوى الثاني ELIS 120',
    keywords: 'حلول اختبارات التقدم, جامعة الملك عبد العزيز, علمي المستوى الثاني, ELIS 120, معهد اللغة الإنجليزية جامعة الملك عبد العزيز، موقع صفوف',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
        title: 'حلول اختبارات التقدم - علمي 2',
        description: 'حلول اختبارات التقدم - جامعة الملك عبد العزيز - علمي المستوى الثاني ELIS 120',
        url: 'https://www.sofuf.com/resources/kau/english/elis120/progress-quiz',
        siteName: 'Sofuf صفوف',
        images: [
          {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoAWPxvTx-M6z5MhO57TCb99S8UUB498DH2nXEWoVUQwrrnTA',
            width: 1200,
            height: 630,
          },
        ],
      },
      // Twitter meta tags
      twitter: {
        title: 'حلول اختبارات التقدم - علمي 2',
        description: 'حلول اختبارات التقدم - جامعة الملك عبد العزيز - علمي المستوى الثاني ELIS 120',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoAWPxvTx-M6z5MhO57TCb99S8UUB498DH2nXEWoVUQwrrnTA'],
      },
  
    };

 
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
         
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;