import Link from "next/link";

const news = [
  {
    id: 1,
    date: "12 марта 2025",
    category: "Новости центра",
    title: "Обновление инфраструктуры: новые переговорные комнаты",
    excerpt:
      "В марте 2025 года мы открыли 3 новые переговорные комнаты с современным оборудованием для видеоконференций и интерактивными досками.",
    emoji: "🏗️",
    color: "bg-blue-50 border-blue-100",
    categoryColor: "text-blue-700 bg-blue-100",
  },
  {
    id: 2,
    date: "28 февраля 2025",
    category: "Сообщество",
    title: "Нетворкинг-завтрак: февральская встреча арендаторов",
    excerpt:
      "В конце февраля состоялась традиционная встреча арендаторов Делового Парка. 40 участников, новые знакомства и деловые партнёрства.",
    emoji: "🤝",
    color: "bg-green-50 border-green-100",
    categoryColor: "text-green-700 bg-green-100",
  },
  {
    id: 3,
    date: "15 февраля 2025",
    category: "Объявления",
    title: "Весенняя скидка на аренду беседок",
    excerpt:
      "С 1 апреля открывается сезон беседок! Первые арендаторы получают скидку 20% на весь апрель. Бронирование уже открыто.",
    emoji: "🌸",
    color: "bg-rose-50 border-rose-100",
    categoryColor: "text-rose-700 bg-rose-100",
  },
];

export default function NewsPreview() {
  return (
    <section className="py-20 bg-gray-50" id="news">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Новости
            </span>
            <h2 className="section-title">Жизнь в Деловом Парке</h2>
          </div>
          <Link
            href="/about"
            className="btn-secondary text-sm px-5 py-2.5 flex-shrink-0"
          >
            Все новости →
          </Link>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className={`card border ${item.color} p-6 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${item.categoryColor}`}
                >
                  {item.category}
                </span>
                <span className="text-gray-400 text-xs">{item.date}</span>
              </div>
              <h3 className="font-display font-bold text-dark text-base mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
          <div className="text-3xl mb-3">📱</div>
          <h3 className="font-display font-bold text-dark text-xl mb-2">
            Будьте в курсе событий
          </h3>
          <p className="text-gray-600 text-sm mb-5">
            Подпишитесь на наш Telegram-канал и получайте новости первыми
          </p>
          <a
            href="https://t.me/delovoy_park_selyatino"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.41 14.059l-2.98-.924c-.646-.203-.66-.646.136-.953l11.65-4.495c.538-.194 1.01.131.838.534z" />
            </svg>
            Подписаться в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
