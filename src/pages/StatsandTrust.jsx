export default function StatsAndTrust() {
  const stats = [
    { value: "98%", label: "FIELD TEST RELIABILITY" },
    { value: "<10S", label: "AVERAGE DEPLOY TIME" },
    { value: "280G", label: "TOTAL DEVICE WEIGHT" },
  ];

  const certifications = [
    "CSA CERTIFIED",
    "NIOSH PENDING",
    "HEALTH CANADA REGISTERED",
    "ISO 9001",
  ];

  const press = [
    "CBC NEWS",
    "GLOBE & MAIL",
    "CTV",
    "CANADIAN SAFETY MAGAZINE",
    "FIRST RESPONDER TODAY",
  ];

  return (
    <section className="bg-[#0d1410] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-16">

        {/* Stats Row */}
        <div className="w-full border border-white/10 rounded-xl grid grid-cols-3 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-10 px-6 gap-2">
              <span
                className="text-4xl xl:text-5xl font-extrabold text-green-400 tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {stat.value}
              </span>
              <span className="text-white/40 text-[10px] font-semibold tracking-widest uppercase text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-col items-center gap-5 w-full">
          <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase">
            CERTIFICATIONS & STANDARDS
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, i) => (
              <span
                key={i}
                className="flex items-center gap-2 border border-white/15 text-white/60 text-[11px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
              >
                <span className="text-green-400">✓</span>
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Press / As Seen In */}
        <div className="flex flex-col items-center gap-5 w-full">
          <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase">
            AS SEEN IN
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {press.map((outlet, i) => (
              <span
                key={i}
                className="text-white/25 text-sm font-bold tracking-widest uppercase hover:text-white/50 transition-colors"
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}