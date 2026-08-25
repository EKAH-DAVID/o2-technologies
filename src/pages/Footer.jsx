export default function Footer() {
  const links = {
    PRODUCT: ["The TEB", "How It Works", "Certifications", "Shop"],
    COMPANY: ["About O2", "Press Kit", "Wholesale", "Contact"],
    SUPPORT: ["FAQ", "Shipping", "Returns", "Cartridge Refill"],
  };

  return (
    <footer className="bg-[#0d1410] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="text-white font-extrabold text-xl tracking-tight">
              <span className="text-green-500">O2</span> Technologies
            </div>
            <p className="text-white/35 text-sm leading-relaxed">
              We build tools for the gap between when something goes wrong and
              when help arrives.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase">
                {category}
              </p>

              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © O2 Technologies Inc. All rights reserved. o2technologies.ca
          </p>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/25 text-xs hover:text-white/60 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}