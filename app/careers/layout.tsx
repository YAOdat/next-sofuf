import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers | Sofuf',
    description: 'Explore educational career opportunities.',
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="w-full px-4 md:px-8">
                {children}
            </div>
        </section>
    );
}
