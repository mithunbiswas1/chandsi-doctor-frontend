"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { MapPin, Clock, Phone } from "lucide-react";

const ClinicsSection = () => {
  const [clinics, setClinics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await axios.get("/data/clinics.json");
        setClinics(response.data);
      } catch (error) {
        console.error("Failed to fetch clinics:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchClinics();
  }, []);

  if (isLoading)
    return (
      <p className="text-center mt-16 text-[var(--primary)] font-medium">
        Loading clinic data...
      </p>
    );

  if (!clinics.length && !isLoading)
    return (
      <p className="text-center mt-16 text-red-500">
        No clinic data available.
      </p>
    );

  return (
    <section className="mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="_max_width mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[var(--primary)] uppercase mb-2">
            Your Health Partners
          </p>
          <h2 className="_h2 text-[var(--darkblue)] text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Three Clinic Locations
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Find the facility closest to you for accessible, high-quality care
            and service.
          </p>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden 
              shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-52 md:h-56">
                <Image
                  src={clinic.imageUrl}
                  alt={clinic.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 group-hover:text-[var(--primary)] transition-colors">
                    {clinic.name}
                  </h3>
                  <p className="text-[var(--primary)] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                    {clinic.tagline}
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 border-t border-gray-100 pt-3 sm:pt-4">
                    <div className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600">
                      <MapPin className="w-4 h-4 text-[var(--primary)] mt-0.5" />
                      <span>{clinic.location}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600">
                      <Clock className="w-4 h-4 text-[var(--primary)] mt-0.5" />
                      <span>{clinic.hours}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600">
                      <Phone className="w-4 h-4 text-[var(--primary)] mt-0.5" />
                      <Link
                        href={`tel:${clinic.phone}`}
                        className="hover:text-[var(--darkblue)] transition font-medium"
                      >
                        {clinic.phone}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <div className="mt-5">
                  <Link
                    href="/book-appointment"
                    className="block text-center bg-[var(--primary)] hover:bg-[var(--darkblue)] 
                    text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-300 
                    shadow hover:shadow-md text-sm sm:text-base uppercase tracking-wide"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
