"use client";

export default function Map() {
  return (
    <section className="py-20 bg-white" id="map">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Как нас найти
          </span>
          <h2 className="section-title">Расположение</h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            п. Селятино, ул. Заводская, д. 2, Наро-Фоминский р-н, МО
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl h-96 lg:h-[480px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=36.965800%2C55.482500&z=15&pt=36.965800%2C55.482500%2Cpm2rdm&text=%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80%20%D0%94%D0%B5%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%9F%D0%B0%D1%80%D0%BA%20%D0%A1%D0%B5%D0%BB%D1%8F%D1%82%D0%B8%D0%BD%D0%BE"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Карта расположения Делового Парка"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary-600"
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
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Адрес</h3>
                  <p className="text-gray-600 text-sm">
                    п. Селятино, ул. Заводская, д. 2
                    <br />
                    Наро-Фоминский р-н
                    <br />
                    Московская область, 143367
                  </p>
                </div>
              </div>
            </div>

            {/* How to get */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-dark mb-4">Как добраться</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚗</span>
                  <div>
                    <div className="text-sm font-medium text-dark">На машине</div>
                    <div className="text-xs text-gray-500">
                      По Киевскому шоссе, 30 мин от МКАД
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚂</span>
                  <div>
                    <div className="text-sm font-medium text-dark">На электричке</div>
                    <div className="text-xs text-gray-500">
                      Ст. Селятино (Киевское направление)
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚌</span>
                  <div>
                    <div className="text-sm font-medium text-dark">На автобусе</div>
                    <div className="text-xs text-gray-500">
                      Маршруты от ст. м. Юго-Западная
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🅿️</span>
                  <div>
                    <div className="text-sm font-medium text-dark">Парковка</div>
                    <div className="text-xs text-gray-500">
                      Бесплатная охраняемая парковка
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Build Route Button */}
            <a
              href="https://yandex.ru/maps/?rtext=~55.482500%2C36.965800&rtt=auto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-sm py-3"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Построить маршрут
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
