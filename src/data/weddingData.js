export const weddingData = {
  groom: {
    firstName: "Zohan",
    fullName: "Zohan Ahmed Siddiqui",
    title: "Groom",
    parents: "Mr. & Mrs. Tariq Ahmed Siddiqui",
    familyNote: "along with the Siddiqui Family"
  },
  bride: {
    firstName: "Rose",
    fullName: "Rose Farooq Khan",
    title: "Bride",
    parents: "Mr. & Mrs. Farooq Mansoor Khan",
    familyNote: "along with the Khan Family"
  },

  monogram: "Z & R",
  theme: "Royal Midnight Garden",
  weddingDate: "2026-10-24T11:00:00",
  formattedDate: "Saturday, 24 October 2026",
  shortDate: "24 · 10 · 2026",

  hero: {
    eyebrow: "THE WEDDING OF",
    invitationNote: "With joyful hearts and the blessings of our families, we invite you to celebrate the union of our lives and love.",
    dateDisplay: "24 · OCTOBER · 2026",
    backgroundImage: "/images/hero-couple.jpg"
  },

  story: {
    title: "Our Story",
    subtitle: "Two lives. One beautiful story.",
    chapters: [
      {
        number: "01",
        title: "First Meeting",
        date: "Autumn 2023",
        description: "Sometimes the most beautiful stories begin unexpectedly in a quiet veranda café, over warm conversation and laughter that lingered long past twilight.",
        image: "/images/story-first-meeting.jpg",
        highlight: "A serendipitous beginning"
      },
      {
        number: "02",
        title: "The Beginning",
        date: "Spring 2024",
        description: "What started as a quiet shared moment quickly grew into countless memories, endless late-night talks, and a deep understanding that our souls had known each other forever.",
        image: "/images/gallery-portrait.jpg",
        highlight: "Growing closer with every sunset"
      },
      {
        number: "03",
        title: "The Proposal",
        date: "Winter 2025",
        description: "Under a canopy of fragrant jasmine and delicate fairy lights in the palace pavilion, came the quiet question that changed everything. And with tearful smiles, forever began.",
        image: "/images/story-proposal.jpg",
        highlight: "A heartfelt 'Yes' under starlit skies"
      },
      {
        number: "04",
        title: "Forever",
        date: "October 2026",
        description: "Now we stand on the threshold of our grandest adventure yet, ready to walk hand in hand into eternity, surrounded by the ones we love most dearly.",
        image: "/images/gallery-celebration.jpg",
        highlight: "And so the journey begins..."
      }
    ]
  },

  gallery: [
    {
      id: 1,
      title: "Royal Union",
      subtitle: "Under palace lanterns",
      src: "/images/hero-couple.jpg",
      span: "md:col-span-2 md:row-span-2",
      aspect: "aspect-[16/10]"
    },
    {
      id: 2,
      title: "The Tender Glance",
      subtitle: "Intimate portrait",
      src: "/images/gallery-portrait.jpg",
      span: "md:col-span-1 md:row-span-2",
      aspect: "aspect-[3/4]"
    },
    {
      id: 3,
      title: "The Promise",
      subtitle: "Pavilion proposal",
      src: "/images/story-proposal.jpg",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]"
    },
    {
      id: 4,
      title: "First Laughter",
      subtitle: "Where it all began",
      src: "/images/story-first-meeting.jpg",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]"
    },
    {
      id: 5,
      title: "The Celebration",
      subtitle: "Sparklers & joy",
      src: "/images/gallery-celebration.jpg",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]"
    }
  ],

  events: [
    {
      id: "engagement",
      icon: "ring",
      name: "The Engagement",
      subname: "Sangeet & Ring Ceremony",
      day: "Friday",
      date: "23 October 2026",
      time: "7:00 PM onwards",
      venueName: "The Grand Ballroom",
      venueLocation: "The Grand Palace, Ahmedabad",
      description: "An enchanting evening of music, dance, rings exchanged under crystal chandeliers, and heartfelt celebration.",
      dressCode: "Festive Glamour / Indo-Western"
    },
    {
      id: "ceremony",
      icon: "lotus",
      name: "Wedding Ceremony",
      subname: "Nikah & Royal Pheras",
      day: "Saturday",
      date: "24 October 2026",
      time: "11:00 AM",
      venueName: "Royal Pavilion Gardens",
      venueLocation: "The Grand Palace, Ahmedabad",
      description: "The sacred vows exchanged amidst fragrant jasmine blooms, traditional melodies, and the blessings of elders.",
      dressCode: "Royal Traditional / Emerald & Gold"
    },
    {
      id: "reception",
      icon: "cheers",
      name: "The Royal Reception",
      subname: "Dawat-e-Khas & Feast",
      day: "Saturday",
      date: "24 October 2026",
      time: "7:30 PM",
      venueName: "Crystal Banquet Hall",
      venueLocation: "The Grand Palace, Ahmedabad",
      description: "A celebratory banquet feast featuring royal delicacies, live sufi melodies, and joyous toasts under the starlit sky.",
      dressCode: "Black Tie / Royal Formal"
    }
  ],

  venue: {
    title: "The Celebration Awaits",
    name: "The Grand Palace",
    city: "Ahmedabad, Gujarat",
    fullAddress: "Palace Enclave, Riverfront Boulevard, Ahmedabad, Gujarat 380004",
    image: "/images/venue-palace.jpg",
    description: "Nestled alongside the serene riverfront, The Grand Palace is a masterpiece of regal Rajput and Mughal architecture, adorned with shimmering lotus pools, hand-carved jharokhas, and timeless courtyards.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+Ahmedabad+Gujarat",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ahmedabad+Gujarat"
  },

  dressCode: {
    title: "Dress Code",
    subtitle: "A Royal Midnight Affair",
    guideline: "We invite you to dress in elegant traditional attire inspired by the colors of royalty.",
    categories: [
      {
        gender: "Gentlemen",
        attire: "Kurta Pajama, Bandhgala, Royal Sherwani, or Formal Black Tie",
        accent: "Rich emerald, midnight hues, or antique accents"
      },
      {
        gender: "Ladies",
        attire: "Embroidered Saree, Royal Lehenga, Anarkali, or Ethnic Couture",
        accent: "Jewel tones, shimmering gold, and emerald embroidery"
      }
    ],
    paletteNotes: [
      { name: "Midnight Green", hex: "#071C18" },
      { name: "Royal Emerald", hex: "#123C32" },
      { name: "Champagne Gold", hex: "#D8B56A" },
      { name: "Warm Ivory", hex: "#F8F3E7" }
    ]
  },

  families: {
    groom: {
      side: "Groom's Family",
      parents: "Mr. Tariq Ahmed Siddiqui & Mrs. Yasmeen Siddiqui",
      description: "Cordially invite you to join them in blessing their son Zohan on this auspicious journey."
    },
    bride: {
      side: "Bride's Family",
      parents: "Mr. Farooq Mansoor Khan & Mrs. Parveen Khan",
      description: "With immense warmth, welcome you to celebrate their daughter Rose as she embarks on forever."
    }
  },

  hashtag: "#ZohanWedsRose",

  socialShare: {
    shareMessage: "💍 Zohan & Rose are getting married!\nWe'd love for you to be part of our special day.\n✨ Open our royal digital invitation:",
    shareTitle: "Zohan & Rose — Wedding Invitation",
    url: window.location ? window.location.origin : "https://zohanwedsrose.com"
  },

  initialMessages: [
    {
      id: "msg-1",
      name: "Arman & Sara Siddiqui",
      relation: "Family",
      message: "May your journey together be blessed with eternal laughter, deep peace, and boundless love. Can't wait for the royal celebrations!",
      time: "2 hours ago"
    },
    {
      id: "msg-2",
      name: "Uncle Mansoor & Family",
      relation: "Uncle & Aunt",
      message: "Watching you two grow together has been a true joy. Wishing you both a lifetime of happiness, harmony, and prosperity!",
      time: "Yesterday"
    },
    {
      id: "msg-3",
      name: "Kabir Mehta",
      relation: "Groom's Friend",
      message: "From college days to the biggest day of your life! So thrilled for you both, Zohan & Rose! Get ready for an unforgettable night! 🥂",
      time: "2 days ago"
    }
  ]
};
