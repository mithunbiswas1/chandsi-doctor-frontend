"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import bannerImg from "@/resource/clinic1.jpg";
import Banner from "@/components/shared/Banner";

const bannerContent = {
  image: bannerImg,
  alt: "Clinic Banner",
  title: "Our Clinics",
  description:
    "Discover trusted healthcare facilities near you — where compassionate care meets advanced treatment.",
};

export const ClinicPagr = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await axios.get("/data/clinics.json");
        setClinics(response.data);
      } catch (error) {
        console.error("Failed to fetch clinics:", error);
      }
    };
    fetchClinics();
  }, []);

  return (
    <>
      {/* ===== Banner Section ===== */}
      <Banner banner={bannerContent} />

      {/* ===== Clinics Section ===== */}
      <section className="py-20 bg-gradient-to-br from-[#f9fbfd] to-[#eef3f8]">
        <div className="_max_width">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-[var(--primary)] mb-3">
              Find Your Nearest Clinic
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose from our trusted network of modern clinics — each designed
              to provide exceptional care for you and your loved ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clinics.map((clinic, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={clinic.imageUrl}
                    alt={clinic.name}
                    fill
                    className="object-cover rounded-t-2xl transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{clinic.name}</h3>
                    <p className="text-sm opacity-80">{clinic.tagline}</p>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-[var(--primary)] mt-0.5" />
                    <p className="text-sm">{clinic.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-[var(--primary)]" />
                    <p className="text-sm">{clinic.hours}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-5 h-5 text-[var(--primary)]" />
                    <p className="text-sm">{clinic.phone}</p>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/book-appointment"
                      className="block text-center bg-[var(--primary)] text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

{/* Map Section */}
      <section className="relative  h-[400px] _max_width mt-10 rounded-xl ">
        <iframe
          className="w-full h-full border-0 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509243!2d144.95373631531838!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2dfeb8f%3A0xf5776b4a1b4a4a1!2s123%20Healthline%20Ave%2C%20Anytown%2C%20CA!5e0!3m2!1sen!2sus!4v1699932409245!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* Overlay Directions Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
          <a
            href="https://www.google.com/maps/dir//123+Healthline+Ave,+Suite+100,+Anytown,+CA+12344"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto bg-[var(--color-primary)] text-[var(--white)] px-6 py-2 rounded-md font-semibold shadow-md hover:bg-[#024bb5] transition-all"
          >
            GET DIRECTIONS
          </a>

          <p className="mt-3 text-sm text-[var(--color-darkblue)] bg-[var(--color-secondary)] px-3 py-1 rounded-md shadow-sm pointer-events-none">
            FREE validated parking in the attached garage. One block from Elm St. Subway.
          </p>
        </div>
      </section>

      </section>
    </>
  );
};

export default Clinics;
