import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Лист ожидания — Запись в очередь на аренду офиса",
  description:
    "Запишитесь в лист ожидания на аренду офиса в бизнес-центре Деловой Парк (5★, Селятино). Все помещения заняты. Будьте первыми в очереди.",
  alternates: {
    canonical: "https://delovoy-park.ru/waitlist",
  },
  openGraph: {
    title: "Лист ожидания | Деловой Парк",
    description: "Запишитесь в лист ожидания на аренду офиса в Деловом Парке",
  },
};

const faqs = [
  {
    q: "Как работает лист ожидания?",
    a: "Вы оставляете заявку с контактами и параметрами желаемого помещения. Как только появляется подходящий вариант, мы связываемся с вами в порядке очереди.",
  },
  {
    q: "Сколько времени ждать?",
    a: "Средний срок ожидания составляет 2–6 месяцев. Точные сроки зависят от площади и типа помещения. Мы уведомляем вас, как только появляются свободные варианты.",
  },
  {
    q: "Нужно ли платить за включение в лист ожидания?",
    a: "Нет, запись в лист ожидания абсолютно бесплатна. Оплата начинается только после заключения договора аренды.",
  },
  {
    q: "Что включает аренда офиса?",
    a: "Аренда включает коммунальные услуги, охрану 24/7, доступ к Wi-Fi, паркинг, уборку мест общего пользования и техническое обслуживание здания.",
  },
  {
    q: "Можно ли посмотреть офис до подписания договора?",
    a: "Конечно! Мы организуем просмотр для всех серьёзных кандидатов. Свяжитесь с нами по телефону для записи на просмотр.",
  },
  {
    q: "Есть ли минимальный срок аренды?",
    a: "Минимальный срок аренды — 3 месяца. Долгосрочным арендаторам (от года) предлагаем специальные условия.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 to-dark-card/85" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-white/80">Лист ожидания</span>
          </nav>

          {/* SOLD OUT Badge */}
          <div className="inline-flex items-center gap-3 bg-red-500/20 border border-red-400/40 backdrop-blur-sm rounded-2xl px-6 py-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-3 h-3 rounded-full bg-red-400 animate-ping absolute" />
              <span className="inline-flex w-3 h-3 rounded-full bg-red-400 relative" />
            </div>
            <div className="text-red-300 font-bold text-lg">
              🔴 SOLD OUT — Все помещения заняты
            </div>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Запишитесь в
            <br />
            <span className="text-gradient bg-gradient-to-r from-primary-300 to-accent-300">
              лист ожидания
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Деловой Парк работает на полной заполняемости. Оставьте заявку —
            мы свяжемся с вами, как только освободится подходящее помещение.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-primary-50 border-b border-primary-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { emoji: "🆓", text: "Бесплатная запись" },
              { emoji: "⚡", text: "Уведомление сразу при появлении" },
              { emoji: "🎯", text: "Подбор под ваши требования" },
              { emoji: "🤝", text: "Персональный менеджер" },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              <h2 className="section-title mb-3">Оставьте заявку</h2>
              <p className="text-gray-600 mb-8">
                Заполните форму — мы уведомим вас о подходящих вариантах
              </p>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <WaitListFormExtended />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Why Wait List */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
                <h3 className="font-display font-bold text-dark text-xl mb-4">
                  Почему стоит записаться?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Самый высококлассный БЦ в Наро-Фоминском районе",
                    "Бесплатная охраняемая парковка",
                    "Рядом ж/д станция Селятино",
                    "30 минут от МКАД по Киевскому шоссе",
                    "Профессиональное сообщество 50+ компаний",
                    "Рейтинг 4.8★ на всех платформах",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg
                        className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-display font-bold text-dark text-xl mb-5">
                  Связаться напрямую
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+79150575011"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-dark">+7 (915) 057-50-11</div>
                      <div className="text-sm text-gray-500">Пн–Пт, 09:00–18:00</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@delovoy-park.ru"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-dark">info@delovoy-park.ru</div>
                      <div className="text-sm text-gray-500">Ответим в течение дня</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
                FAQ
              </span>
              <h2 className="section-title">Частые вопросы</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
                >
                  <h3 className="font-display font-bold text-dark text-base mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Extended form for waitlist page
function WaitListFormExtended() {
  return (
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      className="space-y-4"
    >
      <input type="hidden" name="_subject" value="Заявка в лист ожидания" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Ваше имя <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Иван Иванов"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Компания
          </label>
          <input
            name="company"
            type="text"
            placeholder="ООО «Пример»"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+7 (900) 000-00-00"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="ivan@company.ru"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Тип помещения
          </label>
          <select name="type" className="input-field">
            <option value="">Выберите тип</option>
            <option>Кабинет</option>
            <option>Офис</option>
            <option>Коворкинг</option>
            <option>Конференц-зал</option>
            <option>Другое</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Желаемая площадь
          </label>
          <select name="area" className="input-field">
            <option value="">Выберите площадь</option>
            <option>До 20 кв.м</option>
            <option>20–40 кв.м</option>
            <option>40–80 кв.м</option>
            <option>80–150 кв.м</option>
            <option>150+ кв.м</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Комментарий
        </label>
        <textarea
          name="comment"
          rows={3}
          placeholder="Дополнительные пожелания или вопросы..."
          className="input-field resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full py-4 text-base">
        🔔 Записаться в лист ожидания
      </button>
      <p className="text-center text-gray-400 text-xs">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}
