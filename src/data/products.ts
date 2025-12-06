// src/data/products.ts

export const products = [
  {
    id: "multi-sawing",
    name: "Multi Sawing",
    tagline: "Automated High-Yield Diamond Cutting System",
    image: "/multi-sawing-square.png", // Looks for public/multi-sawing.png
    description: "The Siya Multi-Sawing system redefines diamond processing with AI-driven path planning. Designed to minimize weight loss while maximizing cutting speed, this machine is the gold standard for high-volume production facilities.",
    specs: [
      { label: "Laser Type", value: "Green / IR (Optional)" },
      { label: "Axis Control", value: "3-Axis CNC" },
      { label: "Accuracy", value: "< 2 Microns" },
      { label: "Cooling", value: "Water Chiller Unit" },
      { label: "Automation", value: "Fully Automatic Feeding" },
    ],
    accentColor: "cyan"
  },
  {
    id: "fancy-galvo",
    name: "Fancy Galvo",
    tagline: "Ultra-Fast Precision Laser Marking & Engraving",
    image: "/fancy-galvo-square.png", // Looks for public/fancy-galvo.png
    description: "Engineered for speed and intricacy, the Fancy Galvo system delivers razor-sharp marking on diamond surfaces. Perfect for Hallmarking, logo engraving, and complex pattern generation with zero thermal damage.",
    specs: [
      { label: "Scanning Speed", value: "12,000 mm/s" },
      { label: "Marking Area", value: "110mm x 110mm" },
      { label: "Laser Source", value: "Fiber 20W / 30W" },
      { label: "Software", value: "EzCad 2 / SiyaCad" },
      { label: "Cooling", value: "Air Cooled" },
    ],
    accentColor: "purple"
  },
  {
    id: "4p-fiber",
    name: "4P - Fiber",
    tagline: "Advanced 4-Axis Fiber Laser Processing",
    image: "/4p-fiber-square.png", // Looks for public/4p-fiber.png
    description: "The 4P Fiber system is our flagship solution for complex shape processing. With 4-axis simultaneous control, it handles cone, pavilion, and girdle processing in a single setup.",
    specs: [
      { label: "Axis System", value: "4-Axis Synchronized" },
      { label: "Laser Source", value: "High Stability Fiber" },
      { label: "Repeatability", value: "± 1 Micron" },
      { label: "Fixture", value: "Pneumatic / Vacuum" },
      { label: "Dimensions", value: "800 x 600 x 1500 mm" },
    ],
    accentColor: "amber"
  },
];