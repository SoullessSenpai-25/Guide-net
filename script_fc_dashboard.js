// User data for multiple pages
const userData = [
  // Page 1
  [
    {
      id: "srk",
      name: "SRK",
      title: "Student @ Chhapra University",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "4", label: "B.Tech" },
        { value: "3", label: "Frontend" },
        { value: "2", label: "Internships" }
      ],
      email: "srk@example.com",
      phone: "+91 9876543210",
      linkedin: "linkedin.com/in/srk"
    },
    {
      id: "jane-doe",
      name: "Jane Doe",
      title: "Designer @ Creative Studios",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "5", label: "Years" },
        { value: "12", label: "Projects" },
        { value: "3", label: "Awards" }
      ],
      email: "jane@example.com",
      phone: "+1 234-567-8901",
      linkedin: "linkedin.com/in/janedoe"
    },
    {
      id: "john-smith",
      name: "John Smith",
      title: "Developer @ Tech Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "7", label: "Years" },
        { value: "20", label: "Projects" },
        { value: "5", label: "Clients" }
      ],
      email: "john@example.com",
      phone: "+1 345-678-9012",
      linkedin: "linkedin.com/in/johnsmith"
    },
    {
      id: "emma-wilson",
      name: "Emma Wilson",
      title: "Marketing @ Brand Co.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "4", label: "Years" },
        { value: "15", label: "Campaigns" },
        { value: "8", label: "Brands" }
      ],
      email: "emma@example.com",
      phone: "+1 456-789-0123",
      linkedin: "linkedin.com/in/emmawilson"
    }
  ],
  // Page 2
  [
    {
      id: "alex-johnson",
      name: "Alex Johnson",
      title: "Product Manager @ Tech Inc",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "6", label: "Years" },
        { value: "8", label: "Products" },
        { value: "4", label: "Teams" }
      ],
      email: "alex@example.com",
      phone: "+1 567-890-1234",
      linkedin: "linkedin.com/in/alexjohnson"
    },
    {
      id: "sarah-miller",
      name: "Sarah Miller",
      title: "UX Designer @ Design Hub",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "5", label: "Years" },
        { value: "18", label: "Projects" },
        { value: "7", label: "Awards" }
      ],
      email: "sarah@example.com",
      phone: "+1 678-901-2345",
      linkedin: "linkedin.com/in/sarahmiller"
    },
    {
      id: "david-chen",
      name: "David Chen",
      title: "Backend Dev @ Cloud Systems",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "8", label: "Years" },
        { value: "25", label: "APIs" },
        { value: "12", label: "Systems" }
      ],
      email: "david@example.com",
      phone: "+1 789-012-3456",
      linkedin: "linkedin.com/in/davidchen"
    },
    {
      id: "lisa-wang",
      name: "Lisa Wang",
      title: "Data Scientist @ Analytics Co",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "4", label: "Years" },
        { value: "30", label: "Models" },
        { value: "5", label: "Patents" }
      ],
      email: "lisa@example.com",
      phone: "+1 890-123-4567",
      linkedin: "linkedin.com/in/lisawang"
    }
  ],
  // Page 3
  [
    {
      id: "michael-brown",
      name: "Michael Brown",
      title: "CTO @ Startup Ventures",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "12", label: "Years" },
        { value: "5", label: "Startups" },
        { value: "2", label: "Exits" }
      ],
      email: "michael@example.com",
      phone: "+1 901-234-5678",
      linkedin: "linkedin.com/in/michaelbrown"
    },
    {
      id: "emily-davis",
      name: "Emily Davis",
      title: "Content Creator @ Media House",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "6", label: "Years" },
        { value: "200", label: "Articles" },
        { value: "15K", label: "Followers" }
      ],
      email: "emily@example.com",
      phone: "+1 012-345-6789",
      linkedin: "linkedin.com/in/emilydavis"
    },
    {
      id: "robert-wilson",
      name: "Robert Wilson",
      title: "Sales Director @ Enterprise Inc",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "9", label: "Years" },
        { value: "$2M", label: "Revenue" },
        { value: "50+", label: "Clients" }
      ],
      email: "robert@example.com",
      phone: "+1 123-456-7890",
      linkedin: "linkedin.com/in/robertwilson"
    },
    {
      id: "jennifer-lee",
      name: "Jennifer Lee",
      title: "HR Manager @ Global Corp",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "7", label: "Years" },
        { value: "120", label: "Hires" },
        { value: "4", label: "Companies" }
      ],
      email: "jennifer@example.com",
      phone: "+1 234-567-8901",
      linkedin: "linkedin.com/in/jenniferlee"
    }
  ],
  // Page 4
  [
    {
      id: "thomas-clark",
      name: "Thomas Clark",
      title: "Architect @ Design Build",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "15", label: "Years" },
        { value: "42", label: "Buildings" },
        { value: "8", label: "Awards" }
      ],
      email: "thomas@example.com",
      phone: "+1 345-678-9012",
      linkedin: "linkedin.com/in/thomasclark"
    },
    {
      id: "olivia-martinez",
      name: "Olivia Martinez",
      title: "Financial Analyst @ Investment Co",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "6", label: "Years" },
        { value: "$50M", label: "Managed" },
        { value: "35", label: "Clients" }
      ],
      email: "olivia@example.com",
      phone: "+1 456-789-0123",
      linkedin: "linkedin.com/in/oliviamartinez"
    },
    {
      id: "william-taylor",
      name: "William Taylor",
      title: "Chef @ Gourmet Restaurant",
      avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "10", label: "Years" },
        { value: "3", label: "Stars" },
        { value: "5", label: "Restaurants" }
      ],
      email: "william@example.com",
      phone: "+1 567-890-1234",
      linkedin: "linkedin.com/in/williamtaylor"
    },
    {
      id: "sophia-rodriguez",
      name: "Sophia Rodriguez",
      title: "Lawyer @ Legal Associates",
      avatar: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "8", label: "Years" },
        { value: "120", label: "Cases" },
        { value: "92%", label: "Success" }
      ],
      email: "sophia@example.com",
      phone: "+1 678-901-2345",
      linkedin: "linkedin.com/in/sophiarodriguez"
    }
  ],
  // Page 5
  [
    {
      id: "daniel-white",
      name: "Daniel White",
      title: "Game Developer @ Interactive Studios",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "7", label: "Years" },
        { value: "12", label: "Games" },
        { value: "3", label: "Awards" }
      ],
      email: "daniel@example.com",
      phone: "+1 789-012-3456",
      linkedin: "linkedin.com/in/danielwhite"
    },
    {
      id: "ava-thompson",
      name: "Ava Thompson",
      title: "Photographer @ Visual Arts",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "9", label: "Years" },
        { value: "500+", label: "Shoots" },
        { value: "15", label: "Exhibitions" }
      ],
      email: "ava@example.com",
      phone: "+1 890-123-4567",
      linkedin: "linkedin.com/in/avathompson"
    },
    {
      id: "james-anderson",
      name: "James Anderson",
      title: "Professor @ University",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "20", label: "Years" },
        { value: "45", label: "Papers" },
        { value: "12", label: "Books" }
      ],
      email: "james@example.com",
      phone: "+1 901-234-5678",
      linkedin: "linkedin.com/in/jamesanderson"
    },
    {
      id: "mia-garcia",
      name: "Mia Garcia",
      title: "Nurse @ Medical Center",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
      stats: [
        { value: "5", label: "Years" },
        { value: "1000+", label: "Patients" },
        { value: "3", label: "Specialties" }
      ],
      email: "mia@example.com",
      phone: "+1 012-345-6789",
      linkedin: "linkedin.com/in/miagarcia"
    }
  ]
];

