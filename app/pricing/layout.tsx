export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center">
      <div className="inline-block max-w-5xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}
