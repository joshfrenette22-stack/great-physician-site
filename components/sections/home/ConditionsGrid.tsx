import Link from 'next/link';
import { Clock, Zap, Heart, Droplet, AlignJustify, HeartPulse } from 'lucide-react';
import { conditions } from '@/lib/data/conditions';

const icons = [Clock, Zap, Heart, Droplet, AlignJustify, HeartPulse];

export function ConditionsGrid() {
  return (
    <section
      className="w-full border-t border-b border-gray-100 py-20"
      style={{ background: '#F6F8FA' }}
      id="treat"
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        {/* Heading */}
        <div className="mb-4">
          <p className="gp-eyebrow mb-3">What we help with</p>
          <h2 className="text-[28px] md:text-[40px] font-black tracking-tight text-gray-900 max-w-[600px] mb-4">
            Most patients come to us with pain that limits the life they want to live.
          </h2>
          <p className="text-gray-500 max-w-[560px] leading-relaxed">
            We focus on musculoskeletal conditions — the joints, tendons, ligaments and soft tissue injuries where regenerative medicine has the clearest evidence.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
          {conditions.map((condition, i) => {
            const Icon = icons[i] ?? Clock;
            return (
              <div
                key={condition.id}
                className="bg-white border border-gray-100 rounded-[16px] p-6 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-md cursor-default"
              >
                {/* Icon chip */}
                <div className="w-11 h-11 rounded-[10px] bg-teal-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal-500" />
                </div>
                <h4 className="text-[17px] font-bold text-gray-900 mb-2">{condition.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{condition.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3.5 text-lg font-medium rounded-lg bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 shadow-sm transition-all duration-200"
          >
            Explore conditions we treat
          </Link>
        </div>
      </div>
    </section>
  );
}
