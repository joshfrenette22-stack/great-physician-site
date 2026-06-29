import Link from 'next/link';
import { MinusCircle, CheckCircle } from 'lucide-react';

const cautionItems = [
  {
    label: 'Stem cell therapy',
    note: 'Most marketed "stem cell" products do not contain living stem cells. We don\'t offer them until the evidence is clearer.',
  },
  {
    label: 'Exosomes',
    note: 'Promising research, but current products are inconsistent and largely unregulated. We\'re watching this space carefully.',
  },
];

const recommendItem = {
  label: 'What we do offer',
  note: 'PRP, prolotherapy, and focused shockwave therapy — three modalities with a clear, peer-reviewed evidence base for the conditions we treat.',
};

export function HonestGuidance() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="gp-eyebrow mb-4">Education as care</p>
          <h2 className="text-[40px] font-black tracking-tight text-gray-900 leading-tight mb-6">
            We&apos;ll tell you what we don&apos;t recommend — and why.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The regenerative medicine market moves fast, and not everything being sold has the science to back it up. Part of our job is helping you sort through the noise — even if that means telling you something isn&apos;t ready yet.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Honest guidance isn&apos;t just a selling point. It&apos;s the only way to actually earn trust, and the only way to actually help people.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-teal-600 border border-gray-200 hover:bg-gray-50 text-sm font-semibold transition-colors"
          >
            Read our patient resources
          </Link>
        </div>

        {/* Right: dark teal card */}
        <div
          className="rounded-[24px] p-9"
          style={{ background: 'linear-gradient(135deg, #102A3B 0%, #16384C 100%)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-300 mb-6">
            What we&apos;re cautious about
          </p>

          <div className="space-y-4 mb-6">
            {cautionItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <MinusCircle className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-white/55 leading-relaxed mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">{recommendItem.label}</p>
                <p className="text-sm text-white/55 leading-relaxed mt-0.5">{recommendItem.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
