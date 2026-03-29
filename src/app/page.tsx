import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SoldOutBanner from "@/components/SoldOutBanner";
import Advantages from "@/components/Advantages";
import Ratings from "@/components/Ratings";
import NewsPreview from "@/components/NewsPreview";
import Map from "@/components/Map";
import WaitListForm from "@/components/WaitListForm";

export const metadata: Metadata = {
  title: "Деловой Парк — Бизнес-центр 5★ в Селятино, Московская область",
  description:
    "Лучший бизнес-центр класса 5★ в Селятино МО. Современные офисы, парковка, беседки, профессиональное сообщество. SOLD OUT — запишитесь в лист ожидания.",
  alternates: {
    canonical: "https://delovoy-park.ru",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SoldOutBanner />
      <Advantages />

      {/* Wait List Section */}
      <section className="py-20 bg-white" id="waitlist">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Лист ожидания
              </span>
              <h2 className="section-title">
                Хотите арендовать офис в Деловом Парке?
              </h2>
              <p className="section-subtitle mx-auto text-center mt-4">
                Все помещения заняты, но вы можете записаться в лист ожидания
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <WaitListForm />
            </div>
          </div>
        </div>
      </section>

      <Ratings />
      <NewsPreview />
      <Map />
    </>
  );
}
