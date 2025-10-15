import Image from "next/image";
import Link from "next/link";
import logo from "@/resource/footerLogo.png";

const footerData = {
  usefulLinks: [
    { name: "Home", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Our Doctors", url: "#" },
    { name: "Treatments", url: "#" },
    { name: "Clinics", url: "#" },
    { name: "Contact Us", url: "#" },
  ],
  services: [
    { name: "Emergency Care", url: "#" },
    { name: "Diagnostics", url: "#" },
    { name: "Therapies", url: "#" },
    { name: "Online Consultation", url: "#" },
    { name: "Pharmacy Support", url: "#" },
  ],
  connect: [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "YouTube", url: "#" },
  ],
  copyright: "HealthCare Clinic",
};

export default function Footer() {
  return (
    <footer className="bg-darkblue text-white">
      <div className="_max_width mx-auto py-12 px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
          {/* Company Details */}
          <div className="md:col-span-2 pb-20 md:pb-0">
            <Link href="#" className="-m-1.5">
              <span className="sr-only">HealthCare Clinic</span>
              <Image
                src={logo}
                alt="Healthcare Clinic Logo"
                width={80}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </Link>
            <p className="pr-4 md:pr-10 lg:pr-20 text-gray-400 se-p">
              HealthCare Clinic is committed to providing trusted care with 
              modern treatments, expert doctors, and a compassionate environment 
              for every patient.
            </p>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="se-h4">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              {footerData.usefulLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-white se-p"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="se-h4">Our Services</h3>
            <ul className="mt-4 space-y-2">
              {footerData.services.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-white se-p"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="se-h4">Connect With Us</h3>
            <ul className="mt-4 space-y-2">
              {footerData.connect.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-white se-p"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 se-p">
            &copy; {new Date().getFullYear()} {footerData.copyright}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
