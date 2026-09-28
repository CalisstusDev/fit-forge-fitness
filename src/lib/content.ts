export const foodImages = [
  { title: "Green goddess bowl", kind: "Plant power", src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85" },
  { title: "Avocado toast", kind: "Morning fuel", src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85" },
  { title: "Berry protein smoothie", kind: "Recovery", src: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85" },
  { title: "Citrus harvest salad", kind: "Fresh energy", src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85" },
  { title: "Salmon power plate", kind: "Protein", src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85" },
  { title: "Market greens", kind: "Plant power", src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85" },
  { title: "Tropical smoothie", kind: "Morning fuel", src: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85" },
  { title: "Roasted roots", kind: "Whole foods", src: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=85" },
  { title: "Poke bowl", kind: "Balanced plate", src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85" },
  { title: "Fresh market fruit", kind: "Everyday fuel", src: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=85" },
  { title: "Post-training plate", kind: "Recovery", src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85" },
  { title: "Bright veggie bowl", kind: "Plant power", src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85" },
  { title: "Green smoothie", kind: "Morning fuel", src: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=85" },
  { title: "Grain and greens", kind: "Balanced plate", src: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=85" },
  { title: "Colorful lunch bowl", kind: "Whole foods", src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=85" },
  { title: "Garden salad", kind: "Fresh energy", src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=85" },
  { title: "Strength in motion", kind: "Training", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85" },
  { title: "Focused training", kind: "Training", src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85" },
];

export const fitnessImages = [
  { title: "Move with intent", kind: "STRENGTH", src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=88", position: "center 46%" },
  { title: "Find your pace", kind: "RUN CLUB", src: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=88", position: "center 42%" },
  { title: "Earn every rep", kind: "WEIGHT TRAINING", src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=88", position: "center 35%" },
  { title: "Stronger in motion", kind: "CONDITIONING", src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=88", position: "center 38%" },
  { title: "Make space to move", kind: "MOBILITY", src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=88", position: "center 35%" },
  { title: "Show up for yourself", kind: "GYM FLOOR", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=88", position: "center 48%" },
  { title: "Progress, not perfection", kind: "SPORT", src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1000&q=88", position: "center 40%" },
  { title: "Together we go further", kind: "COMMUNITY", src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=88", position: "center 40%" },
  { title: "Build your base", kind: "TRAINING", src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=88", position: "center 38%" },
  { title: "Own the finish", kind: "ENDURANCE", src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1000&q=88", position: "center 40%" },
];

export const navItems = [
  ["Home", "/"], ["About", "/about"], ["Programs", "/programs"],
  ["Nutrition", "/nutrition"], ["Gallery", "/gallery"], ["Contact", "/contact"],
] as const;

export const programs = [
  { number: "01", name: "Strength Lab", text: "Build resilient strength through smart progressions, expert coaching, and a plan that meets you where you are.", tag: "All levels", icon: "↗" },
  { number: "02", name: "Engine Room", text: "Conditioning that develops real-world stamina without sacrificing the strength you have worked hard to earn.", tag: "40 min", icon: "⌁" },
  { number: "03", name: "Move Better", text: "Restore range, control, and confidence with deliberate mobility sessions built around how your body moves.", tag: "Recovery", icon: "◎" },
];