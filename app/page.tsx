export default function Home() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', padding: 'var(--space-7)' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-strong)', fontSize: 'var(--text-4xl)', fontWeight: 800 }}>
        Great Physician
      </h1>
      <p className="gp-eyebrow">Regenerative Medicine</p>
      <p className="gp-text-gradient" style={{ fontSize: 'var(--text-3xl)', fontWeight: 800 }}>
        Gradient Text Test
      </p>
      <div className="mt-8 flex gap-4">
        <div className="bg-teal-600 text-white p-4 rounded-card">Teal 600</div>
        <div className="bg-green-500 text-white p-4 rounded-card">Green 500</div>
        <div className="bg-teal-900 text-white p-4 rounded-card">Teal 900</div>
      </div>
    </div>
  );
}
