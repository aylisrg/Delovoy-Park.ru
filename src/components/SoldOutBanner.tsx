import Link from "next/link";

export default function SoldOutBanner() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-rose-600 py-5 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/50 to-rose-700/50 animate-pulse-slow" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-3 h-3 rounded-full bg-white animate-ping absolute" />
              <span className="inline-flex w-3 h-3 rounded-full bg-white relative" />
            </div>
            <div>
              <div className="font-headline font-bold text-xl">
                🔴 SOLD OUT — Все помещения заняты
              </div>
              <div className="text-white/80 text-sm">
                Запишитесь в лист ожидания и будьте первыми
              </div>
            </div>
          </div>
          <Link
            href="/waitlist"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-2.5 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            Войти в лист ожидания
          </Link>
        </div>
      </div>
    </section>
  );
}
