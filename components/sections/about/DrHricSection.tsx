import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const checkItems = [
  'Experienced in PRP, prolotherapy & focused shockwave',
  'Conservative-first protocols, surgery only when truly needed',
  'A support team trained to walk with you, every step',
];

const mosaicImages = [
  {
    src: '/images/hric-headshot.jpg',
    alt: 'Dr. Jerry Hric',
    gridRow: 'span 2',
    objectPosition: 'center 20%',
  },
  {
    src: '/images/stock/photo-1551632811-561732d1e306.jpg',
    alt: 'Doctor and patient in consultation',
    gridRow: undefined,
    objectPosition: 'center center',
  },
  {
    src: '/images/cyclist-road.jpg',
    alt: 'Cyclist on road',
    gridRow: undefined,
    objectPosition: 'center 80%',
  },
  {
    src: '/images/stock/photo-1486739985386-d4fae04ca6f7.jpg',
    alt: 'Active lifestyle',
    gridRow: undefined,
    objectPosition: 'center center',
  },
  {
    src: '/images/stock/photo-1502904550040-7534597429ae.jpg',
    alt: 'Runner on trail',
    gridRow: undefined,
    objectPosition: 'center center',
  },
];

export function DrHricSection() {
  return (
    <section className="bg-white w-full">
      <div
        className="max-w-[1240px] mx-auto"
        style={{ padding: '110px 40px' }}
      >
        <div
          className="grid grid-cols-1 items-center"
          style={{ gridTemplateColumns: '1fr 1.05fr', gap: 56 }}
        >
          {/* Left column */}
          <div>
            <h2
              className="font-display font-extrabold text-gray-900 text-[32px] md:text-[50px]"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.06, margin: '0 0 24px' }}
            >
              Led by Dr. Hric &amp; a team who listens
            </h2>

            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-body, #374151)', margin: '0 0 26px', maxWidth: 480 }}>
              Dr. Hric brings years of experience in regenerative and sports medicine to Northern Colorado. Every patient gets unhurried visits, honest guidance, and a clear plan, never a hard sell.
            </p>

            {/* Check items */}
            <div className="flex flex-col" style={{ gap: 16, marginBottom: 34 }}>
              {checkItems.map((item) => (
                <div key={item} className="flex items-center" style={{ gap: 12 }}>
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full bg-green-700"
                    style={{ width: 24, height: 24 }}
                  >
                    <Check className="text-white" size={13} strokeWidth={3} />
                  </span>
                  <span className="font-medium text-gray-900" style={{ fontSize: 16 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/schedule">
              <Button variant="primary" size="lg">Schedule a Visit</Button>
            </Link>
          </div>

          {/* Right column — mosaic grid (hidden on mobile, shown md+) */}
          <div
            className="hidden md:grid"
            style={{
              gridTemplateColumns: '1fr 1fr',
              gridAutoRows: '168px',
              gap: 14,
            }}
          >
            {mosaicImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[18px]"
                style={{ gridRow: img.gridRow }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: img.objectPosition }}
                  sizes="(max-width: 1280px) 50vw, 310px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
