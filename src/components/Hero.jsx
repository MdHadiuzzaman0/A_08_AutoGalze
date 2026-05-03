import Link from 'next/link';

export default function Banner() {
  return (
    <div
      className="relative h-180 overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 scale-105 animate-[zoomBg_12s_ease-in-out_infinite_alternate] bg-center bg-"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1600&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,10,5,0.82)] via-[rgba(30,18,8,0.65)] to-[rgba(80,45,10,0.4)]" />

      {/* Tile strip at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-[90px] flex gap-[3px] opacity-90 overflow-hidden">
        {[
          "https://i.ibb.co.com/tMsSg1qW/modern-bathroom-with-blue-square-wall-tiles-white-marble-countertop-and-blue-laminate-vanity-2279822.jpg",
          "https://i.ibb.co.com/7JD6bhKp/calacatta-white1.jpg",
          "https://i.ibb.co.com/YFyD7QF0/rush-copper-rectified-glazed-metallic-finish-ceramic-7266783.jpg",
          "https://i.ibb.co.com/s9F62wwt/moss-green-mix2088gn451asm-e1-600.jpg",
          "https://i.ibb.co.com/RGBHXYj8/il-1080x-N-1785998520-5o2t.jpg",
          "https://i.ibb.co.com/qMzZVzDF/Tuscan-Ochre-15-ls-9fe8c255-70fe-4e6f-ae2f-1c2b5b5db4e5.jpg",
          "https://i.ibb.co.com/Y4C6BXL9/Kewent-120-X60-Black-Porcelain-Ceramic-Floor-Tiles.webp",
        ].map((img, i) => (
          <div
            key={i}
            className="flex-1 bg-cover bg-center"
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </div> */}

      {/* Content */}
      <div className="relative z-10 text-center px-8 py-12 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <span className="animate__animated animate__fadeInDown inline-block text-xs tracking-[0.35em] uppercase text-[#d4a94a] border border-[rgba(212,169,74,0.4)] px-5 py-1.5 rounded-full mb-7">
          Premium Tile Collection
        </span>

        {/* Title */}
        <h1
          className="animate__animated animate__fadeInUp font-light text-white leading-[1.1] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
            animationDelay: "0.2s",
          }}
        >
          Where Every Surface
          <br />
          Tells a{" "}
          <span className="text-[#d4a94a] italic">Story</span>
        </h1>

        {/* Description */}
        <p
          className="animate__animated animate__fadeIn text-white/75 leading-relaxed font-light mb-8 max-w-md mx-auto"
          style={{ animationDelay: "0.4s" }}
        >
          Discover handcrafted ceramic, porcelain, marble, and mosaic tiles —
          designed to transform every room into a work of art.
        </p>

        {/* Category badges */}
        <div
          className="animate__animated animate__fadeIn flex flex-wrap gap-4 justify-center mb-10"
          style={{ animationDelay: "0.5s" }}
        >
          {["Ceramic", "Porcelain", "Marble Effect", "Mosaic", "Terracotta"].map(
            (cat) => (
              <span
                key={cat}
                className="text-xs tracking-wider text-white/60 flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[#d4a94a] inline-block" />
                {cat}
              </span>
            )
          )}
        </div>

        {/* CTA Button */}
        <Link
          href="/allTiles"
          className="animate__animated animate__fadeInUp inline-flex items-center gap-2 px-9 py-3.5 bg-[#d4a94a] text-[#1a0f00] text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
          style={{ animationDelay: "0.7s" }}
        >
          Explore All Tiles
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}