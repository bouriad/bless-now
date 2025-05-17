
export interface Church {
  id: string;
  name: string;
  description: string;
  image: string;
  city: string;
  country: string;
  founded: number;
  denomination: string;
  website?: string;
  email?: string;
  phone?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const mockChurches: Church[] = [
  {
    id: "church1",
    name: "Resurrection Church Beirut",
    description: "A vibrant community of believers serving the local population and refugees in Beirut with various ministries including education, healthcare, and spiritual development.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    city: "Beirut",
    country: "Lebanon",
    founded: 1998,
    denomination: "Evangelical",
    website: "https://example.com/rcb",
    email: "contact@rcb.example.com",
    socialMedia: {
      facebook: "https://facebook.com/rcbeirut"
    }
  },
  {
    id: "church2",
    name: "Kasr El Dobara Evangelical Church",
    description: "One of the largest evangelical churches in the Middle East, known for its community outreach programs and dedication to serving Cairo's most vulnerable populations.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    city: "Cairo",
    country: "Egypt",
    founded: 1948,
    denomination: "Presbyterian",
    website: "https://example.com/kasr",
    email: "info@kasr.example.com",
    phone: "+20-2-1234-5678"
  },
  {
    id: "church3",
    name: "Amman Baptist Church",
    description: "A welcoming congregation focused on youth ministry, community service, and building bridges across cultural divides in the heart of Jordan's capital.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    city: "Amman",
    country: "Jordan",
    founded: 1957,
    denomination: "Baptist",
    email: "contact@abc.example.com",
    socialMedia: {
      facebook: "https://facebook.com/ammanbaptist",
      instagram: "https://instagram.com/ammanbaptist"
    }
  },
  {
    id: "church4",
    name: "Emirates Christian Fellowship",
    description: "A multinational, multicultural church serving expatriates and locals alike, with services in multiple languages and extensive community programs.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    city: "Dubai",
    country: "United Arab Emirates",
    founded: 1992,
    denomination: "Non-denominational",
    website: "https://example.com/ecf",
    email: "info@ecf.example.com",
    phone: "+971-5-1234-5678"
  },
  {
    id: "church5",
    name: "St. Mary's Coptic Orthodox Church",
    description: "A historic Coptic church preserving ancient Christian traditions while actively engaging in community service and education throughout Alexandria.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    city: "Alexandria",
    country: "Egypt",
    founded: 1920,
    denomination: "Coptic Orthodox",
    website: "https://example.com/stmary",
    phone: "+20-3-1234-5678"
  },
  {
    id: "church6",
    name: "Rabat International Church",
    description: "An English-speaking congregation welcoming people from all backgrounds, focused on community building and supporting local charitable initiatives.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    city: "Rabat",
    country: "Morocco",
    founded: 2003,
    denomination: "Interdenominational",
    email: "hello@ric.example.com"
  },
  {
    id: "church7",
    name: "Tunis Community Church",
    description: "A multilingual, multicultural church serving the international community in Tunisia's capital through worship, fellowship, and community service.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    city: "Tunis",
    country: "Tunisia",
    founded: 1984,
    denomination: "Evangelical",
    website: "https://example.com/tcc"
  },
  {
    id: "church8",
    name: "Nazareth Evangelical Church",
    description: "A historic congregation serving the local community through worship, education, and various social services focused on reconciliation.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    city: "Nazareth",
    country: "Israel",
    founded: 1871,
    denomination: "Lutheran",
    website: "https://example.com/nec",
    email: "contact@nec.example.com"
  },
  {
    id: "church9",
    name: "Good Shepherd Church Erbil",
    description: "A church committed to serving displaced and vulnerable communities in northern Iraq through humanitarian relief, education, and spiritual care.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    city: "Erbil",
    country: "Iraq",
    founded: 2007,
    denomination: "Evangelical",
    email: "help@gsc.example.com",
    phone: "+964-7-1234-5678"
  }
];

export const getMENAChurches = () => {
  return mockChurches;
};

export const getChurchById = (id: string) => {
  return mockChurches.find(church => church.id === id);
};
