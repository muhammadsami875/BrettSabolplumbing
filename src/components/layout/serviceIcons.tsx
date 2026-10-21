import { Building2, Flame, House, ShieldCheck, Shovel, Waves, type LucideIcon } from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "/residential-plumbing": House,
  "/commercial": Building2,
  "/jet-drain-cleaning": Waves,
  "/sewer-line-repair": Shovel,
  "/heating": Flame,
  "/backflow-testing": ShieldCheck,
};
