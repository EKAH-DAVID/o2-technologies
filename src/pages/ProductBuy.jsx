import { useState } from "react";

import teb1 from "../assets/audience-gobag.png";
import teb2 from "../assets/product-outdoor.png";
import teb3 from "../assets/lifestyle-group.png";
import heroBg from "../assets/hero-bg.png";

const thumbnails = [teb1, teb2, teb3, heroBg];



// const thumbnails = [
//   "/images/teb-1.jpg",
//   "/images/teb-2.jpg",
//   "/images/teb-3.jpg",
//   "/assets/hero-bg.png"
// ];

const included = [
  "1× TEB device (reusable body)",
  "1× Activated cartridge (pre-installed)",
  "1× Replacement cartridge",
  "Carry pouch + mounting clip",
  "Quick-deploy guide card",
];

export default function ProductBuy() {
  const [selected, setSelected] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <section className="bg-[#f5f0e8] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT — Image Gallery */}
        <div className="flex flex-col gap-4">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden bg-[#e8e2d8] flex items-center justify-center h-[420px]">
            <img
              src={thumbnails[selected]}
              alt="TEB device"
              className="h-full w-full object-cover transition-opacity duration-300"
            />
            {/* Deploy badge */}
            <div className="absolute top-4 right-4 bg-[#0d1410]/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-2 rounded-lg text-center leading-tight">
              &lt;10S<br />
              <span className="text-white/50 font-normal text-[10px] tracking-widest">DEPLOY</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {thumbnails.map((src, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`rounded-xl overflow-hidden border-2 transition-all h-24 ${
                  selected === i
                    ? "border-green-600"
                    : "border-transparent opacity-60 hover:opacity-90"
                }`}
              >
                <img src={src} alt={`TEB view ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Product Info */}
        <div className="flex flex-col gap-6 pt-2">

          {/* Brand */}
          <p className="text-[#0d1410]/40 text-[11px] font-semibold tracking-widest uppercase">
            O2 TECHNOLOGIES
          </p>

          {/* Title */}
          <div className="-mt-2">
            <h2
              className="text-5xl font-extrabold text-[#0d1410] leading-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              TEB
            </h2>
            <p
              className="text-green-600 text-xl font-bold italic mt-1"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Temporary Emergency Breather
            </p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-4">
            <div className="flex items-baseline gap-1">
              <span className="text-[#0d1410]/50 text-sm font-semibold">CA$</span>
              <span
                className="text-5xl font-extrabold text-[#0d1410]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                50
              </span>
            </div>
            <p className="text-[#0d1410]/40 text-xs leading-snug">
              Free shipping on<br />orders over $100
            </p>
          </div>

          {/* What's in the box */}
          <div className="bg-white/60 border border-[#0d1410]/10 rounded-xl p-5 flex flex-col gap-3">
            <p className="text-[#0d1410]/50 text-[10px] font-semibold tracking-widest uppercase">
              WHAT'S IN THE BOX
            </p>
            <ul className="flex flex-col gap-2">
              {included.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[#0d1410]/80 text-sm">
                  <span className="text-green-500 text-base leading-none">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex flex-col gap-4">
            {/* QTY */}
            <div className="flex items-center gap-4">
              <span className="text-[#0d1410]/50 text-xs font-semibold tracking-widest uppercase">QTY</span>
              <div className="flex items-center border border-[#0d1410]/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[#0d1410]/60 hover:bg-[#0d1410]/5 transition-colors text-lg font-bold"
                >
                  −
                </button>
                <span className="w-10 text-center text-[#0d1410] font-semibold text-sm">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#0d1410]/60 hover:bg-[#0d1410]/5 transition-colors text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 transition-colors text-white font-bold text-sm tracking-widest uppercase py-4 rounded-xl">
              ADD TO CART — CA${(50 * qty).toLocaleString()}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}