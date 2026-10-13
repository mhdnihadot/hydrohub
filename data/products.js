// Product catalogue — edit here. Content follows the Hydro Hub Industries company profile.
// Cards show `image` if set, otherwise the first `gallery` photo. `highlights` = spec keys shown as chips.
// There are no product detail pages; cards open the enquiry form.
// Only the shower & tap filter and its cartridge are in production today. "In R&D" products are being developed
// in-house and are offered to OEM partners.

export const categories = [
  {
    slug: "shower-tap",
    name: "Shower & Tap Filters",
    tagline: "Dual Hardness Technology for the water you bathe in",
  },
  {
    slug: "filter-media",
    name: "Cartridges & Media",
    tagline: "Aroma, Vitamin C, hydrogen and alkaline filtration",
  },
  {
    slug: "hair-body",
    name: "Hair & Body Care",
    tagline: "Hard water shampoo, #TheNaturalWay",
  },
  {
    slug: "home",
    name: "Kitchen & Home",
    tagline: "Tank, tap, washing machine and rainwater filtration",
  },
];

export const products = [
  {
    slug: "shower-tap-filter",
    category: "shower-tap",
    name: "Hydro Hub Shower & Tap Filter",
    highlights: ["Filter layers", "Cartridge life", "Warranty"],
    gallery: ["/images/photos/packaging.webp"],
    summary: "India's 1st Dual Hardness Technology shower & tap filter. Reduces hair-fall, protects skin and prevents bacteria.",
    description:
      "Our shower & tap filter is a 5-layer filter built for Indian water conditions. It reduces chlorine, lead, mercury and other heavy metals, neutralises and conditions hard water salts, and removes smell, micro-impurities and sediment. The result is clean, healthy water for better hair and skin. It is made in India from BPA-free food-grade plastic, uses NSF & WQA certified media, and its brass connectors fit standard ½″ shower and tap fittings.",
    features: [
      "Smart 5-layer filter for Indian water",
      "Dual Hardness Technology: neutralises & conditions hard water salts",
      "Reduces chlorine, lead, mercury & heavy metals",
      "Removes smell, micro-impurities & sediment",
      "NSF & WQA certified media",
      "Long-lasting brass connectors",
      "BPA-free food-grade plastic",
      "Fits standard ½″ shower & tap fittings",
    ],
    specs: {
      "Filter layers": "5",
      "Cartridge life": "25,000 L / 6 months",
      Warranty: "2.5 years",
      Connectors: "Brass, standard ½″",
      Body: "BPA-free food-grade plastic",
      Media: "NSF & WQA certified",
      Finish: "Rose Gold",
      Origin: "Made in India",
    },
  },
  {
    slug: "replacement-cartridge",
    category: "shower-tap",
    name: "Replacement Cartridge",
    highlights: ["Layers", "Life", "Fits"],
    gallery: ["/images/photos/packaging.webp"],
    summary: "Replacement 5-layer cartridge for your Hydro Hub filter, customised for regional water.",
    description:
      "Swap in a fresh cartridge every 25,000 litres or six months to keep your filter working at its best. Cartridges are customised for regional water conditions and easy to get hold of, so you never have to settle for a generic replacement.",
    features: ["Same 5-layer filtration as new", "Customised for regional water", "Easily available", "Quick swap, no tools"],
    specs: { Layers: "5", Life: "25,000 L / 6 months", Fits: "Hydro Hub filter", Origin: "Made in India" },
  },
  {
    slug: "hard-water-shampoo",
    category: "hair-body",
    name: "Hard Water Shampoo",
    highlights: ["Volume", "Key actives", "Free from"],
    badge: "In R&D",
    gallery: ["/images/photos/water.webp", "/images/gallery/splash.webp"],
    summary: "No more bad hair days. Rare Blue Clay, Bamboo Vinegar & Argan Oil for hair exposed to hard water.",
    description:
      "Hard water minerals build up on your scalp and clog hair follicles, leaving hair dull, lifeless and frizzy after a shower. Rare Blue Clay and Bamboo Vinegar exfoliate and prevent that build-up for silky, bouncy hair, and Argan Oil restores natural moisture. Made with all-natural bio-actives. For best results, use it with our shower & tap filter.",
    features: [
      "Neutralises hard water",
      "Removes mineral build-up",
      "Restores natural moisture",
      "All-natural bio-actives",
      "No sulphates or parabens",
      "No mineral oil, synthetic colourants or perfume",
    ],
    specs: {
      Volume: "300 ml",
      "Key actives": "Blue Clay, Bamboo Vinegar, Argan Oil",
      "Free from": "Sulphates & parabens",
      "How to use": "Wet hair, massage into scalp, leave 2–3 min, rinse",
      "Best with": "Shower & tap filter",
      Origin: "Made in India",
    },
  },
  {
    slug: "aroma-flavour-1",
    category: "filter-media",
    name: "Aroma Flavour 1",
    highlights: ["Status", "Use", "Type"],
    badge: "In R&D",
    gallery: ["/images/gallery/spray.webp", "/images/gallery/splash.webp"],
    summary: "A fragrance-infused filter cartridge for a refreshing, scented shower.",
    description:
      "The first of our aroma cartridges adds a gentle fragrance to filtered shower water, turning a daily shower into a small daily ritual. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Fragrance-infused cartridge", "Refreshing scented shower", "Fits our shower filter range"],
    specs: { Status: "In R&D", Use: "Shower", Type: "Aroma cartridge" },
  },
  {
    slug: "aroma-flavour-2",
    category: "filter-media",
    name: "Aroma Flavour 2",
    highlights: ["Status", "Use", "Type"],
    badge: "In R&D",
    gallery: ["/images/gallery/splash.webp", "/images/gallery/spray.webp"],
    summary: "A second fragrance option in our aroma cartridge range.",
    description:
      "A second aroma cartridge with its own fragrance, so brands can offer a choice of scented shower experiences. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Fragrance-infused cartridge", "Second fragrance option", "Fits our shower filter range"],
    specs: { Status: "In R&D", Use: "Shower", Type: "Aroma cartridge" },
  },
  {
    slug: "vitamin-c-cartridge",
    category: "filter-media",
    name: "Vitamin C Filter",
    highlights: ["Status", "Use", "Type"],
    badge: "In R&D",
    gallery: ["/images/gallery/droplet.webp", "/images/gallery/spray.webp"],
    summary: "A Vitamin C cartridge that neutralises chlorine for gentler showers on hair and skin.",
    description:
      "Vitamin C neutralises chlorine in water. Our Vitamin C cartridge uses it to give a gentler shower that is kinder to hair and skin. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Vitamin C media", "Neutralises chlorine", "Gentler on hair & skin"],
    specs: { Status: "In R&D", Use: "Shower", Type: "Vitamin C cartridge" },
  },
  {
    slug: "hydrogen-balls",
    category: "filter-media",
    name: "Hydrogen Balls",
    highlights: ["Status", "Use", "Type"],
    badge: "In R&D",
    gallery: ["/images/gallery/droplet.webp", "/images/gallery/blue-glass.webp"],
    summary: "Hydrogen mineral balls, a filter media for hydrogen-rich water.",
    description:
      "Hydrogen balls are a mineral filter media used to produce hydrogen-rich water, for use in filters and cartridges. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Mineral filter media", "For hydrogen-rich water", "For filters & cartridges"],
    specs: { Status: "In R&D", Use: "Filter media", Type: "Mineral balls" },
  },
  {
    slug: "alkaline-media",
    category: "filter-media",
    name: "Alkaline Filter",
    highlights: ["Status", "Use", "Type"],
    badge: "In R&D",
    gallery: ["/images/gallery/blue-glass.webp", "/images/gallery/droplet.webp"],
    summary: "Alkaline mineral media that raises the pH of filtered water.",
    description:
      "Our alkaline media adds minerals that raise the pH of water as it passes through the filter. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Alkaline mineral media", "Raises water pH", "For filters & cartridges"],
    specs: { Status: "In R&D", Use: "Filter media", Type: "Alkaline media" },
  },
  {
    slug: "washing-machine-filter",
    category: "home",
    name: "Washing Machine Filter",
    highlights: ["Status", "Use", "Type"],
    badge: "In R&D",
    gallery: ["/images/gallery/splash.webp", "/images/gallery/droplet.webp"],
    summary: "Fabrics losing their shine and softness? Filter hard water before it reaches your machine.",
    description:
      "Hard water dulls colours and leaves fabrics rough. Our washing machine filter treats the water going into your machine, so clothes stay soft and bright for longer. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Fits the machine inlet", "Protects fabric softness & shine", "Reduces hard water build-up"],
    specs: { Status: "In R&D", Use: "Washing machine", Type: "Inlet filter" },
  },
  {
    slug: "water-tank-sink-filter",
    category: "home",
    name: "Water Tank Sink Filter",
    highlights: ["Status", "Use", "Type"],
    badge: "In R&D",
    gallery: ["/images/gallery/pouring.webp", "/images/gallery/droplet.webp"],
    summary: "Filters water from your storage tank before it reaches the sink.",
    description:
      "Water stored in overhead tanks collects sediment and impurities. This filter cleans it on its way to your sink. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Filters tank water", "Removes sediment & impurities", "For kitchen & utility sinks"],
    specs: { Status: "In R&D", Use: "Sink", Type: "Tank line filter" },
  },
  {
    slug: "kitchen-tap-filter",
    category: "home",
    name: "Kitchen Tap Filter",
    highlights: ["Status", "Use", "Type"],
    badge: "In R&D",
    gallery: ["/images/gallery/pouring.webp", "/images/gallery/blue-glass.webp"],
    summary: "A tap-mounted filter for cleaner water at the kitchen sink.",
    description:
      "Fitted straight onto the kitchen tap, it filters the water you use for washing vegetables, dishes and everyday kitchen work. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Fits onto the kitchen tap", "For washing & cleaning", "Easy cartridge change"],
    specs: { Status: "In R&D", Use: "Kitchen", Type: "Tap filter" },
  },
  {
    slug: "rainwater-harvesting-system",
    category: "home",
    name: "Rainwater Harvesting System",
    highlights: ["Status", "Use", "Type"],
    badge: "In R&D",
    gallery: ["/images/gallery/splash.webp", "/images/gallery/spray.webp"],
    summary: "Collects and filters rainwater for use around the home.",
    description:
      "A system that captures rainwater from the roof and filters it, so it can be stored and used for everyday needs around the home. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Captures roof rainwater", "Filters before storage", "Reduces mains water use"],
    specs: { Status: "In R&D", Use: "Whole home", Type: "Harvesting system" },
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const productsIn = (category) => products.filter((p) => p.category === category);
