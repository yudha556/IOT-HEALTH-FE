import {
  Bed,
  Briefcase,
  Dumbbell,
  Coffee,
  BookOpen,
  SmilePlus,
  Smile,
  Meh,
  Frown,
  Angry,
} from "lucide-react";

export const ACTIVITIES = [
  { value: "woke_up", label: "Just woke up", icon: Bed },
  { value: "working", label: "Working", icon: Briefcase },
  { value: "exercising", label: "Exercising", icon: Dumbbell },
  { value: "coffee", label: "Drinking coffee", icon: Coffee },
  { value: "reading", label: "Reading", icon: BookOpen },
];

export const STRESS_LEVELS = [
  { icon: SmilePlus },
  { icon: Smile },
  { icon: Meh },
  { icon: Frown },
  { icon: Angry },
];

export const RECOMMENDATIONS = [
  "Drink enough water to stay hydrated",
  "Rest for 10 to 15 minutes after activity",
  "Continue monitoring if symptoms persist",
  "Your condition looks good, keep it up",
];
