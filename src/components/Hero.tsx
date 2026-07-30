import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-inverse-surface overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-inverse-surface/90" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="text-inverse-primary text-lg">★★★★★</span>
            <span className="text-white/90 text-sm font-medium">
              Бизнес-центр класса 5 звёзд · Селятино, МО
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-headline font-bold text-white mb-6">
            <span className="block text-5xl md:text-6xl lg:text-7xl leading-tight">
              Лучший
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl leading-tight text-inverse-primary">
              бизнес-центр
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl leading-tight text-white/90">
              в Селятино
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Деловой Парк — место, где рождаются успешные бизнесы. Современная
            инфраструктура, профессиональное сообщество и атмосфера роста в
            30 минутах от Москвы.
          </p>

          {/* SOLD OUT Banner */}
          <div className="inline-flex items-center gap-3 bg-red-500/20 border border-red-400/40 backdrop-blur-sm rounded-2xl px-6 py-4 mb-8">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
            <div>
              <div className="text-red-300 font-bold text-lg">
                🔴 SOLD OUT — Все помещения заняты
              </div>
              <div className="text-white/60 text-sm">
                Оставьте заявку — мы сообщим о появлении свободных мест
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/waitlist" className="btn-primary text-base px-8 py-4">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              Записаться в лист ожидания
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 text-base"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              О бизнес-центре
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {[
              { value: "5★", label: "Класс центра" },
              { value: "3 500+", label: "кв.м площадь" },
              { value: "50+", label: "арендаторов" },
              { value: "2018", label: "год основания" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-headline font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs">Прокрутите вниз</span>
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
