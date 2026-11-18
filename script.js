
const opportunities = [
  {
    name: "Upwork",
    category: "Freelancing",
    icon: "💼",
    description: "Find freelance projects in writing, design, development and many other services.",
    url: "https://www.upwork.com/"
  },
  {
    name: "Fiverr",
    category: "Freelancing",
    icon: "🎨",
    description: "Offer your services to clients looking for creative and professional work.",
    url: "https://www.fiverr.com/"
  },
  {
    name: "Freelancer",
    category: "Freelancing",
    icon: "🌍",
    description: "Explore freelance projects and submit proposals to potential clients.",
    url: "https://www.freelancer.com/"
  },
  {
    name: "PeoplePerHour",
    category: "Freelancing",
    icon: "⏰",
    description: "Explore project-based freelance services and client opportunities.",
    url: "https://www.peopleperhour.com/"
  },
  {
    name: "CrowdGen",
    category: "Microtasks",
    icon: "🤖",
    description: "Explore AI training and data projects. Availability depends on location and qualifications.",
    url: "https://crowdgen.com/"
  },
  {
    name: "Clickworker",
    category: "Microtasks",
    icon: "🖱️",
    description: "Explore online microtasks and check available work in your country.",
    url: "https://www.clickworker.com/"
  },
  {
    name: "We Work Remotely",
    category: "Remote Work",
    icon: "🏠",
    description: "Browse remote job listings and check each employer's country requirements.",
    url: "https://weworkremotely.com/"
  },
  {
    name: "freeCodeCamp",
    category: "Learning",
    icon: "💻",
    description: "Learn programming and web development through free interactive lessons.",
    url: "https://www.freecodecamp.org/"
  },
  {
    name: "Google Skillshop",
    category: "Learning",
    icon: "📚",
    description: "Learn about Google's digital tools and advertising products.",
    url: "https://skillshop.withgoogle.com/"
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
