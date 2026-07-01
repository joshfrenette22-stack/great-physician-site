'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ValueStop {
  eyebrow: string;
  title: string;
  body: string;
  images: [
    { src: string; depth: number; side: 'left' | 'right' },
    { src: string; depth: number; side: 'left' | 'right' },
  ];
}

const values: ValueStop[] = [
  {
    eyebrow: 'Our first principle',
    title: 'Conservative care, first',
    body: 'We start with the least invasive, least expensive option that can realistically help, and we\'ll tell you honestly when surgery is the better path.',
    images: [
      { src: '/images/stock/photo-1573497019940-1c28c88b4f3e.jpg', depth: 80, side: 'left' },
      { src: '/images/stock/photo-1486218119243-13883505764c.jpg', depth: 210, side: 'right' },
    ],
  },
  {
    eyebrow: 'One physician, start to finish',
    title: 'Physician-performed treatments',
    body: 'Every regenerative treatment is performed by Dr. Hric himself, the same hands that diagnosed you, guiding the care that follows.',
    images: [
      { src: '/images/stock/photo-1576765608866-5b51046452be.jpg', depth: 210, side: 'left' },
      { src: '/images/stock/photo-1476480862126-209bfaa8edc8.jpg', depth: 80, side: 'right' },
    ],
  },
  {
    eyebrow: 'No hype, no overselling',
    title: 'Evidence-based, honestly explained',
    body: 'We use treatments with real evidence behind them, and we\'ll always tell you plainly what we do and don\'t yet know about your options.',
    images: [
      { src: '/images/stock/photo-1521119989659-a83eee488004.jpg', depth: 80, side: 'left' },
      { src: '/images/stock/photo-1530549387789-4c1017266635.jpg', depth: 210, side: 'right' },
    ],
  },
  {
    eyebrow: 'Why "Great Physician"',
    title: 'Whole-person stewardship',
    body: 'Our name points to Jesus Christ, the Great Physician. We care for the whole person, body and spirit, as faithful stewards of the health you\'ve been given.',
    images: [
      { src: '/images/stock/photo-1551836022-d5d88e9218df.jpg', depth: 210, side: 'left' },
      { src: '/images/stock/photo-1452626038306-9aae5e071dd3.jpg', depth: 80, side: 'right' },
    ],
  },
];

function lerpColor(a: number[], b: number[], t: number): string {
  const r = Math.round(a[0] + (b[0] - a[0]) * t);
  const g = Math.round(a[1] + (b[1] - a[1]) * t);
  const bl = Math.round(a[2] + (b[2] - a[2]) * t);
  return `rgb(${r},${g},${bl})`;
}

const colorStops: number[][] = [
  [28, 122, 57],   // green-800 approx
  [22, 56, 76],    // teal-800
  [35, 90, 124],   // teal-600 approx
  [46, 168, 78],   // bright green
];

