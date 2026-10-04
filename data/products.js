// Product catalogue — edit here.
// Products render as clean illustrations (components/ProductVisual) using `kind` + `tone`.
// When you have real product photography, add `image: "/images/products/<file>.jpg"` and it will be used instead.
// `gallery` = "in use" lifestyle photos shown on the product page; `highlights` = spec keys shown as chips/tiles.

export const categories = [
  {
    slug: "purifiers",
    kind: "purifier",
    tone: "#FFFFFF",
    name: "Purifiers",
    tagline: "RO + UV purification for every kitchen",
  },
  {
    slug: "dispensers",
    kind: "dispenser",
    tone: "#FFFFFF",
    name: "Dispensers",
    tagline: "Hot, cold & ambient on tap",
  },
  {
    slug: "filters",
    kind: "jug",
    tone: "#0C2236",
    name: "Filters",
    tagline: "Jugs & cartridges for fresh-tasting water",
  },
  {
    slug: "bottles",
    kind: "bottle",
    tone: "#0C2236",
    name: "Bottles",
    tagline: "Reusable bottles for life on the move",
  },
];

export const products = [
  {
    slug: "hydropure-ro-uv",
    category: "purifiers",
    name: "HydroPure RO+UV",
    kind: "purifier",
    tone: "#FFFFFF",
    highlights: ["Stages","Output","Capacity"],
    badge: "Bestseller",
    gallery: ["/images/gallery/droplet.jpg", "/images/gallery/pouring.jpg"],
    summary: "7-stage RO + UV purifier with smart hot & cold taps and a live purity display.",
    description:
      "HydroPure combines reverse osmosis, UV sterilisation and a mineral cartridge to remove up to 99.9% of contaminants while keeping the minerals that make water taste good. The LED panel shows purity and filter life at a glance.",
    features: ["7-stage RO + UV + UF", "Hot, cold & ambient taps", "Live TDS & filter-life display", "Child lock on hot tap"],
    specs: { Capacity: "10 L storage", Output: "15 L / hour", Stages: "7", Power: "60 W", Warranty: "2 years" },
  },
  {
    slug: "alkaline-plus",
    category: "purifiers",
    name: "Alkaline Plus",
    kind: "purifier",
    tone: "#E8EEF6",
    highlights: ["Stages","Output","Capacity"],
    badge: "New",
    gallery: ["/images/gallery/splash.jpg", "/images/gallery/blue-glass.jpg"],
    summary: "Purifier with a pH-balancing alkaline stage for crisp, smooth-tasting water.",
    description:
      "Alkaline Plus adds a pH-balancing stage after purification, raising pH to 8–9.5 and adding back calcium and magnesium. Ideal for families who drink a lot of water every day.",
    features: ["pH 8–9.5 alkaline stage", "Mineral boost cartridge", "Quiet 42 dB pump", "Auto flush"],
    specs: { Capacity: "8 L storage", Output: "12 L / hour", Stages: "8", Power: "48 W", Warranty: "2 years" },
  },
  {
    slug: "aquastand-floor",
    category: "dispensers",
    name: "AquaStand Floor",
    kind: "dispenser",
    tone: "#FFFFFF",
    highlights: ["Cold tank","Hot tank","Cooling"],
    badge: "Office pick",
    gallery: ["/images/gallery/blue-glass.jpg", "/images/gallery/droplet.jpg"],
    summary: "Floor-standing hot & cold dispenser for offices, gyms and busy homes.",
    description:
      "AquaStand connects to your mains with an inline filter, so there are no bottles to lift. Instant hot water for tea and chilled water all day, with an energy-saving night mode.",
    features: ["Mains-fed — no bottles", "Instant hot & chilled", "Energy-saving night mode", "Removable drip tray"],
    specs: { "Cold tank": "3 L", "Hot tank": "1.5 L", Cooling: "Compressor", Power: "550 W", Warranty: "1 year" },
  },
  {
    slug: "countertop-mini",
    category: "dispensers",
    name: "Countertop Mini",
    kind: "countertop",
    tone: "#FFFFFF",
    highlights: ["Reservoir","Cooling","Height"],
    gallery: ["/images/gallery/pouring.jpg", "/images/gallery/splash.jpg"],
    summary: "Compact countertop dispenser that keeps a jug of chilled water ready.",
    description:
      "Small enough for any counter, Countertop Mini chills a 5 L reservoir and pours at the touch of a lever. Perfect for small kitchens and meeting rooms.",
    features: ["5 L chilled reservoir", "One-touch lever", "Fits under cabinets", "BPA-free parts"],
    specs: { Reservoir: "5 L", Cooling: "Thermo-electric", Power: "70 W", Height: "42 cm", Warranty: "1 year" },
  },
  {
    slug: "clearflow-jug",
    category: "filters",
    name: "ClearFlow Jug",
    kind: "jug",
    tone: "#0C2236",
    highlights: ["Capacity","Cartridge life","Material"],
    badge: "Bestseller",
    gallery: ["/images/gallery/blue-glass.jpg", "/images/gallery/pouring.jpg"],
    summary: "2.4 L filter jug that reduces chlorine, limescale and metals.",
    description:
      "ClearFlow's 4-layer cartridge reduces chlorine, limescale, lead and copper for better-tasting tea, coffee and drinking water. Each cartridge lasts around 150 litres.",
    features: ["4-layer cartridge", "Cartridge-life indicator", "Fridge-door size", "Dishwasher-safe lid"],
    specs: { Capacity: "2.4 L", "Cartridge life": "150 L / ~4 weeks", Material: "BPA-free", Warranty: "1 year" },
  },
  {
    slug: "trail-filter-bottle",
    category: "filters",
    name: "Trail Filter Bottle",
    kind: "flask",
    tone: "#1E5EEA",
    highlights: ["Capacity","Filter life","Weight"],
    gallery: ["/images/gallery/droplet.jpg", "/images/gallery/splash.jpg"],
    summary: "Soft-flask bottle with a 0.1-micron filter — drink safely on the trail.",
    description:
      "A lightweight soft flask with a hollow-fibre filter that removes bacteria and protozoa as you drink. It rolls up small when empty, making it ideal for hiking and travel.",
    features: ["0.1-micron hollow fibre", "Rolls up when empty", "Fast 2 L/min flow", "Easy shake-clean"],
    specs: { Capacity: "1 L", "Filter life": "1,000 L", Weight: "63 g", Warranty: "1 year" },
  },
  {
    slug: "crystal-bottle",
    category: "bottles",
    name: "Crystal Bottle",
    kind: "bottle",
    tone: "#0C2236",
    highlights: ["Capacity","Weight","Material"],
    gallery: ["/images/gallery/blue-glass.jpg", "/images/gallery/droplet.jpg"],
    summary: "Ultra-clear, lightweight everyday bottle that is 100% recyclable.",
    description:
      "Crystal Bottle is made from BPA-free Tritan — glass-clear, tough and light. A leak-proof cap and wide mouth make it easy to fill, clean and add ice.",
    features: ["BPA-free Tritan", "Leak-proof cap", "Wide mouth for ice", "Dishwasher safe"],
    specs: { Capacity: "750 ml", Weight: "140 g", Material: "Tritan", Warranty: "Lifetime" },
  },
  {
    slug: "steel-thermo",
    category: "bottles",
    name: "Steel Thermo",
    kind: "thermo",
    tone: "#9AA7B8",
    highlights: ["Capacity","Material","Weight"],
    badge: "New",
    gallery: ["/images/gallery/splash.jpg", "/images/gallery/pouring.jpg"],
    summary: "Double-wall stainless bottle — 24 h cold, 12 h hot.",
    description:
      "Steel Thermo's vacuum-insulated, double-wall steel keeps drinks cold for 24 hours or hot for 12, with no condensation. The faceted body gives a confident grip.",
    features: ["Vacuum insulated", "24 h cold / 12 h hot", "No sweat, no metallic taste", "Faceted grip"],
    specs: { Capacity: "600 ml", Weight: "320 g", Material: "18/8 stainless", Warranty: "Lifetime" },
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const productsIn = (category) => products.filter((p) => p.category === category);
