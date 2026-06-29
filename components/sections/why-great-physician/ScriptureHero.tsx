export function ScriptureHero() {
  return (
    <section className="bg-white">
      <div className="max-w-[1080px] mx-auto text-center" style={{ padding: '96px 40px 80px' }} data-reveal>
        <p
          className="font-semibold uppercase text-gray-400 mb-[26px]"
          style={{ fontSize: 13, letterSpacing: '0.16em' }}
        >
          The name we carry
        </p>
        <blockquote
          className="font-display font-extrabold text-teal-900 leading-tight mx-auto"
          style={{ fontSize: 42, lineHeight: 1.18, letterSpacing: '-0.025em', maxWidth: 880, margin: '0 auto' }}
        >
          &ldquo;They that be whole need not a physician, but they that are sick.&rdquo;
        </blockquote>
        <p
          className="font-semibold text-teal-600"
          style={{ marginTop: 22, fontSize: 16, letterSpacing: '0.02em' }}
        >
          Matthew 9:12, KJV
        </p>
        <p
          className="text-gray-700 mx-auto"
          style={{ margin: '34px auto 0', fontSize: 19, lineHeight: 1.62, maxWidth: 660 }}
        >
          We named this practice after the Great Physician because that is who we look to. He met people in their suffering with compassion and truth. We try, imperfectly, to do the same — treating each patient as a whole person with dignity, patience, and genuine care.
        </p>
      </div>
    </section>
  );
}
