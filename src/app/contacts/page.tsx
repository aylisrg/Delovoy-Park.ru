import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты — Деловой Парк Селятино",
  description:
    "Контакты бизнес-центра Деловой Парк в Селятино, Московская область. Адрес, телефон, email, часы работы. Карта проезда.",
  alternates: {
    canonical: "https://delovoy-park.ru/contacts",
  },
  openGraph: {
    title: "Контакты | Деловой Парк",
    description: "Контакты бизнес-центра Деловой Парк в Селятино МО",
  },
};

export default function ContactsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-inverse-surface text-inverse-on-surface">
        <div className="absolute inset-0 bg-inverse-surface/85" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-white/80">Контакты</span>
          </nav>
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-white mb-4">
            Свяжитесь с нами
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Мы готовы ответить на все ваши вопросы. Звоните, пишите или
            приезжайте!
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="section-title mb-8">Контактная информация</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-on-surface text-sm uppercase tracking-wide mb-2">Адрес</div>
                    <p className="text-gray-700">
                      п. Селятино, ул. Заводская, д. 2<br />
                      Наро-Фоминский р-н<br />
                      Московская область, 143367
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-on-surface text-sm uppercase tracking-wide mb-2">Телефон</div>
                    <a href="tel:+79150575011" className="text-primary font-semibold text-lg hover:text-primary transition-colors">
                      +7 (915) 057-50-11
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Пн–Пт, 09:00–18:00</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-on-surface text-sm uppercase tracking-wide mb-2">Email</div>
                    <a href="mailto:info@delovoy-park.ru" className="text-primary font-semibold hover:text-primary transition-colors">
                      info@delovoy-park.ru
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Ответим в течение рабочего дня</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-on-surface text-sm uppercase tracking-wide mb-3">Часы работы администрации</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Понедельник – Пятница</span>
                        <span className="font-medium text-on-surface">09:00 – 18:00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Суббота – Воскресенье</span>
                        <span className="font-medium text-on-surface">По договорённости</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Охрана и доступ — 24/7
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-title mb-4">Написать нам</h2>
              <p className="text-gray-600 mb-8">
                Задайте вопрос или оставьте сообщение — ответим в течение рабочего дня
              </p>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=36.965800%2C55.482500&z=15&pt=36.965800%2C55.482500%2Cpm2rdm&text=%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80%20%D0%94%D0%B5%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%9F%D0%B0%D1%80%D0%BA%20%D0%A1%D0%B5%D0%BB%D1%8F%D1%82%D0%B8%D0%BD%D0%BE"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Карта расположения Делового Парка"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://yandex.ru/maps/?rtext=~55.482500%2C36.965800&rtt=auto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Построить маршрут в Яндекс.Картах
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">
            Хотите арендовать офис?
          </h2>
          <p className="text-gray-600 mb-6">
            Все помещения заняты, но вы можете записаться в лист ожидания
          </p>
          <Link href="/waitlist" className="btn-primary">
            🔔 Войти в лист ожидания
          </Link>
        </div>
      </section>
    </>
  );
}