// Global variables
const totalPages = userData.length;
let currentPage = 1;

// DOM elements
const facecardsContainer = document.getElementById('facecards-container');
const paginationContainer = document.getElementById('pagination');
const currentPageElement = document.getElementById('current-page');
const totalPagesElement = document.getElementById('total-pages');

// Initialize the dashboard
function initDashboard() {
  // Set total pages
  totalPagesElement.textContent = totalPages;
  
  // Load first page
  loadPage(currentPage);
  
  // Generate pagination
  generatePagination();
  
  // Handle URL parameters for profile view
  handleURLParams();
}

// Handle URL parameters
function handleURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('id');
  
  if (userId) {
    // Find user data
    let userData = findUserById(userId);
    if (userData) {
      showProfilePage(userData);
    } else {
      // If user not found, redirect to main page
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
}

// Find user by ID
function findUserById(userId) {
  for (let page = 0; page < totalPages; page++) {
    for (let i = 0; i < userData[page].length; i++) {
      if (userData[page][i].id === userId) {
        return userData[page][i];
      }
    }
  }
  return null;
}

// Load facecards for a specific page
function loadPage(pageNumber) {
  // Update current page
  currentPage = pageNumber;
  currentPageElement.textContent = currentPage;
  
  // Clear container
  facecardsContainer.innerHTML = '<div class="loading">Loading facecards...</div>';
  
  // Simulate loading delay
  setTimeout(() => {
    // Clear container
    facecardsContainer.innerHTML = '';
    
    // Get users for current page
    const users = userData[pageNumber - 1];
    
    // Generate facecards
    users.forEach(user => {
      const facecard = createFacecard(user);
      facecardsContainer.appendChild(facecard);
    });
    
    // Update active pagination link
    updateActivePaginationLink();
  }, 300);
}

// Create a facecard element
function createFacecard(user) {
  const facecard = document.createElement('div');
  facecard.className = 'facecard';
  
  // Add click event to open profile
  facecard.addEventListener('click', () => {
    navigateToProfile(user.id);
  });
  
  // Create avatar
  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'facecard-avatar';
  const avatarImg = document.createElement('img');
  avatarImg.src = user.avatar;
  avatarImg.alt = `${user.name}'s Avatar`;
  avatarDiv.appendChild(avatarImg);
  
  // Create name
  const nameHeading = document.createElement('h2');
  nameHeading.className = 'facecard-name';
  nameHeading.textContent = user.name;
  
  // Create title
  const titlePara = document.createElement('p');
  titlePara.className = 'facecard-title';
  titlePara.textContent = user.title;
  
  // Create social icons
  const socialDiv = document.createElement('div');
  socialDiv.className = 'facecard-social';
  
  // Phone icon
  const phoneIcon = document.createElement('span');
  phoneIcon.className = 'social-icon';
  phoneIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>`;
  
  // LinkedIn icon
  const linkedinIcon = document.createElement('span');
  linkedinIcon.className = 'social-icon';
  linkedinIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>`;
  
  // Email icon
  const emailIcon = document.createElement('span');
  emailIcon.className = 'social-icon';
  emailIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>`;
  
  socialDiv.appendChild(phoneIcon);
  socialDiv.appendChild(linkedinIcon);
  socialDiv.appendChild(emailIcon);
  
  // Create stats
  const statsDiv = document.createElement('div');
  statsDiv.className = 'facecard-stats';
  
  user.stats.forEach(stat => {
    const statDiv = document.createElement('div');
    statDiv.className = 'stat';
    
    const statValue = document.createElement('h3');
    statValue.textContent = stat.value;
    
    const statLabel = document.createElement('p');
    statLabel.textContent = stat.label;
    
    statDiv.appendChild(statValue);
    statDiv.appendChild(statLabel);
    statsDiv.appendChild(statDiv);
  });
  
  // Assemble facecard
  facecard.appendChild(avatarDiv);
  facecard.appendChild(nameHeading);
  facecard.appendChild(titlePara);
  facecard.appendChild(socialDiv);
  facecard.appendChild(statsDiv);
  
  return facecard;
}

// Navigate to profile page
function navigateToProfile(userId) {
  // Update URL with user ID
  window.history.pushState({ userId }, '', `?id=${userId}`);
  
  // Find user data
  const user = findUserById(userId);
  
  // Show profile page
  showProfilePage(user);
}

// Show profile page
function showProfilePage(user) {
  // Clear main container
  document.querySelector('.container').innerHTML = '';
  
  // Create profile container
  const profileContainer = document.createElement('div');
  profileContainer.className = 'profile-container';
  
  // Create profile header
  const profileHeader = document.createElement('div');
  profileHeader.className = 'profile-header';
  
  // Back button
  const backButton = document.createElement('button');
  backButton.className = 'back-button';
  backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>`;
  backButton.addEventListener('click', () => {
    // Go back to main page
    window.history.pushState({}, '', window.location.pathname);
    location.reload();
  });
  
  // Avatar
  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'profile-avatar';
  const avatarImg = document.createElement('img');
  avatarImg.src = user.avatar.replace('w=120', 'w=240'); // Higher quality image
  avatarImg.alt = `${user.name}'s Avatar`;
  avatarDiv.appendChild(avatarImg);
  
  // Name
  const nameHeading = document.createElement('h1');
  nameHeading.className = 'profile-name';
  nameHeading.textContent = user.name;
  
  // Title
  const titlePara = document.createElement('p');
  titlePara.className = 'profile-title';
  titlePara.textContent = user.title;
  
  // Assemble header
  profileHeader.appendChild(backButton);
  profileHeader.appendChild(avatarDiv);
  profileHeader.appendChild(nameHeading);
  profileHeader.appendChild(titlePara);
  
  // Create profile content
  const profileContent = document.createElement('div');
  profileContent.className = 'profile-content';
  
  // Stats section
  const statsSection = document.createElement('div');
  statsSection.className = 'profile-section';
  
  const statsTitle = document.createElement('h2');
  statsTitle.className = 'profile-section-title';
  statsTitle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg> Stats`;
  
  const statsGrid = document.createElement('div');
  statsGrid.className = 'profile-stats';
  
  user.stats.forEach(stat => {
    const statDiv = document.createElement('div');
    statDiv.className = 'profile-stat';
    
    const statValue = document.createElement('div');
    statValue.className = 'profile-stat-value';
    statValue.textContent = stat.value;
    
    const statLabel = document.createElement('div');
    statLabel.className = 'profile-stat-label';
    statLabel.textContent = stat.label;
    
    statDiv.appendChild(statValue);
    statDiv.appendChild(statLabel);
    statsGrid.appendChild(statDiv);
  });
  
  statsSection.appendChild(statsTitle);
  statsSection.appendChild(statsGrid);
  
  // Contact section
  const contactSection = document.createElement('div');
  contactSection.className = 'profile-section';
  
  const contactTitle = document.createElement('h2');
  contactTitle.className = 'profile-section-title';
  contactTitle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg> Contact Information`;
  
  const contactGrid = document.createElement('div');
  contactGrid.className = 'profile-contact';
  
  // Phone contact
  const phoneContact = document.createElement('div');
  phoneContact.className = 'contact-item';
  
  const phoneIcon = document.createElement('div');
  phoneIcon.className = 'contact-icon';
  phoneIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>`;
  
  const phoneInfo = document.createElement('div');
  phoneInfo.className = 'contact-info';
  
  const phoneLabel = document.createElement('div');
  phoneLabel.className = 'contact-label';
  phoneLabel.textContent = 'Phone';
  
  const phoneValue = document.createElement('div');
  phoneValue.className = 'contact-value';
  phoneValue.textContent = user.phone;
  
  phoneInfo.appendChild(phoneLabel);
  phoneInfo.appendChild(phoneValue);
  phoneContact.appendChild(phoneIcon);
  phoneContact.appendChild(phoneInfo);
  
  // Email contact
  const emailContact = document.createElement('div');
  emailContact.className = 'contact-item';
  
  const emailIcon = document.createElement('div');
  emailIcon.className = 'contact-icon';
  emailIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>`;
  
  const emailInfo = document.createElement('div');
  emailInfo.className = 'contact-info';
  
  const emailLabel = document.createElement('div');
  emailLabel.className = 'contact-label';
  emailLabel.textContent = 'Email';
  
  const emailValue = document.createElement('div');
  emailValue.className = 'contact-value';
  emailValue.textContent = user.email;
  
  emailInfo.appendChild(emailLabel);
  emailInfo.appendChild(emailValue);
  emailContact.appendChild(emailIcon);
  emailContact.appendChild(emailInfo);
  
  // LinkedIn contact
  const linkedinContact = document.createElement('div');
  linkedinContact.className = 'contact-item';
  
  const linkedinIcon = document.createElement('div');
  linkedinIcon.className = 'contact-icon';
  linkedinIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>`;
  
  const linkedinInfo = document.createElement('div');
  linkedinInfo.className = 'contact-info';
  
  const linkedinLabel = document.createElement('div');
  linkedinLabel.className = 'contact-label';
  linkedinLabel.textContent = 'LinkedIn';
  
  const linkedinValue = document.createElement('div');
  linkedinValue.className = 'contact-value';
  linkedinValue.textContent = user.linkedin;
  
  linkedinInfo.appendChild(linkedinLabel);
  linkedinInfo.appendChild(linkedinValue);
  linkedinContact.appendChild(linkedinIcon);
  linkedinContact.appendChild(linkedinInfo);
  
  contactGrid.appendChild(phoneContact);
  contactGrid.appendChild(emailContact);
  contactGrid.appendChild(linkedinContact);
  
  contactSection.appendChild(contactTitle);
  contactSection.appendChild(contactGrid);
  
  // Assemble content
  profileContent.appendChild(statsSection);
  profileContent.appendChild(contactSection);
  
  // Assemble profile
  profileContainer.appendChild(profileHeader);
  profileContainer.appendChild(profileContent);
  
  // Add to document
  document.querySelector('.container').appendChild(profileContainer);
}

// Generate pagination links
function generatePagination() {
  // Clear container
  paginationContainer.innerHTML = '';
  
  // Add previous button if not on first page
  if (currentPage > 1) {
    const prevLink = document.createElement('a');
    prevLink.className = 'prev';
    prevLink.textContent = 'Prev';
    prevLink.addEventListener('click', () => loadPage(currentPage - 1));
    paginationContainer.appendChild(prevLink);
  }
  
  // Add page numbers
  for (let i = 1; i <= totalPages; i++) {
    // Show first page, last page, and pages around current page
    if (
      i === 1 || 
      i === totalPages || 
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      const pageLink = document.createElement('a');
      pageLink.textContent = i;
      pageLink.dataset.page = i;
      if (i === currentPage) {
        pageLink.className = 'active';
      }
      pageLink.addEventListener('click', () => loadPage(i));
      paginationContainer.appendChild(pageLink);
    } 
    // Add dots for skipped pages
    else if (
      (i === 2 && currentPage > 3) || 
      (i === totalPages - 1 && currentPage < totalPages - 2)
    ) {
      const dots = document.createElement('span');
      dots.className = 'dots';
      dots.textContent = '...';
      paginationContainer.appendChild(dots);
    }
  }
  
  // Add next button if not on last page
  if (currentPage < totalPages) {
    const nextLink = document.createElement('a');
    nextLink.className = 'next';
    nextLink.textContent = 'Next';
    nextLink.addEventListener('click', () => loadPage(currentPage + 1));
    paginationContainer.appendChild(nextLink);
  }
}

// Update active pagination link
function updateActivePaginationLink() {
  // Remove active class from all links
  const paginationLinks = paginationContainer.querySelectorAll('a');
  paginationLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to current page link
  const currentPageLink = paginationContainer.querySelector(`a[data-page="${currentPage}"]`);
  if (currentPageLink) {
    currentPageLink.classList.add('active');
  }
  
  // Regenerate pagination to update prev/next buttons
  generatePagination();
}

// Handle browser back/forward navigation
window.addEventListener('popstate', (event) => {
  if (event.state && event.state.userId) {
    // Show profile page
    const user = findUserById(event.state.userId);
    if (user) {
      showProfilePage(user);
    }
  } else {
    // Show main page
    location.reload();
  }
});

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', initDashboard);