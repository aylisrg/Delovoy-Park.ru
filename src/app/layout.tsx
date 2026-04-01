import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://delovoy-park.ru"),
  title: {
    default: "Деловой Парк — Бизнес-центр 5★ в Селятино, Московская область",
    template: "%s | Деловой Парк — БЦ 5★ Селятино",
  },
  description:
    "Деловой Парк — лучший бизнес-центр класса 5★ в Селятино, Московская область. Современные офисы, развитая инфраструктура, профессиональное сообщество. Все помещения заняты — запишитесь в лист ожидания.",
  keywords: [
    "бизнес-центр Селятино",
    "офис в Селятино",
    "аренда офиса Московская область",
    "Деловой Парк",
    "бизнес-центр 5 звезд",
    "офисы Наро-Фоминск",
    "БЦ Селятино",
  ],
  authors: [{ name: "Деловой Парк" }],
  creator: "Деловой Парк",
  publisher: "Деловой Парк",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://delovoy-park.ru",
    siteName: "Деловой Парк",
    title: "Деловой Парк — Бизнес-центр 5★ в Селятино",
    description:
      "Лучший бизнес-центр в Селятино. Все помещения заняты — запишитесь в лист ожидания.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Деловой Парк — Бизнес-центр 5★ в Селятино",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Деловой Парк — Бизнес-центр 5★ в Селятино",
    description: "Лучший бизнес-центр в Селятино, МО",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://delovoy-park.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Fonts loaded via <link> for production — next/font is blocked in this build env */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://delovoy-park.ru",
              name: "Деловой Парк",
              description:
                "Бизнес-центр класса 5★ в Селятино, Московская область",
              url: "https://delovoy-park.ru",
              telephone: "+7 (915) 057-50-11",
              email: "info@delovoy-park.ru",
              address: {
                "@type": "PostalAddress",
                streetAddress: "п. Селятино, ул. Заводская, д. 2",
                addressLocality: "Селятино",
                addressRegion: "Московская область",
                postalCode: "143367",
                addressCountry: "RU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 55.4825,
                longitude: 36.9658,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "RUB",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "120",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
