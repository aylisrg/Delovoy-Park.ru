import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О нас — История и ценности бизнес-центра",
  description:
    "Деловой Парк — история создания, миссия и ценности лучшего бизнес-центра класса 5★ в Селятино, Московская область. Более 50 арендаторов, 3500 кв.м площади.",
  alternates: {
    canonical: "https://delovoy-park.ru/about",
  },
  openGraph: {
    title: "О нас | Деловой Парк",
    description: "История, миссия и ценности бизнес-центра Деловой Парк",
  },
};

const values = [
  {
    emoji: "🤝",
    title: "Сообщество",
    description:
      "Мы создаём среду, где компании не просто арендуют офисы, а становятся частью профессионального сообщества. Помогаем расти и развиваться.",
  },
  {
    emoji: "⭐",
    title: "Качество",
    description:
      "Класс 5★ — это не просто статус. Это обязательство поддерживать высочайший уровень сервиса, инфраструктуры и управления в каждой детали.",
  },
  {
    emoji: "🌱",
    title: "Развитие",
    description:
      "Мы постоянно улучшаем инфраструктуру, добавляем новые сервисы и создаём условия для роста каждого арендатора.",
  },
  {
    emoji: "🔒",
    title: "Надёжность",
    description:
      "Охрана 24/7, видеонаблюдение, контроль доступа — ваш бизнес под надёжной защитой. Работаем без сбоев и неожиданностей.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Открытие",
    description: "Открытие первой очереди. Первые 20 арендаторов.",
  },
  {
    year: "2020",
    title: "Расширение",
    description: "Открытие второй очереди. Запуск беседок и зоны отдыха.",
  },
  {
    year: "2022",
    title: "50+ компаний",
    description: "Число арендаторов превысило 50 компаний. SOLD OUT.",
  },
  {
    year: "2024",
    title: "Рейтинг 4.8★",
    description: "Получили средний рейтинг 4.8 на всех платформах.",
  },
];

const keyMetrics = [
  { value: "5★", label: "Класс БЦ" },
  { value: "3 500+", label: "кв.м площадь" },
  { value: "50+", label: "компаний-арендаторов" },
  { value: "2018", label: "год основания" },
  { value: "4.8★", label: "средний рейтинг" },
  { value: "24/7", label: "охрана" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 to-dark-card/80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-white/80">О нас</span>
          </nav>
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-white mb-4">
            О бизнес-центре
            <br />
            <span className="text-gradient bg-gradient-to-r from-primary-300 to-accent-300">
              Деловой Парк
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Мы создали место, где бизнес растёт. Деловой Парк — это не просто
            офисные помещения, это целая экосистема для профессионального
            развития в Московской области.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-white text-center">
            {keyMetrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-3xl font-headline font-bold text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-white/70 text-xs">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Наша история
              </span>
              <h2 className="section-title mb-6">
                С 2018 года — центр деловой жизни Селятино
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Деловой Парк был основан в 2018 году с простой идеей: создать
                  в Подмосковье бизнес-центр европейского уровня, который не
                  уступает столичным аналогам ни по качеству инфраструктуры, ни
                  по атмосфере.
                </p>
                <p>
                  Сегодня Деловой Парк — это более 50 компаний из самых разных
                  отраслей: IT, консалтинг, медицина, образование, творческие
                  студии. Все они нашли здесь не просто офис, но и деловое
                  сообщество.
                </p>
                <p>
                  Мы гордимся тем, что являемся крупнейшим и лучшим
                  бизнес-центром класса 5★ в Селятино и Наро-Фоминском районе
                  Московской области.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="flex gap-5 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-headline font-bold flex items-center justify-center text-sm flex-shrink-0">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 h-10 bg-primary-100 mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="font-headline font-bold text-dark text-base">
                      {m.title}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">
                      {m.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Миссия
          </span>
          <h2 className="section-title mb-6">
            Мы создаём среду для роста
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Наша миссия — обеспечить профессиональное сообщество лучшей
            инфраструктурой и сервисом, чтобы каждый арендатор мог
            сосредоточиться на росте своего бизнеса.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Ценности
            </span>
            <h2 className="section-title">Что нами движет</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:bg-primary-50/30 transition-colors"
              >
                <div className="text-5xl mb-5">{val.emoji}</div>
                <h3 className="font-headline font-bold text-dark text-lg mb-3">
                  {val.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              SOLD OUT — Все помещения заняты
            </div>
            <h2 className="font-headline font-bold text-4xl mb-4">
              Хотите стать частью Делового Парка?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Запишитесь в лист ожидания — мы уведомим вас о появлении
              свободных помещений
            </p>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-xl text-lg"
            >
              🔔 Войти в лист ожидания
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
