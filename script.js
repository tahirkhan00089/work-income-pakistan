
const opportunities = [
  {
    name: "Upwork",
    category: "Freelancing",
    icon: "💼",
    description: "Find freelance projects in writing, design, development and more. Pakistan supports local bank and selected mobile wallet withdrawals. Work is not guaranteed.",
    url: "https://www.upwork.com/"
  },
  {
    name: "Fiverr",
    category: "Freelancing",
    icon: "🎨",
    description: "Create service listings and offer your skills to clients worldwide. Payoneer withdrawal options are available, but payment coverage depends on your location.",
    url: "https://www.fiverr.com/"
  },
  {
    name: "Freelancer",
    category: "Freelancing",
    icon: "🌍",
    description: "Find freelance projects and submit proposals. Pakistan supports Express Withdrawal to eligible bank accounts. Withdrawal fees, minimum amounts and verification requirements apply.",
    url: "https://www.freelancer.com/"
  },
  {
    name: "PeoplePerHour",
    category: "Freelancing",
    icon: "⏰",
    description: "Explore freelance projects and offer services to clients. Check the available withdrawal options for your country before starting.",
    url: "https://www.peopleperhour.com/"
  },
  {
    name: "CrowdGen",
    category: "Microtasks",
    icon: "🤖",
    description: "Explore AI training and data projects. Project eligibility, task availability and payment methods depend on your location and qualifications.",
    url: "https://crowdgen.com/"
  },
  {
    name: "Clickworker",
    category: "Microtasks",
    icon: "🖱️",
    description: "Explore online microtasks. Registration may be unavailable in some countries. Confirm that a supported payment method is available before working.",
    url: "https://www.clickworker.com/"
  },
  {
    name: "We Work Remotely",
    category: "Remote Work",
    icon: "🏠",
    description: "Browse remote job listings. Applicants in Pakistan should look for jobs marked worldwide or open to their region.",
    url: "https://weworkremotely.com/"
  },
  {
    name: "freeCodeCamp",
    category: "Learning",
    icon: "💻",
    description: "Learn programming and web development through free lessons, practical projects and free certifications.",
    url: "https://www.freecodecamp.org/"
  },
  {
    name: "Google Skillshop",
    category: "Learning",
    icon: "📚",
    description: "Explore Google's training resources for digital tools, advertising products and professional skills.",
    url: "https://skillshop.withgoogle.com/"
  },
  {
    name: "Guru",
    category: "Freelancing",
    icon: "💻",
    description: "Find freelance projects in writing, design, programming and other skills. Pakistan supports eligible local bank withdrawals. A minimum $100 balance and $1 withdrawal fee apply. Payments may take up to five business days. Work is not guaranteed.",
    url: "https://www.guru.com/"
  },
  {
    name: "Canva",
    category: "Freelancing",
    icon: "🎨",
    description: "Create graphics, social media designs and presentations. You can offer design services to clients. Canva Creators may earn royalties after acceptance into the program. Creator eligibility and payment arrangements apply. Earnings are not guaranteed.",
    url: "https://www.canva.com/"
  }
];

const opportunityList = document.getElementById("opportunityList");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");

let selectedCategory = "All";

function renderOpportunities() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = opportunities.filter(item => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  opportunityList.innerHTML = filtered.map(item => `
    <article class="opportunity-card">
      <div class="card-icon">${item.icon}</div>
      <span class="card-category">${item.category}</span>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <a class="card-link"
         href="${item.url}"
         target="_blank"
         rel="noopener noreferrer">
         Visit Official Website →
      </a>
    </article>
  `).join("");

  emptyMessage.classList.toggle("hidden", filtered.length !== 0);
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active")
      ?.classList.remove("active");

    button.classList.add("active");
    selectedCategory = button.dataset.category;
    renderOpportunities();
  });
});

searchInput.addEventListener("input", renderOpportunities);

document.getElementById("searchBtn").addEventListener("click", () => {
  renderOpportunities();
  document.getElementById("opportunities")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("show");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("show");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

renderOpportunities();
