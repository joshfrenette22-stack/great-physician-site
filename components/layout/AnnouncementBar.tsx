// components/layout/AnnouncementBar.tsx
export function AnnouncementBar() {
  return (
    <div className="hidden md:block bg-gray-900 text-white/[0.78]">
      <div className="max-w-[1240px] mx-auto px-10 py-[9px] flex items-center gap-7 text-[13px] font-medium tracking-[0.01em]">
        <span className="text-white/[0.55] uppercase tracking-[0.18em] text-[11px] font-semibold">Why us</span>
        <span className="w-px h-3.5 bg-white/[0.18]" />
        <span>Conservative care first</span>
        <span className="opacity-40">·</span>
        <span>Physician-performed treatments</span>
        <span className="opacity-40">·</span>
        <span>Honest, evidence-based guidance</span>
        <span className="ml-auto inline-flex items-center gap-[7px] text-white/[0.92]">
          <span className="w-[7px] h-[7px] rounded-full bg-green-500" />
          Northern Colorado
        </span>
      </div>
    </div>
  );
}
