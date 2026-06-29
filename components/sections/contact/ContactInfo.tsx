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

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-[18px] p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <InfoCard icon={<PhoneIcon />} title="Call us">
        <a
          href="tel:9705550142"
          className="text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors"
        >
          (970) 555-0142
        </a>
        <p className="text-gray-500 text-sm mt-0.5">Mon–Fri during office hours</p>
      </InfoCard>

      <InfoCard icon={<MapPinIcon />} title="Visit">
        <p className="text-gray-700 text-sm leading-relaxed">
          Within Dr. Tyler Wood&apos;s office
          <br />
          Northern Colorado
        </p>
      </InfoCard>

      <InfoCard icon={<ClockIcon />} title="Hours">
        <div className="text-sm text-gray-700 space-y-1 mt-0.5">
          <div className="flex justify-between gap-6">
            <span className="text-gray-500">Mon – Thu</span>
            <span className="font-medium">8:00 am – 5:00 pm</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-gray-500">Friday</span>
            <span className="font-medium">8:00 am – 12:00 pm</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-gray-500">Sat – Sun</span>
            <span className="font-medium text-gray-400">Closed</span>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}