export function PinnedValuesScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const curPRef = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setReducedMotion(true);
      return;
    }

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewH = window.innerHeight;

        // progress 0–1 as section scrolls through
        const rawProgress = (-rect.top) / (sectionHeight - viewH);
        const targetP = Math.max(0, Math.min(1, rawProgress));

        // critically-damped easing
        curPRef.current += (targetP - curPRef.current) * 0.10;
        const p = curPRef.current;

        // Background color lerp across 4 stops
        const segCount = colorStops.length - 1;
        const colorIdx = p * segCount;
        const colorFloor = Math.min(Math.floor(colorIdx), segCount - 1);
        const colorT = colorIdx - colorFloor;
        const bg = lerpColor(colorStops[colorFloor], colorStops[colorFloor + 1], colorT);
        if (bgRef.current) bgRef.current.style.background = bg;

        // Per-segment opacity for text + images
        const segSize = 1 / values.length;
        values.forEach((_, i) => {
          const segStart = i * segSize;
          const segCenter = segStart + segSize / 2;
          const dist = Math.abs(p - segCenter) / (segSize * 0.7);
          const opacity = Math.max(0, Math.min(1, 1 - dist));

          const textEl = textRefs.current[i];
          if (textEl) {
            // Text: fade only, no movement — matches design JS (text position locked)
            textEl.style.opacity = String(opacity);
          }

          // Images: parallax using translate3d per design
          values[i].images.forEach((img, j) => {
            const imgEl = imageRefs.current[i * 2 + j];
            if (!imgEl) return;
            const seg = p * (values.length - 1);
            const d = seg - i;
            imgEl.style.opacity = String(opacity);
            imgEl.style.transform = `translate3d(0,${(d * -img.depth).toFixed(1)}px,0)`;
          });
        });
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Reduced motion: static stacked layout
  if (reducedMotion) {
    return (
      <section className="w-full py-24" style={{ background: '#1C7A39' }}>
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 flex flex-col gap-20">
          {values.map((v) => (
            <div key={v.title} className="text-center text-white max-w-[500px] mx-auto">
              <p
                className="font-semibold mb-[22px]"
                style={{ fontSize: 15, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.8)' }}
              >
                {v.eyebrow}
              </p>
              <h2
                className="font-display font-extrabold mb-[22px] text-[30px] md:text-[52px]"
                style={{ lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}
              >
                {v.title}
              </h2>
              <p style={{ fontSize: 20, lineHeight: 1.55, color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: '560vh' }}
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 w-full overflow-hidden flex items-center justify-center"
        style={{ height: '100vh' }}
      >
        {/* Animated background */}
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{ background: `rgb(${colorStops[0].join(',')})`, transition: 'background 0.05s linear' }}
          aria-hidden="true"
        />

        {/* Image groups — hidden on mobile/tablet, shown lg+ where there's room beside the text */}
        {/* Group 0 */}
        <div
          ref={(el) => { imageRefs.current[0] = el; }}
          className="absolute hidden lg:block"
          style={{ left: '4%', top: '10%', width: 'min(420px, 28vw)', height: 'min(320px, 22vw)', opacity: 1, willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <Image src={values[0].images[0].src} alt="" fill className="object-cover" sizes="(max-width: 1023px) 0px, 420px"
            style={{ borderRadius: 22, boxShadow: '0 30px 70px rgba(0,0,0,0.34)' }} />
        </div>
        <div
          ref={(el) => { imageRefs.current[1] = el; }}
          className="absolute hidden lg:block"
          style={{ right: '4.5%', bottom: '8%', width: 'min(360px, 24vw)', height: 'min(450px, 30vw)', opacity: 1, willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <Image src={values[0].images[1].src} alt="" fill className="object-cover" sizes="(max-width: 1023px) 0px, 360px"
            style={{ borderRadius: 22, boxShadow: '0 30px 70px rgba(0,0,0,0.36)' }} />
        </div>

        {/* Group 1 */}
        <div
          ref={(el) => { imageRefs.current[2] = el; }}
          className="absolute hidden lg:block"
          style={{ left: '4%', top: '8%', width: 'min(370px, 25vw)', height: 'min(460px, 31vw)', opacity: 0, willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <Image src={values[1].images[0].src} alt="" fill className="object-cover" sizes="(max-width: 1023px) 0px, 370px"
            style={{ borderRadius: 22, boxShadow: '0 30px 70px rgba(0,0,0,0.36)' }} />
        </div>
        <div
          ref={(el) => { imageRefs.current[3] = el; }}
          className="absolute hidden lg:block"
          style={{ right: '4.5%', bottom: '11%', width: 'min(410px, 27vw)', height: 'min(320px, 22vw)', opacity: 0, willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <Image src={values[1].images[1].src} alt="" fill className="object-cover" sizes="(max-width: 1023px) 0px, 410px"
            style={{ borderRadius: 22, boxShadow: '0 30px 70px rgba(0,0,0,0.34)' }} />
        </div>

        {/* Group 2 */}
        <div
          ref={(el) => { imageRefs.current[4] = el; }}
          className="absolute hidden lg:block"
          style={{ left: '4%', top: '10%', width: 'min(420px, 28vw)', height: 'min(320px, 22vw)', opacity: 0, willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <Image src={values[2].images[0].src} alt="" fill className="object-cover" sizes="(max-width: 1023px) 0px, 420px"
            style={{ borderRadius: 22, boxShadow: '0 30px 70px rgba(0,0,0,0.34)' }} />
        </div>
        <div
          ref={(el) => { imageRefs.current[5] = el; }}
          className="absolute hidden lg:block"
          style={{ right: '4.5%', bottom: '8%', width: 'min(360px, 24vw)', height: 'min(450px, 30vw)', opacity: 0, willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <Image src={values[2].images[1].src} alt="" fill className="object-cover" sizes="(max-width: 1023px) 0px, 360px"
            style={{ borderRadius: 22, boxShadow: '0 30px 70px rgba(0,0,0,0.36)' }} />
        </div>

        {/* Group 3 */}
        <div
          ref={(el) => { imageRefs.current[6] = el; }}
          className="absolute hidden lg:block"
          style={{ left: '4%', top: '8%', width: 'min(370px, 25vw)', height: 'min(450px, 30vw)', opacity: 0, willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <Image src={values[3].images[0].src} alt="" fill className="object-cover" sizes="(max-width: 1023px) 0px, 370px"
            style={{ borderRadius: 22, boxShadow: '0 30px 70px rgba(0,0,0,0.36)' }} />
        </div>
        <div
          ref={(el) => { imageRefs.current[7] = el; }}
          className="absolute hidden lg:block"
          style={{ right: '4.5%', bottom: '10%', width: 'min(380px, 26vw)', height: 'min(420px, 28vw)', opacity: 0, willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <Image src={values[3].images[1].src} alt="" fill className="object-cover" sizes="(max-width: 1023px) 0px, 380px"
            style={{ borderRadius: 22, boxShadow: '0 30px 70px rgba(0,0,0,0.34)' }} />
        </div>

        {/* Text groups */}
        {values.map((v, i) => (
          <div
            key={v.title}
            ref={(el) => { textRefs.current[i] = el; }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
            style={{
              opacity: 0,
              willChange: 'transform, opacity',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            <div style={{ maxWidth: 500 }}>
              <p
                className="font-semibold mb-[14px] md:mb-[22px]"
                style={{ fontSize: 13, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.8)' }}
              >
                {v.eyebrow}
              </p>
              <h2
                className="font-display font-extrabold mb-[14px] md:mb-[22px] text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px]"
                style={{ lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}
              >
                {v.title}
              </h2>
              <p className="text-[15px] md:text-[18px] lg:text-[20px]" style={{ lineHeight: 1.55, color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                {v.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
