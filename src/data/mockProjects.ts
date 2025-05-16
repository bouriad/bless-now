
export interface Project {
  id: string;
  churchName: string;
  title: string;
  summary: string;
  image: string;
  location: string;
  currentAmount: number;
  goalAmount: number;
  daysLeft: number;
  category: string;
  isCompleted: boolean;
}

export const mockProjects: Project[] = [
  {
    id: "1",
    churchName: "Grace Community Church",
    title: "New Worship Center Building",
    summary: "Help us build a new worship center to accommodate our growing congregation and reach more people with God's love.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    location: "Atlanta, GA",
    currentAmount: 125000,
    goalAmount: 250000,
    daysLeft: 45,
    category: "Building",
    isCompleted: false
  },
  {
    id: "2",
    churchName: "Hope Fellowship",
    title: "Community Food Pantry Expansion",
    summary: "We're expanding our food pantry to serve more families in need in our local community.",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d",
    location: "Portland, OR",
    currentAmount: 8750,
    goalAmount: 15000,
    daysLeft: 30,
    category: "Community",
    isCompleted: false
  },
  {
    id: "3",
    churchName: "Faith Bible Church",
    title: "Youth Ministry Van Fund",
    summary: "Help us purchase a van to transport youth to events, mission trips, and community service projects.",
    image: "https://images.unsplash.com/photo-1473879112146-98af332b2558",
    location: "Nashville, TN",
    currentAmount: 22000,
    goalAmount: 35000,
    daysLeft: 15,
    category: "Youth",
    isCompleted: false
  },
  {
    id: "4",
    churchName: "Living Water Church",
    title: "Clean Water Well in Uganda",
    summary: "Partner with us to drill a well providing clean water to a village of 500 people in rural Uganda.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    location: "Kampala, Uganda",
    currentAmount: 4500,
    goalAmount: 10000,
    daysLeft: 60,
    category: "Missions",
    isCompleted: false
  },
  {
    id: "5",
    churchName: "St. Paul's Cathedral",
    title: "Historic Stained Glass Restoration",
    summary: "Help restore our 150-year-old stained glass windows depicting biblical scenes that inspire visitors daily.",
    image: "https://images.unsplash.com/photo-1519892743950-a52cd8954abc",
    location: "London, UK",
    currentAmount: 85000,
    goalAmount: 120000,
    daysLeft: 90,
    category: "Building",
    isCompleted: false
  },
  {
    id: "6",
    churchName: "Harvest Church",
    title: "Community Education Center",
    summary: "Building a center to provide free tutoring, adult literacy classes, and job skills training to our community.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    location: "Dallas, TX",
    currentAmount: 67000,
    goalAmount: 200000,
    daysLeft: 120,
    category: "Education",
    isCompleted: false
  },
  {
    id: "7",
    churchName: "New Life Fellowship",
    title: "Disaster Relief for Hurricane Victims",
    summary: "Providing emergency supplies, temporary housing, and rebuilding assistance to families affected by Hurricane Maria.",
    image: "https://images.unsplash.com/photo-1580983228693-a7c0616a9831",
    location: "San Juan, Puerto Rico",
    currentAmount: 28000,
    goalAmount: 50000,
    daysLeft: 5,
    category: "Disaster",
    isCompleted: false
  },
  {
    id: "8",
    churchName: "Calvary Chapel",
    title: "Updated Sound System",
    summary: "Help us upgrade our outdated sound equipment to enhance the worship experience for everyone.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    location: "Phoenix, AZ",
    currentAmount: 12000,
    goalAmount: 18000,
    daysLeft: 25,
    category: "Worship",
    isCompleted: false
  },
  {
    id: "9",
    churchName: "Trinity Church",
    title: "New Playground for Children's Ministry",
    summary: "Creating a safe, fun outdoor space for children to play and learn about God's creation.",
    image: "https://images.unsplash.com/photo-1571247633106-edf5bf3d3100",
    location: "Chicago, IL",
    currentAmount: 32000,
    goalAmount: 45000,
    daysLeft: 35,
    category: "Youth",
    isCompleted: false
  },
  {
    id: "10",
    churchName: "Kingdom Assembly",
    title: "Bible College Scholarship Fund",
    summary: "Helping passionate young leaders receive theological education to serve their communities better.",
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db",
    location: "Nairobi, Kenya",
    currentAmount: 18500,
    goalAmount: 25000,
    daysLeft: 50,
    category: "Education",
    isCompleted: false
  },
  {
    id: "11",
    churchName: "Light of Hope Church",
    title: "School Building in Rural Guatemala",
    summary: "We successfully built a school that now serves 120 children with quality Christian education.",
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d",
    location: "Quetzaltenango, Guatemala",
    currentAmount: 78000,
    goalAmount: 75000,
    daysLeft: 0,
    category: "Education",
    isCompleted: true
  },
  {
    id: "12",
    churchName: "First Baptist Church",
    title: "Medical Clinic in Tanzania",
    summary: "Our community helped fund a medical clinic that now serves over 5,000 people with basic healthcare.",
    image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e",
    location: "Arusha, Tanzania",
    currentAmount: 105000,
    goalAmount: 100000,
    daysLeft: 0,
    category: "Missions",
    isCompleted: true
  }
];

export const getProjectById = (id: string) => {
  return mockProjects.find(project => project.id === id);
};

export const getActiveProjects = () => {
  return mockProjects.filter(project => !project.isCompleted);
};

export const getCompletedProjects = () => {
  return mockProjects.filter(project => project.isCompleted);
};
