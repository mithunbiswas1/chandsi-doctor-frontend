import {
  Stethoscope,
  Heart,
  Syringe,
  Shield,
  Microscope,
  Bone,
} from 'lucide-react';

const leftServices = [
  {
    icon: <Stethoscope size={48} />,
    title: 'Hydrocele',
    description: 'Accumulation of water in the testicles (small or large)',
  },
  {
    icon: <Heart size={48} />,
    title: 'Fissure',
    description: 'Cracking, burning, pain or bleeding in the anus',
  },
];

const services = [
  {
    icon: <Syringe size={48} />,
    title: 'Piles',
    description: 'Proliferation or bleeding of flesh in the anus',
  },
  {
    icon: <Shield size={48} />,
    title: 'Fistula',
    description: 'A wound in the rectum i.e. discharge of pus from the anus',
  },
  {
    icon: <Microscope size={48} />,
    title: 'Pathology Lab',
    description: 'State-of-the-art lab facilities for accurate results.',
  },
  {
    icon: <Bone size={48} />,
    title: 'Orthopedics',
    description:
      'Specialized care for bones, joints, and muscles to restore mobility and strength.',
  },
];

const sectionContent = {
  title:
    'Successful treatment of all types of occult diseases in men is provided.',
  description:
    'We offer expert doctors, advanced technology, and dedicated service to ensure complete healthcare for your family.',
};

export default function Services() {
  return (
    <section className="mt-24 bg-gradient-to-r from-[var(--lightblue)] to-[var(--secondary)] py-8">
      <div className="_max_width">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col h-full justify-between">
            {/* Heading */}
            <div>
              <h2 className="text-4xl font-bold text-primary leading-snug">
                {sectionContent.title}
              </h2>
              <p className="mt-4 text-gray-600">{sectionContent.description}</p>
            </div>

            {/* Left Cards */}
            <div className="grid grid-cols-2 gap-6">
              {leftServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md border border-transparent hover:border-blue-200 transition-all duration-300 flex flex-col h-52"
                >
                  <div className="mb-3 text-blue-500">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--darkblue)] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md border border-transparent hover:border-blue-200 transition-all duration-300 flex flex-col h-52"
              >
                <div className="mb-3 text-blue-500">{service.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--darkblue)] mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
