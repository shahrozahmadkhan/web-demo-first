import remodel from "@/assets/remodel.jpg";
import adu from "@/assets/adu.jpg";
import roofing from "@/assets/roofing.jpg";
import exterior from "@/assets/exterior.jpg";
import systems from "@/assets/systems.jpg";
import addition from "@/assets/addition.jpg";
import after from "@/assets/after.jpg";

export const COMPANY = {
  name: "LA United Construction",
  type: "General Construction and Home Remodeling",
  address: "1226 W 109th St, Los Angeles, CA 90044, United States",
  phone: "(760) 953-5148",
  tel: "tel:+17609535148",
  website: "https://launitedconstruction.com",
  hours: "Monday–Sunday, 6:00 AM–8:00 PM",
  license: "CSLB #970555",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("1226 W 109th St, Los Angeles, CA 90044"),
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("1226 W 109th St, Los Angeles, CA 90044") +
    "&output=embed",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  icon: "hammer" | "home" | "roof" | "brick" | "zap" | "plus";
  overview: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "home-remodeling",
    title: "Home Remodeling",
    short:
      "Transform kitchens, bathrooms, living spaces, and existing interiors with thoughtful remodeling and quality finishes.",
    image: remodel,
    icon: "hammer",
    overview:
      "Whether you're updating a dated kitchen, reworking a bathroom, or opening up living spaces, remodeling starts with understanding how you use your home today and how you want to use it tomorrow.",
    benefits: [
      "Kitchen and bathroom remodels",
      "Interior layout updates and finish upgrades",
      "Flooring, cabinetry, and fixture improvements",
      "Consider permits, layout changes, and material lead times early",
    ],
    faqs: [
      { q: "How do I start a remodeling project?", a: "Request a free estimate and share your goals, photos, and budget range. We'll discuss scope and next steps." },
      { q: "How long does a remodel take?", a: "Timelines depend on scope, permits, and materials. We'll discuss a realistic schedule once we understand your project." },
    ],
  },
  {
    slug: "adus",
    title: "Accessory Dwelling Units (ADUs)",
    short:
      "Explore custom accessory dwelling units, garage conversions, and additional living spaces designed for your property's needs.",
    image: adu,
    icon: "home",
    overview:
      "An ADU can add flexible living space for family, guests, or rental income. Planning around your lot, local requirements, and budget is the first step.",
    benefits: [
      "Detached backyard ADUs",
      "Garage conversions",
      "Attached living space options",
      "Consider zoning, utilities, and site access during planning",
    ],
    faqs: [
      { q: "Can my property support an ADU?", a: "It depends on lot size, zoning, and site conditions. A consultation helps evaluate what's possible." },
      { q: "Do ADUs require permits?", a: "Yes, ADUs in Los Angeles generally require city permits and plan approval." },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    short:
      "Roof installation, replacement, and improvement solutions that help protect your home and enhance its appearance.",
    image: roofing,
    icon: "roof",
    overview:
      "Your roof protects everything beneath it. From replacements to improvements, roofing work should balance durability, appearance, and budget.",
    benefits: ["Roof replacement", "New roof installation", "Roofing improvements", "Consider material type, slope, and ventilation"],
    faqs: [
      { q: "How do I know if I need a new roof?", a: "Age, leaks, and visible wear are common signs. An inspection during consultation can help clarify options." },
    ],
  },
  {
    slug: "exterior-structural",
    title: "Exterior & Structural Work",
    short: "Residential foundation, concrete, driveway, stucco, and other exterior improvement projects.",
    image: exterior,
    icon: "brick",
    overview:
      "Exterior and structural improvements refresh curb appeal and support the long-term condition of your home.",
    benefits: ["Foundation and concrete work", "Driveways and walkways", "Stucco and exterior finishes", "Consider drainage, soil, and access"],
    faqs: [{ q: "Do you handle driveways?", a: "Driveway and concrete projects are among the exterior services we discuss with homeowners." }],
  },
  {
    slug: "electrical-plumbing-hvac",
    title: "Electrical, Plumbing & HVAC",
    short: "Coordinated residential building-system improvements supporting the comfort and functionality of your home.",
    image: systems,
    icon: "zap",
    overview:
      "Building systems often go hand in hand with remodels and additions. Coordinating them as part of your project keeps work organized.",
    benefits: ["Electrical upgrades as part of projects", "Plumbing improvements", "HVAC coordination", "Consider capacity needs for new spaces"],
    faqs: [{ q: "Can systems work be combined with a remodel?", a: "Yes — coordinating systems work alongside a remodel is common and discussed during planning." }],
  },
  {
    slug: "custom-construction-additions",
    title: "Custom Construction & Additions",
    short: "Explore home additions and tailored construction improvements designed to complement your existing property.",
    image: addition,
    icon: "plus",
    overview:
      "A well-planned addition expands your home while complementing its existing architecture and the way you live.",
    benefits: ["Room additions", "Second-story options", "Tailored construction improvements", "Consider structure, permits, and design continuity"],
    faqs: [{ q: "Is an addition better than moving?", a: "It depends on your goals and property. We're happy to talk through options during a consultation." }],
  },
];

export const PROJECT_CATEGORIES = [
  "All Projects",
  "Home Remodeling",
  "Kitchens & Bathrooms",
  "ADUs",
  "Roofing",
  "Exterior Renovations",
] as const;

export const SAMPLE_PROJECTS = [
  { title: "Warm Oak Kitchen", category: "Kitchens & Bathrooms", image: remodel, location: "Sample" },
  { title: "Backyard Studio ADU", category: "ADUs", image: adu, location: "Sample" },
  { title: "Spa-Style Bathroom", category: "Kitchens & Bathrooms", image: after, location: "Sample" },
  { title: "Shingle Roof Replacement", category: "Roofing", image: roofing, location: "Sample" },
  { title: "Stucco & Driveway Refresh", category: "Exterior Renovations", image: exterior, location: "Sample" },
  { title: "Two-Story Addition", category: "Home Remodeling", image: addition, location: "Sample" },
];
