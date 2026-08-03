import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid-bg flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <div className="corners border border-line bg-white/70 px-10 py-14 md:px-16">
        <p className="label text-accent">Error — page not found</p>
        <div className="display mt-6 text-[clamp(5rem,20vw,11rem)] leading-none text-ink">
          404
        </div>
        <p className="mt-6 font-mono text-xs tracking-[0.14em] uppercase text-ink-soft">
          The page you&apos;re looking for isn&apos;t in this index.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="bg-ink px-6 py-3 font-mono text-xs tracking-[0.12em] uppercase text-paper transition-colors hover:bg-accent"
          >
            Back to index
          </Link>
          <Link
            href="/about"
            className="border border-line px-6 py-3 font-mono text-xs tracking-[0.12em] uppercase text-ink transition-colors hover:border-accent hover:text-accent"
          >
            About
          </Link>
        </div>
      </div>
    </main>
  );
}