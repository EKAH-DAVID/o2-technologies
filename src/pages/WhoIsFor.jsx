const cards = [
  {
    tag: "HOME & FAMILY",
    title: "FAMILIES",
    body: "House fires, gas leaks, and carbon monoxide exposure are household realities. The TEB stays in the kitchen drawer, the bedside table, or the car — wherever your family is.",
    image: "/img.png"
  },
  {
    tag: "OUTDOORS",
    title: "OUTDOOR & HIKERS",
    body: "Wildfires, mine shafts, avalanche debris fields — remote environments create remote risks. The TEB weighs under 300g and fits in any pack.",
    image: "https://images.unsplash.com/photo-1609205807107-3b4ac4d2bd5e?w=800&q=80",
  },
  {
    tag: "INSTITUTIONAL",
    title: "WORKPLACES & SCHOOLS",
    body: "Emergency compliance isn't just about fire extinguishers. Facilities that take safety seriously are adding TEB units to every floor and every first-aid station.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    tag: "PREPAREDNESS",
    title: "FIRST AID & GO-BAGS",
    body: "Preppers, emergency responders, and anyone serious about their kit knows the gap. The TEB is what that gap looks like when it's filled properly.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-[#f5f0e8] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <p className="text-[#0d1410]/50 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
          <span className="w-5 h-px bg-[#0d1410]/40 inline-block" /> WHO IT'S FOR
        </p>

        {/* Headline */}
        <h2
          className="text-center text-4xl xl:text-5xl font-extrabold text-[#0d1410] leading-tight mb-12"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Ready for anyone.
          <br />
          Essential for <span className="text-green-600 italic">everyone.</span>
        </h2>

        {/* 2x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden h-[260px] group cursor-pointer"
            >
              {/* Background image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 gap-1.5">
                {/* Tag pill */}
                <span className="inline-flex self-start items-center bg-black/40 backdrop-blur-sm border border-white/20 text-white/70 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-1">
                  {card.tag}
                </span>

                {/* Title */}
                <h3
                  className="text-white text-xl font-extrabold tracking-wide leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {card.title}
                </h3>

                {/* Body */}
                <p className="text-white/65 text-xs leading-relaxed max-w-sm">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}