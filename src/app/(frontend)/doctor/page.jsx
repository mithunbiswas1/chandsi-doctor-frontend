"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

// Images
import img1 from "@/resource/profile1.jpeg";
import img2 from "@/resource/profile2.jpeg";
import img3 from "@/resource/profile3.jpeg";
import img4 from "@/resource/profile4.jpeg";
import bannerImg from "@/resource/clinic1.jpg";
import Banner from "@/components/shared/Banner";

const doctorBanner = {
  image: bannerImg,
  alt: "Experienced Doctors",
  title: "Meet Our Expert Doctors",
  description:
    "Our dedicated doctors combine experience, compassion, and advanced medical knowledge to ensure the best care for every patient.",
};

// Data
const people = [
  {
    name: "Rafel Mridha",
    position: "MD, Star IT",
    image: img1,
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Rakibul Islam",
    position: "CTO, Star IT",
    image: img2,
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sadia Amin",
    position: "CMO, Star IT",
    image: img3,
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Fahim Chowdhury",
    position: "COO, Star IT",
    image: img4,
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Nusrat Jahan",
    position: "HR Head, Star IT",
    image: img1,
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

export default function DoctorPage() {
  const [featured, ...others] = people;

  return (
    <>
      <Banner banner={doctorBanner} />

      <section className="max-w-7xl mx-auto px-6 pt-28 pb-14">
        {/* Featured Doctor */}
        <div className="bg-white shadow-lg rounded-t-md overflow-hidden flex flex-col md:flex-row items-center md:items-stretch mb-16">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-96 md:h-96">
            <Image
              src={featured.image}
              alt={featured.name}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-8 text-center md:text-left flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200">
            <h2 className="text-3xl font-bold text-darkblue">
              {featured.name}
            </h2>
            <p className="text-primary text-lg font-semibold">
              {featured.position}
            </p>
            <p className="mt-4 text-gray-600">
              We are dedicated to excellence in healthcare and technology. Meet
              our leaders shaping the future with innovation and compassion.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-5 text-gray-500">
              <a
                href={featured.social.facebook}
                target="_blank"
                className="hover:text-primary"
              >
                <Facebook size={22} />
              </a>
              <a
                href={featured.social.instagram}
                target="_blank"
                className="hover:text-pink-500"
              >
                <Instagram size={22} />
              </a>
              <a
                href={featured.social.linkedin}
                target="_blank"
                className="hover:text-blue-700"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Other Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {others.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-lg transition"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-darkblue">{person.name}</h3>
              <p className="text-primary text-sm">{person.position}</p>
              <p className="text-sm text-gray-600 mt-2">
                We are dedicated to healthcare innovation and excellence.
              </p>
              <div className="flex gap-3 mt-4 text-gray-500">
                <a
                  href={person.social.facebook}
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={person.social.instagram}
                  target="_blank"
                  className="hover:text-pink-500"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={person.social.linkedin}
                  target="_blank"
                  className="hover:text-blue-700"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
