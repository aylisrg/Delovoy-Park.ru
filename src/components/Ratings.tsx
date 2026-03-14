const ratings = [
  {
    platform: "Яндекс.Карты",
    score: 4.8,
    reviews: 143,
    icon: "🗺️",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    url: "https://yandex.ru/maps/org/delovoy_park/",
  },
  {
    platform: "Google Maps",
    score: 4.7,
    reviews: 98,
    icon: "🌐",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    url: "https://maps.google.com",
  },
  {
    platform: "2ГИС",
    score: 4.9,
    reviews: 67,
    icon: "📍",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    url: "https://2gis.ru",
  },
];

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= Math.floor(score)
              ? "text-amber-400"
              : star - score < 1
              ? "text-amber-300"
              : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Ratings() {
  return (
    <section className="py-20 bg-white" id="ratings">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Наши рейтинги
          </span>
          <h2 className="section-title">
            Нам доверяют арендаторы
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Высокие оценки на всех платформах — это лучшее подтверждение нашего качества
          </p>
        </div>

        {/* Ratings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {ratings.map((rating) => (
            <a
              key={rating.platform}
              href={rating.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card border ${rating.borderColor} ${rating.bgColor} p-8 text-center hover:-translate-y-1 transition-transform duration-300 block`}
            >
              <div className="text-4xl mb-4">{rating.icon}</div>
              <div className="font-display font-bold text-dark text-lg mb-3">
                {rating.platform}
              </div>

              {/* Score */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-4xl font-display font-bold text-dark">
                  {rating.score}
                </span>
                <span className="text-gray-400 text-xl">/5</span>
              </div>

              <div className="flex justify-center mb-4">
                <StarRating score={rating.score} />
              </div>

              <div className="text-gray-500 text-sm">
                На основе{" "}
                <span className="font-semibold text-gray-700">
                  {rating.reviews}
                </span>{" "}
                отзывов
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 text-primary-600 text-sm font-medium hover:gap-2.5 transition-all">
                Читать отзывы
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <div className="text-5xl font-display font-bold mb-2">4.8</div>
          <div className="flex justify-center mb-3">
            <StarRating score={4.8} />
          </div>
          <div className="text-white/80 text-lg">
            Средний рейтинг по всем платформам
          </div>
          <div className="text-white/60 text-sm mt-1">
            Более 300 отзывов от наших арендаторов
          </div>
        </div>
      </div>
    </section>
  );
}
