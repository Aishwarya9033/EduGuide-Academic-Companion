// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
}

themeToggle.addEventListener('click', toggleDarkMode);
mobileThemeToggle.addEventListener('click', toggleDarkMode);


if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Notification dropdown
const notificationBtn = document.getElementById('notification-btn');
const mobileNotificationBtn = document.getElementById('mobile-notification-btn');
const notificationDropdown = document.getElementById('notification-dropdown');

notificationBtn.addEventListener('click', () => {
    notificationDropdown.classList.toggle('hidden');
});

mobileNotificationBtn.addEventListener('click', () => {
    
    alert('Notifications will be shown here');
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
        notificationDropdown.classList.add('hidden');
    }
});

// Chatbot toggle
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');
const minimizeChatbot = document.getElementById('minimize-chatbot');

chatbotToggle.addEventListener('click', () => {
    chatbotBox.classList.toggle('hidden');
});

minimizeChatbot.addEventListener('click', () => {
    chatbotBox.classList.add('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// data for testing 
const mockPYQs = [
    {
        branch: "CSE",
        year: "2023",
        semester: "Sem 3",
        title: "Data Structures & Algorithms",
        description: "Previous year question papers for DSA with solutions from 2019-2023.",
        type: "PDF",
        size: "12.4 MB"
    },
    {
        branch: "IT",
        year: "2022",
        semester: "Sem 4",
        title: "Database Management Systems",
        description: "Complete set of DBMS question papers with model answers from 2018-2022.",
        type: "PDF",
        size: "8.7 MB"
    },
    {
        branch: "ECE",
        year: "2021",
        semester: "Sem 5",
        title: "Digital Signal Processing",
        description: "DSP question papers collection with important questions highlighted.",
        type: "PDF",
        size: "15.2 MB"
    }
];

