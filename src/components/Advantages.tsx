const advantages = [
  {
    icon: "🗺️",
    title: "Удобное расположение",
    description:
      "30 минут от МКАД по Киевскому шоссе. Рядом ж/д станция Селятино. Бесплатная охраняемая парковка.",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "⭐",
    title: "Класс 5 звёзд",
    description:
      "Современные офисы с качественной отделкой, панорамные окна, высокие потолки. Всё для вашего комфорта.",
    color: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🏗️",
    title: "Развитая инфраструктура",
    description:
      "Конференц-залы, переговорные комнаты, кухни, зоны отдыха. Wi-Fi, охрана 24/7, видеонаблюдение.",
    color: "bg-green-50 border-green-100",
    iconBg: "bg-green-100",
  },
  {
    icon: "🅿️",
    title: "Бесплатная парковка",
    description:
      "Большая охраняемая парковка на территории комплекса. Видеонаблюдение круглосуточно.",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🤝",
    title: "Профессиональное сообщество",
    description:
      "Более 50 компаний из разных отраслей. Нетворкинг, взаимная поддержка и деловые возможности внутри центра.",
    color: "bg-rose-50 border-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    icon: "🌳",
    title: "Территория и беседки",
    description:
      "Благоустроенная территория с беседками для отдыха и переговоров на свежем воздухе. Зелёная зона.",
    color: "bg-teal-50 border-teal-100",
    iconBg: "bg-teal-100",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 bg-gray-50" id="advantages">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Почему мы
          </span>
          <h2 className="section-title">
            Преимущества Делового Парка
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Всё, что нужно для успешной работы — в одном месте
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <article
              key={index}
              className={`card border ${adv.color} p-6 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 ${adv.iconBg} rounded-2xl mb-5 text-2xl`}
              >
                {adv.icon}
              </div>
              <h3 className="font-display font-bold text-dark text-lg mb-3">
                {adv.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {adv.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
