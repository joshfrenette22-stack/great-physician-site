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
    alt: 'Patient in rehab session',
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
        className="max-w-[1240px] mx-auto px-5 md:px-10 py-16 md:py-[104px]"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14"
        >
          {/* Left column */}
          <div>
            <h2
              className="font-display font-black text-gray-900 mb-6 text-[32px] md:text-[50px]"
              style={{ letterSpacing: '-0.025em', lineHeight: 1.08 }}
            >
              Led by Dr. Hric &amp; a team who listens
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8" style={{ fontSize: 18 }}>
              Dr. Jerry Hric founded Great Physician Regenerative Medicine because he saw too many patients bounced between specialists, oversold on expensive procedures, and left without real answers. He built something different — a small, intentional practice where conservative care comes first and physician involvement never stops.
            </p>

            {/* Check items */}
            <ul className="flex flex-col gap-4 mb-10 list-none" style={{ padding: 0, margin: '0 0 2.5rem' }}>
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full bg-green-700 mt-0.5"
                    style={{ width: 24, height: 24 }}
                  >
                    <Check className="text-white" size={13} strokeWidth={3} />
                  </span>
                  <span className="text-gray-700 leading-relaxed" style={{ fontSize: 16 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

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
