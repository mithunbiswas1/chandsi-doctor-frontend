"use client";
import React from "react";
import bannerImg from "@/resource/clinic1.jpg";
import Banner from "@/components/shared/Banner";
import { Phone, MapPin, Clock } from "lucide-react";

export default function page() {
  const contactBanner = {
    image: bannerImg,
    alt: "Contact Us Banner",
    title: "Get in Touch",
    description:
      "Need assistance? Reach out for appointments, inquiries, or urgent medical support. We're here to help you every step of the way.",
  };

  return (
    <>
      <Banner banner={contactBanner} />

      {/* Contact Section */}
      <section className="pb-10 bg-gradient-to-r from-[var(--lightblue)] to-[var(--secondary)] pt-24">
        <div className="_max_width grid md:grid-cols-2 gap-10">
          {/* Left Info Box */}
          <div className="bg-[var(--color-secondary)] rounded-xl p-8 shadow-lg border border-[var(--color-lightblue)]">
            <h2 className="_h5 text-[var(--color-darkblue)] mb-4">
              IMMEDIATE ASSISTANCE
            </h2>

            <div className="flex items-center gap-3 text-xl font-bold text-[var(--color-primary)] mb-4">
              <Phone className="text-[var(--color-primary)]" />
              <span>(555) 123-4567</span>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-[var(--color-primary)] mt-1" />
              <p className="_p">
                <span className="font-semibold text-[var(--color-darkblue)]">
                  OUR LOCATION:
                </span>
                <br />
                123 Healthline Ave, Suite 100, Anytown, CA 12344
              </p>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <Clock className="text-[var(--color-primary)] mt-1" />
              <div>
                <p className="font-semibold text-[var(--color-darkblue)]">
                  CLINIC HOURS
                </p>
                <ul className="_p leading-6">
                  <li>Mon - Fri: 8:00 AM - 5:00 PM</li>
                  <li>Saturday: 9:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                  <li className="text-[var(--color-primary)] font-semibold">
                    *Today’s Hours: Open until 5:00 PM
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded text-sm font-medium text-[var(--color-darkblue)]">
              <span className="font-bold">FOR EMERGENCIES:</span> Call 911
              immediately.
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-[var(--color-secondary)] rounded-xl p-8 shadow-lg border border-[var(--color-lightblue)]">
            <h2 className="_h5 text-[var(--color-darkblue)] mb-6">
              SEND US A MESSAGE
            </h2>

            <form className="space-y-4">
              <div>
                <label className="_h6 text-[var(--color-darkblue)]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-[var(--color-lightblue)] rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-[var(--black)]"
                />
              </div>

              <div>
                <label className="_h6 text-[var(--color-darkblue)]">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border border-[var(--color-lightblue)] rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-[var(--black)]"
                />
              </div>

              <div>
                <label className="_h6 text-[var(--color-darkblue)]">
                  Reason for Contact
                </label>
                <select className="w-full border border-[var(--color-lightblue)] rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-[var(--black)]">
                  <option>General Question</option>
                  <option>Appointment Request</option>
                  <option>Billing Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="_h6 text-[var(--color-darkblue)]">
                  Your Message
                </label>
                <textarea
                  rows="3"
                  placeholder="Write your message here..."
                  className="w-full border border-[var(--color-lightblue)] rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-[var(--black)]"
                ></textarea>
              </div>

              <button type="submit" className="_btn w-full">
                SEND MESSAGE
              </button>
            </form>
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
}
