import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';

export function EmotionalBand() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-8">
      <div className="relative rounded-[28px] overflow-hidden min-h-[560px] flex items-center">
        {/* Background image */}
        <Image
          src="/images/stock/photo-1452626038306-9aae5e071dd3.jpg"
          alt="Active lifestyle"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 32%' }}
          sizes="1240px"
        />

        {/* Left gradient scrim */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(16,42,59,0.90) 0%, rgba(16,42,59,0.65) 50%, rgba(16,42,59,0.15) 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 px-16 py-14 max-w-[600px]">
          <h2 className="text-[46px] font-black text-white tracking-tight leading-[1.08] mb-8">
            You know your own body. When something&apos;s off, you deserve straight answers.
          </h2>

          <div className="flex flex-col gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-teal-800 text-sm font-semibold hover:bg-gray-50 transition-colors w-fit"
            >
              Find my treatment
              <ChevronRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Now welcoming patients across Northern Colorado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
