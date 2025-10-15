"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { PlayCircle } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

// Helper to get video ID from embed or watch URL
function getYouTubeID(videoUrl) {
  const embedMatch = videoUrl.match(/\/embed\/([^\?&]+)/);
  if (embedMatch) return embedMatch[1];
  const watchMatch = videoUrl.match(/v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  return null;
}

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    comment:
      "I was suffering from hydrocele, and thanks to the expert doctors and advanced treatment, the swelling has completely gone. The care and attention I received were excellent!",
    videoUrl: "https://www.youtube.com/embed/YASaNPSc3T4?si=d6j0AOp1AI9AEt22",
  },
  {
    id: 2,
    name: "Sadia Akter",
    comment:
      "The fissure treatment here was very effective. The staff was compassionate, and the process was painless. I felt relief within days!",
    videoUrl: "https://www.youtube.com/embed/0_EhQt7twSc?si=lS2ZrlWXEINmbaur",
  },
  {
    id: 3,
    name: "Abdul Karim",
    comment:
      "After years of struggling with piles, the clinic’s specialized treatment helped me recover quickly without surgery. The team was very professional and supportive.",
    videoUrl: "https://www.youtube.com/embed/Mi0aj931-P8?si=K-l-92EUcnnpRce5",
  },
  {
    id: 4,
    name: "Mitu Chowdhury",
    comment:
      "I had a fistula and the doctors treated it expertly with minimal discomfort. The dedicated service and advanced technology made all the difference.",
    videoUrl: "https://www.youtube.com/embed/SSLEE1ggkKc?si=Ylab6CtEI6FMGaDG",
  },
  {
    id: 5,
    name: "Shahin Alam",
    comment:
      "The pathology lab at the clinic gave me fast and accurate test results, which helped in diagnosing my condition quickly and starting treatment immediately.",
    videoUrl: "https://www.youtube.com/embed/0_EhQt7twSc?si=lS2ZrlWXEINmbaur",
  },
  {
    id: 6,
    name: "Roksana Jahan",
    comment:
      "Thanks to the orthopedic care here, I regained mobility and strength in my joints after an injury. The doctors and staff were very attentive throughout the treatment.",
    videoUrl: "https://www.youtube.com/embed/YASaNPSc3T4?si=d6j0AOp1AI9AEt22",
  },
];

export default function VideoReviewsSlider() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="mt-24 pb-8">
      <div className="_max_width mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Patients Say 💬
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Real stories from patients who trusted our clinic and got healthy again.
        </p>

        {/* ------------------- Top Big Review ------------------- */}
        <div className="w-full mb-10">
          {(() => {
            const main = testimonials[0];
            const videoId = getYouTubeID(main.videoUrl);
            const thumbnail = videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : "";
            return (
              <div className="bg-white rounded-2xl duration-300 overflow-hidden cursor-pointer flex flex-col">
                <div className="relative group">
                  <img
                    src={thumbnail}
                    alt={main.name}
                    className="_max_width h-[400px] object-cover bg-gray-200"
                    loading="lazy"
                  />
                  <button
                    onClick={() => setSelectedVideo(main.videoUrl)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Play video testimonial by ${main.name}`}
                  >
                    <PlayCircle className="text-white w-20 h-20" />
                  </button>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {main.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{main.comment}</p>
                  <div className="flex mt-3 space-x-1 text-yellow-500">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>


        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((t) => {
            const videoId = getYouTubeID(t.videoUrl);
            const thumbnail = videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : "";

            return (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer h-[420px] flex flex-col">
                  <div className="relative group">
                    <img
                      src={thumbnail}
                      alt={t.name}
                      className="w-full h-56 object-cover bg-gray-200"
                      loading="lazy"
                    />
                    <button
                      onClick={() => setSelectedVideo(t.videoUrl)}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Play video testimonial by ${t.name}`}
                    >
                      <PlayCircle className="text-white w-16 h-16" />
                    </button>
                  </div>

                  <div className="p-5 text-left flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {t.name}
                      </h3>
                      <p className="text-gray-500 mt-2 line-clamp-4">
                        {t.comment}
                      </p>
                    </div>
                    <div className="flex mt-3 space-x-1 text-yellow-500">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedVideo(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={selectedVideo}
                title="Patient Review Video"
                allowFullScreen
                allow="autoplay"
              />
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-gray-300 transition"
                aria-label="Close video modal"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
