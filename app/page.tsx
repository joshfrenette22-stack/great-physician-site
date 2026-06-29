export default function Home() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-teal-900 text-white">
      <div className="max-w-[1280px] mx-auto px-10 py-32 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 mb-4">
          Northern Colorado
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tight leading-tight">
          Restoring Function.<br />Renewing Hope.
        </h1>
        <p className="mt-6 text-lg text-teal-200 max-w-xl mx-auto leading-relaxed">
          Conservative-first regenerative medicine. Physician-performed PRP, prolotherapy, and focused shockwave therapy.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/schedule"
            className="inline-flex items-center justify-center px-7 py-3.5 text-lg font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors shadow-sm"
          >
            Schedule a Visit
          </a>
          <a
            href="/how-it-works"
            className="text-sm font-medium text-teal-200 hover:text-white transition-colors"
          >
            How it works &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
