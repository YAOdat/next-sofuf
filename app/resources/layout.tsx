export default function DocsLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (
	  <section className="w-full max-w-full py-8 md:py-10">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  {children}
		</div>
	  </section>
	);
  }