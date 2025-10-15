"use client";
import Link from "next/link";
import heroImage from "@/resource/doctorImage.png";

export default function Hero() {
  const heroContent = {
    title: "Get Appointment Easy And Fast",
    subtitle:
      "We have used (BHU) Kharasutra method for your piles, fissure, fistula and hydrocele treatment without any surgery with 100% money back guarantee",
    buttonText: "Book Now",
    buttonLink: "/book-appointment",
  };

  // Highlight dynamic part
  const highlightText = "100% money back guarantee";
  const parts = heroContent.subtitle.split(new RegExp(`(${highlightText})`, "gi"));

  return (
    <section className="relative mx-auto bg-gradient-to-r from-[var(--lightblue)] to-[var(--secondary)] pt-28">
      <div className="_max_width relative flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="text-center md:text-left space-y-7">
          {/* Title */}
          <h1 className="_h1 leading-tight font-extrabold">
            <span className="text-[var(--primary)]">
              {heroContent.title}
            </span>
          </h1>

          {/* Subtitle with dynamic highlight */}
          <p className="_p text-gray-700 max-w-lg mx-auto md:mx-0">
            {parts.map((part, index) =>
              part.toLowerCase() === highlightText.toLowerCase() ? (
                <span
                  key={index}
                  className="font-bold text-[var(--primary)] bg-white/60 px-2 py-1 rounded-md"
                >
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link href={heroContent.buttonLink} className="_btn">
              {heroContent.buttonText}
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="ml-0 md:ml-0 lg:ml-56">
          <img
            src={heroImage.src}
            alt="Doctor Image"
            className="h-[591px] w-full shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
