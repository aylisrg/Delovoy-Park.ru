import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/", label: "Главная" },
    { href: "/about", label: "О бизнес-центре" },
    { href: "/waitlist", label: "Лист ожидания" },
    { href: "/contacts", label: "Контакты" },
  ],
  services: [
    { label: "Офисы и кабинеты", href: "/waitlist" },
    { label: "Конференц-залы", href: "/waitlist" },
    { label: "Аренда беседок", href: "/waitlist" },
    { label: "Парковка", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-on-primary font-headline font-bold text-xl shadow-lg">
                ДП
              </div>
              <div>
                <div className="font-headline font-bold text-xl text-white">
                  Деловой Парк
                </div>
                <div className="text-sm text-white/60">
                  Бизнес-центр 5★ · Селятино
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Лучший бизнес-центр класса 5★ в Московской области. Современные
              офисы, развитая инфраструктура и профессиональное сообщество в
              Селятино.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-inverse-primary mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/70 text-sm">
                  п. Селятино, ул. Заводская, д. 2,
                  <br />
                  Наро-Фоминский р-н, МО
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-inverse-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+79150575011"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  +7 (915) 057-50-11
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-inverse-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@delovoy-park.ru"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  info@delovoy-park.ru
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-headline font-semibold text-white mb-5">
              Навигация
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headline font-semibold text-white mb-5">
              Услуги
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Working Hours */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white/80 mb-3">
                Часы работы
              </h4>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Пн — Пт</span>
                  <span className="text-white/80 font-medium">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Сб — Вс</span>
                  <span className="text-white/80 font-medium">По договорённости</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Деловой Парк. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-inverse-primary text-sm font-medium">
                ★★★★★ Бизнес-центр 5 звёзд
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
