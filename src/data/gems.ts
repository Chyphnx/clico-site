export type Gem = {
  slug: string;
  name: string;
  tagline: string;
  stone: "tanzanite" | "painite" | "moldavite";
  caratBand: string;
  cut: string;
  metal: string;
  edition: string;
  chakra: string;
  energy: string[];
  heroCopy: string;
  status: "available" | "reserved" | "archived";
};

export const gems: Gem[] = [
  {
    slug: "kingmaker-trinity-i",
    name: "Kingmaker Trinity I",
    tagline: "The flagship Tanzanite · Painite · Moldavite triad",
    stone: "tanzanite",
    caratBand: "3.2 – 3.8 ctw total",
    cut: "Round brilliant (3–5mm array)",
    metal: ".925 SILV23 proprietary sterling",
    edition: "Piece 1 of 7 · Founders Series",
    chakra: "Crown · Third Eye · Heart",
    energy: [
      "Strategic clarity",
      "Wealth sovereignty",
      "Calm in volatility",
    ],
    heroCopy:
      "Built for founders, fund managers, and quiet apex operators. Kingmaker Trinity I is calibrated for decision‑clarity under pressure, asymmetric opportunity detection, and long‑game patience.",
    status: "reserved",
  },
  {
    slug: "kingmaker-trinity-ii",
    name: "Kingmaker Trinity II",
    tagline: "Field‑ready Trinity for daily wear",
    stone: "painite",
    caratBand: "2.4 – 2.9 ctw total",
    cut: "Round + step‑cut accents",
    metal: ".925 SILV23 sterling",
    edition: "Piece 2 of 7 · Founders Series",
    chakra: "Root · Solar Plexus",
    energy: [
      "Grounded aggression",
      "Courage in conflict",
      "Operational discipline",
    ],
    heroCopy:
      "Designed as a daily‑wear operator piece, Trinity II biases toward grounded confidence, conflict navigation, and fearless but calculated action.",
    status: "available",
  },
  {
    slug: "meridian-trinity",
    name: "Meridian Trinity",
    tagline: "For navigators, analysts, and system‑builders",
    stone: "moldavite",
    caratBand: "2.8 – 3.3 ctw total",
    cut: "Mixed round / organic accents",
    metal: ".925 SILV23 sterling",
    edition: "Piece 3 of 7 · Founders Series",
    chakra: "Heart · Throat · Third Eye",
    energy: ["Signal detection", "Pattern recognition", "Aligned communication"],
    heroCopy:
      "Built for those who live in data, timing, and probability trees. Meridian Trinity sharpens signal/noise separation and keeps the nervous system steady while the board lights up.",
    status: "available",
  },
];
