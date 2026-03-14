const galleryItems = [
  {
    src: "/images/about-exterior.jpg",
    alt: "Фасад бизнес-центра Деловой Парк",
    label: "Фасад",
  },
  {
    src: "/images/about-lobby.jpg",
    alt: "Лобби бизнес-центра",
    label: "Лобби",
  },
  {
    src: "/images/about-office.jpg",
    alt: "Современный офис",
    label: "Офис",
  },
  {
    src: "/images/about-conference.jpg",
    alt: "Конференц-зал",
    label: "Конференц-зал",
  },
  {
    src: "/images/gazebo-1.jpg",
    alt: "Беседка на территории",
    label: "Беседки",
  },
  {
    src: "/images/about-parking.jpg",
    alt: "Парковка бизнес-центра",
    label: "Парковка",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Галерея
          </span>
          <h2 className="section-title">Пространства Делового Парка</h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Современные офисы, комфортные зоны отдыха и развитая инфраструктура
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary-800 to-dark-card group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Placeholder gradient with label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="text-4xl mb-3">
                  {index === 0 && "🏢"}
                  {index === 1 && "🚪"}
                  {index === 2 && "💼"}
                  {index === 3 && "🎤"}
                  {index === 4 && "🌳"}
                  {index === 5 && "🅿️"}
                </div>
                <div className="text-white/70 font-medium text-sm text-center">
                  {item.alt}
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {item.label}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
