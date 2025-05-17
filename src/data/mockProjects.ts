
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
    churchName: "Resurrection Church Beirut",
    title: "Community Center Expansion",
    summary: "Help us expand our community center to accommodate more families and provide essential services to refugees in our neighborhood.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    location: "Beirut, Lebanon",
    currentAmount: 125000,
    goalAmount: 250000,
    daysLeft: 45,
    category: "Building",
    isCompleted: false
  },
  {
    id: "2",
    churchName: "Kasr El Dobara Church",
    title: "Food Distribution Program",
    summary: "We're expanding our food distribution program to serve more vulnerable families in Cairo's urban communities.",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d",
    location: "Cairo, Egypt",
    currentAmount: 8750,
    goalAmount: 15000,
    daysLeft: 30,
    category: "Community",
    isCompleted: false
  },
  {
    id: "3",
    churchName: "Amman Baptist Church",
    title: "Youth Ministry Transportation",
    summary: "Help us purchase a van to transport youth to events, community service projects, and outreach in surrounding villages.",
    image: "https://images.unsplash.com/photo-1473879112146-98af332b2558",
    location: "Amman, Jordan",
    currentAmount: 22000,
    goalAmount: 35000,
    daysLeft: 15,
    category: "Youth",
    isCompleted: false
  },
  {
    id: "4",
    churchName: "St. Andrew's Church",
    title: "Water Project in Rural Morocco",
    summary: "Partner with us to provide clean water access to a village of 500 people in the Atlas Mountains region.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    location: "Rabat, Morocco",
    currentAmount: 4500,
    goalAmount: 10000,
    daysLeft: 60,
    category: "Missions",
    isCompleted: false
  },
  {
    id: "5",
    churchName: "St. Mary's Coptic Church",
    title: "Historic Building Restoration",
    summary: "Help restore our 150-year-old church building that serves as a spiritual and cultural landmark for the community.",
    image: "https://images.unsplash.com/photo-1519892743950-a52cd8954abc",
    location: "Alexandria, Egypt",
    currentAmount: 85000,
    goalAmount: 120000,
    daysLeft: 90,
    category: "Building",
    isCompleted: false
  },
  {
    id: "6",
    churchName: "Emirates Christian Fellowship",
    title: "Community Education Center",
    summary: "Building a center to provide free language classes, job skills training, and community support services.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    location: "Dubai, UAE",
    currentAmount: 67000,
    goalAmount: 200000,
    daysLeft: 120,
    category: "Education",
    isCompleted: false
  },
  {
    id: "7",
    churchName: "Casablanca Community Church",
    title: "Relief for Earthquake Victims",
    summary: "Providing emergency supplies, temporary housing, and rebuilding assistance to families affected by the recent earthquake.",
    image: "https://images.unsplash.com/photo-1580983228693-a7c0616a9831",
    location: "Casablanca, Morocco",
    currentAmount: 28000,
    goalAmount: 50000,
    daysLeft: 5,
    category: "Disaster",
    isCompleted: false
  },
  {
    id: "8",
    churchName: "Tunis International Church",
    title: "Worship Equipment Upgrade",
    summary: "Help us upgrade our outdated sound and media equipment to enhance worship services for our diverse congregation.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    location: "Tunis, Tunisia",
    currentAmount: 12000,
    goalAmount: 18000,
    daysLeft: 25,
    category: "Worship",
    isCompleted: false
  },
  {
    id: "9",
    churchName: "Nazareth Evangelical Church",
    title: "Children's Ministry Playground",
    summary: "Creating a safe, fun outdoor space for children to play and learn about God's creation.",
    image: "https://images.unsplash.com/photo-1571247633106-edf5bf3d3100",
    location: "Nazareth, Israel",
    currentAmount: 32000,
    goalAmount: 45000,
    daysLeft: 35,
    category: "Youth",
    isCompleted: false
  },
  {
    id: "10",
    churchName: "Middle East Bible College",
    title: "Scholarship Fund for Students",
    summary: "Helping passionate young leaders receive theological education to better serve their communities.",
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db",
    location: "Beirut, Lebanon",
    currentAmount: 18500,
    goalAmount: 25000,
    daysLeft: 50,
    category: "Education",
    isCompleted: false
  },
  {
    id: "11",
    churchName: "Good Shepherd Church",
    title: "Medical Clinic in Northern Iraq",
    summary: "We successfully built a clinic that now serves over 3,000 people with quality healthcare in an underserved region.",
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d",
    location: "Erbil, Iraq",
    currentAmount: 78000,
    goalAmount: 75000,
    daysLeft: 0,
    category: "Education",
    isCompleted: true
  },
  {
    id: "12",
    churchName: "Jericho Bible Church",
    title: "Community Agricultural Project",
    summary: "Our community helped fund agricultural training and equipment that now helps over 50 families with sustainable food production.",
    image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e",
    location: "Jericho, West Bank",
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
