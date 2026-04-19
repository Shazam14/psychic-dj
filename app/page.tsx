export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#e8e8e8] flex flex-col">

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-center min-h-screen">
        <p className="text-xs tracking-[0.4em] uppercase text-[#555] mb-8">SKMC</p>
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight leading-tight max-w-2xl">
          We show up<br />
          <span className="text-[#444]">when it matters.</span>
        </h1>
        <p className="mt-10 text-sm text-[#444] max-w-xs leading-relaxed">
          The problem doesn&apos;t care what we&apos;re called.<br />
          Neither do we.
        </p>
        <div className="mt-16 w-px h-12 bg-[#222]" />
      </section>

      {/* What we do */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center border-t border-[#111]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#333] mb-12">What we do</p>
        <p className="text-lg sm:text-xl font-light text-[#666] max-w-lg leading-relaxed">
          We&apos;ve seen the problem before.<br />
          Maybe not yours exactly.<br />
          But close enough.
        </p>
      </section>

      {/* Ethos */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center border-t border-[#111]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#333] mb-12">Ethos</p>
        <p className="text-lg sm:text-xl font-light text-[#555] max-w-lg leading-relaxed">
          Whether it works or it doesn&apos;t —<br />
          something is always left behind<br />
          for the world.
        </p>
      </section>

      {/* Contact */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center border-t border-[#111]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#333] mb-8">Get in touch</p>
        <a
          href="mailto:hello@skmcconsulting.com"
          className="text-sm text-[#444] hover:text-[#e8e8e8] transition-colors duration-500 tracking-widest"
        >
          hello@skmcconsulting.com
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#111]">
        <p className="text-xs text-[#2a2a2a] tracking-widest">© SKMC</p>
      </footer>

    </main>
  );
}
