function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-[18px]">
      {/* Phone */}
      <div className="border border-gray-200 rounded-[18px] p-[26px]">
        <div
          className="inline-flex items-center justify-center bg-green-50 text-green-600 mb-4"
          style={{ width: 44, height: 44, borderRadius: 12 }}
        >
          <PhoneIcon />
        </div>
        <p
          className="text-xs font-semibold uppercase text-gray-400 mb-[5px]"
          style={{ letterSpacing: '0.04em' }}
        >
          Call us
        </p>
        <a
          href="tel:+19705550142"
          className="font-display font-bold text-teal-900 hover:text-teal-700 transition-colors"
          style={{ fontSize: 23, textDecoration: 'none' }}
        >
          (970) 555-0142
        </a>
      </div>

      {/* Visit */}
      <div className="border border-gray-200 rounded-[18px] p-[26px]">
        <div
          className="inline-flex items-center justify-center bg-green-50 text-green-600 mb-4"
          style={{ width: 44, height: 44, borderRadius: 12 }}
        >
          <MapPinIcon />
        </div>
        <p
          className="text-xs font-semibold uppercase text-gray-400 mb-[5px]"
          style={{ letterSpacing: '0.04em' }}
        >
          Visit
        </p>
        <p className="text-gray-700" style={{ fontSize: 16.5, lineHeight: 1.55, margin: 0 }}>
          Within Dr. Tyler Wood&apos;s office<br />Northern Colorado
        </p>
      </div>

      {/* Hours */}
      <div className="border border-gray-200 rounded-[18px] p-[26px]">
        <div
          className="inline-flex items-center justify-center bg-green-50 text-green-600 mb-4"
          style={{ width: 44, height: 44, borderRadius: 12 }}
        >
          <ClockIcon />
        </div>
        <p
          className="text-xs font-semibold uppercase text-gray-400 mb-3"
          style={{ letterSpacing: '0.04em' }}
        >
          Hours
        </p>
        <div className="flex flex-col gap-2 text-gray-700" style={{ fontSize: 15.5 }}>
          <div className="flex justify-between">
            <span>Mon – Thu</span>
            <span className="text-gray-500">8:00 – 5:00</span>
          </div>
          <div className="flex justify-between">
            <span>Friday</span>
            <span className="text-gray-500">8:00 – 12:00</span>
          </div>
          <div className="flex justify-between">
            <span>Sat – Sun</span>
            <span className="text-gray-400">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
