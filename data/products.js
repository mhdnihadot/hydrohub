// Product catalogue — edit here. Content follows the Hydro Hub Industries company profile.
// Cards show `image` if set, otherwise the first `gallery` photo. `highlights` = spec keys shown as chips.
// There are no product detail pages; cards open the enquiry form.
// Only the shower & tap filter and its cartridge are on sale today. "In R&D" / "In R&D" products are on the
// roadmap — enquiries register interest.

export const categories = [
  {
    slug: "shower-tap",
    name: "Shower & Tap Filters",
    tagline: "Dual Hardness Technology for the water you bathe in",
  },
  {
    slug: "hair-body",
    name: "Hair & Body Care",
    tagline: "Hard water shampoo and care, #TheNaturalWay",
  },
  {
    slug: "laundry",
    name: "Laundry",
    tagline: "Keep fabrics soft and bright in hard water",
  },
  {
    slug: "whole-home",
    name: "Whole Home",
    tagline: "Filtered water from every tap in the house",
  },
];

export const products = [
  {
    slug: "shower-tap-filter",
    category: "shower-tap",
    name: "Hydro Hub Shower & Tap Filter",
    highlights: ["Filter layers", "Cartridge life", "Warranty"],
    gallery: ["/images/gallery/spray.jpg", "/images/gallery/droplet.jpg"],
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
    gallery: ["/images/gallery/droplet.jpg", "/images/gallery/spray.jpg"],
    summary: "Replacement 5-layer cartridge for your Hydro Hub filter, customised for regional water.",
    description:
      "Swap in a fresh cartridge every 25,000 litres or six months to keep your filter working at its best. Cartridges are customised for regional water conditions and easy to get hold of, so you never have to settle for a generic replacement.",
    features: ["Same 5-layer filtration as new", "Customised for regional water", "Easily available", "Quick swap, no tools"],
    specs: { Layers: "5", Life: "25,000 L / 6 months", Fits: "Hydro Hub filter", Origin: "Made in India" },
  },
  {
    slug: "rain-multi-flow-shower",
    category: "shower-tap",
    name: "Rain & Multi-Flow Shower",
    highlights: ["Status", "Use", "Pairs with"],
    badge: "In R&D",
    gallery: ["/images/gallery/spray.jpg", "/images/gallery/splash.jpg"],
    summary: "Rain and multi-flow shower heads designed to pair with our shower filter.",
    description:
      "Our R&D team is developing a range of rain and multi-flow showers designed to work with our shower filter, for a better shower in every way. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Rain & multi-flow options", "Designed to pair with our filter", "Standard bath fittings"],
    specs: { Status: "In R&D", Use: "Bathroom", "Pairs with": "Shower filter" },
  },
  {
    slug: "hard-water-shampoo",
    category: "hair-body",
    name: "Hard Water Shampoo",
    highlights: ["Volume", "Key actives", "Free from"],
    badge: "In R&D",
    gallery: ["/images/hero.jpg", "/images/gallery/splash.jpg"],
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
    slug: "hard-water-shower-gel",
    category: "hair-body",
    name: "Hard Water Shower Gel",
    highlights: ["Status", "Use", "Pairs with"],
    badge: "In R&D",
    gallery: ["/images/gallery/splash.jpg", "/images/gallery/spray.jpg"],
    summary: "A body wash made for hard water, so skin isn't left dry after your daily shower.",
    description:
      "Developed alongside our shampoo, our Hard Water Shower Gel is made for skin that hard water leaves dry, tight or flaky. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Made for hard water", "Natural bio-actives", "Pairs with our shampoo & shower filter"],
    specs: { Status: "In R&D", Use: "Body", "Pairs with": "Shower filter" },
  },
  {
    slug: "boar-bristle-brush",
    category: "hair-body",
    name: "Boar Bristle Brush",
    highlights: ["Bristles", "Use", "Routine step"],
    badge: "In R&D",
    gallery: ["/images/hero.jpg", "/images/gallery/droplet.jpg"],
    summary: "Brush away leftover minerals and pollutants for a natural bounce. Step 3 of the hard water routine.",
    description:
      "Softer than silk. Run the brush through your hair to remove any minerals or pollutants left behind, and bring back your hair's natural bounce. It's the final step of our hard water routine, after the shower filter and the hard water shampoo.",
    features: ["Natural boar bristles", "Lifts leftover minerals & pollutants", "Gives hair a natural bounce"],
    specs: { Bristles: "Boar", Use: "Daily, after washing", "Routine step": "3 of 3" },
  },
  {
    slug: "washing-machine-filter",
    category: "laundry",
    name: "Washing Machine Filter",
    highlights: ["Status", "Use", "Pairs with"],
    badge: "In R&D",
    gallery: ["/images/gallery/splash.jpg", "/images/gallery/droplet.jpg"],
    summary: "Fabrics losing their shine and softness? Filter hard water before it reaches your machine.",
    description:
      "Hard water dulls colours and leaves fabrics rough. Our washing machine filter, now in R&D, treats the water going into your machine, so clothes stay soft and bright for longer. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Fits the machine inlet", "Protects fabric softness & shine", "Pairs with our hard water detergent"],
    specs: { Status: "In R&D", Use: "Washing machine", "Pairs with": "Hard water detergent" },
  },
  {
    slug: "hard-water-liquid-detergent",
    category: "laundry",
    name: "Hard Water Liquid Detergent",
    highlights: ["Status", "Use", "Pairs with"],
    badge: "In R&D",
    gallery: ["/images/gallery/splash.jpg", "/images/gallery/pouring.jpg"],
    summary: "A liquid detergent made to clean properly in hard water.",
    description:
      "Most detergents struggle in hard water. Ours is made for it, and works with the washing machine filter to keep clothes clean, soft and bright. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Made for hard water", "For washing machines", "Pairs with the washing machine filter"],
    specs: { Status: "In R&D", Use: "Washing machine", "Pairs with": "Machine filter" },
  },
  {
    slug: "point-of-entry-filter",
    category: "whole-home",
    name: "Point-of-Entry Main Line Filter",
    highlights: ["Status", "Covers", "Fitted at"],
    badge: "In R&D",
    gallery: ["/images/gallery/droplet.jpg", "/images/gallery/pouring.jpg"],
    summary: "Whole-house filtration fitted on your main line, so every shower, tap and appliance gets better water.",
    description:
      "97% of the water you use isn't for drinking or cooking. A point-of-entry filter treats all of it where it enters your home, covering every bathroom, kitchen tap and appliance at once. Already in our R&D, ready to be developed and manufactured under your brand.",
    features: ["Treats water where it enters the home", "Covers every tap, shower & appliance", "For homes and apartments"],
    specs: { Status: "In R&D", Covers: "Whole house", "Fitted at": "Main line" },
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const productsIn = (category) => products.filter((p) => p.category === category);
