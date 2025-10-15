"use client";

import Image from "next/image";
import { useState } from "react";
import { Stethoscope, HeartPulse, Droplet, Activity } from "lucide-react";
import bannerImg from "@/resource/clinic1.jpg";
import Banner from "@/components/shared/Banner";

// ✅ Updated banner content for Treatment Page
const bannerContent = {
  image: bannerImg,
  alt: "Treatment Banner",
  title: "Our Comprehensive Treatments",
  description:
    "Tailored Ayurvedic and natural solutions for Piles, Fistula, Hydrocele, Fissure, and other hidden male & female disorders — with complete care and proven results.",
};

const treatmentCategories = [
  {
    id: 1,
    icon: <HeartPulse className="text-primary w-8 h-8" />,
    title: "Piles",
    description:
      "Proliferation or bleeding of flesh in the anus. Treated effectively using non-surgical Ayurvedic methods.",
  },
  {
    id: 2,
    icon: <Droplet className="text-primary w-8 h-8" />,
    title: "Fistula",
    description:
      "A wound in the rectum that causes discharge of pus from the anus. Treated safely and permanently.",
  },
  {
    id: 3,
    icon: <Activity className="text-primary w-8 h-8" />,
    title: "Hydrocele",
    description:
      "Accumulation of fluid in the testicles (small or large). Treated without surgery with guaranteed relief.",
  },
  {
    id: 4,
    icon: <Stethoscope className="text-primary w-8 h-8" />,
    title: "Fissure",
    description:
      "Cracking, burning, pain, or bleeding in the anus. Treated naturally for lasting comfort.",
  },
];

const specialTreatments = [
  {
    category: "Male Secret Diseases",
    description:
      "We provide successful treatment for nocturnal emission, premature ejaculation, thin semen, semen discharge with urine, and inability in sexual intercourse.",
  },
  {
    category: "Female Secret Diseases",
    description:
      "We offer treatment for leucorrhoea, irregular menstruation, and other common female secret disorders with complete care.",
  },
];

export default function Treatments() {
  const [active, setActive] = useState("All");

  return (
    <>
      {/* ===== Banner Section ===== */}
      <Banner banner={bannerContent} />

      {/* ===== Treatments Section ===== */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="_max_width text-center">
          <h1 className="_h1 text-darkblue mb-3">Our Treatments</h1>
          <p className="_p max-w-2xl mx-auto mb-10 text-gray-700">
            We provide natural, surgery-free treatments for piles, fistula,
            hydrocele, fissure, and other hidden male and female diseases with
            assured results.
          </p>

          {/* Treatments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {treatmentCategories.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="_h4 text-darkblue mb-2">{item.title}</h3>
                <p className="_p">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Specialized Treatments */}
          <div className="bg-lightblue rounded-2xl shadow-lg p-8 text-left space-y-6">
            <h2 className="_h2 text-darkblue text-center mb-6">
              Specialized Treatments
            </h2>

            {specialTreatments.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="_h4 text-primary mb-2">{item.category}</h3>
                <p className="_p text-gray-800">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
