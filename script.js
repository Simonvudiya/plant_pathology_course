const topics = [
  { title: "Bacteriology", file: "bacteriology.html" },
  { title: "Virology", file: "virology.html" },
  { title: "Nematology", file: "nematology.html" },
  { title: "Entomology", file: "entomology.html" },
  { title: "Mycology", file: "mycology.html" },
  { title: "Molecular Techniques", file: "molecular.html" },
  { title: "Sanitary and Phytosanitary", file: "sanitary.html" },
  { title: "Data Analysis", file: "datanalysis.html" }
];

function toggle(header) {
  const body = header.nextElementSibling;
  header.classList.toggle('collapsed');
  body.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", () => {
  // Get current page filename
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  // Create aside navigation
  const aside = document.createElement("aside");
  aside.id = "sidebar";
  const title = document.createElement("h2");
  title.textContent = "Plant Pathology";
  aside.appendChild(title);

  const ul = document.createElement("ul");

  // Add index link
  const indexLi = document.createElement("li");
  const indexA = document.createElement("a");
  indexA.href = "index.html";
  indexA.textContent = "Index";
  if (currentFile === "index.html") {
    indexA.classList.add("active");
  }
  indexLi.appendChild(indexA);
  ul.appendChild(indexLi);

  // Add topic links
  topics.forEach(topic => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = topic.file;
    a.textContent = topic.title;
    if (topic.file === currentFile) {
      a.classList.add("active");
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  aside.appendChild(ul);
  document.body.insertBefore(aside, document.body.firstChild);

  // Create hamburger button for mobile
  const hamburger = document.createElement("button");
  hamburger.className = "hamburger";
  hamburger.innerHTML = "☰";
  hamburger.setAttribute("aria-label", "Toggle menu");
  document.body.appendChild(hamburger);

  // Create overlay for mobile
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  // Create bottom navigation for mobile
  const bottomNav = document.createElement("nav");
  bottomNav.className = "bottom-nav";
  const bottomUl = document.createElement("ul");

  // Add index to bottom nav
  const bottomIndexLi = document.createElement("li");
  const bottomIndexA = document.createElement("a");
  bottomIndexA.href = "index.html";
  bottomIndexA.textContent = "Index";
  if (currentFile === "index.html") {
    bottomIndexA.classList.add("active");
  }
  bottomIndexLi.appendChild(bottomIndexA);
  bottomUl.appendChild(bottomIndexLi);

  // Add topics to bottom nav
  topics.forEach(topic => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = topic.file;
    a.textContent = topic.title;
    if (topic.file === currentFile) {
      a.classList.add("active");
    }
    li.appendChild(a);
    bottomUl.appendChild(li);
  });

  bottomNav.appendChild(bottomUl);
  document.body.appendChild(bottomNav);

  // Toggle sidebar on hamburger click
  hamburger.addEventListener("click", () => {
    aside.classList.toggle("open");
    overlay.classList.toggle("show");
    bottomNav.classList.toggle("hidden");
  });

  // Close sidebar when overlay is clicked
  overlay.addEventListener("click", () => {
    aside.classList.remove("open");
    overlay.classList.remove("show");
    bottomNav.classList.remove("hidden");
  });

  // Close sidebar when a link is clicked (mobile)
  const sidebarLinks = aside.querySelectorAll("a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 767) {
        aside.classList.remove("open");
        overlay.classList.remove("show");
        bottomNav.classList.remove("hidden");
      }
    });
  });

  // Open all collapsible cards by default
  document.querySelectorAll('.pathogen-header, .pest-header, .card-header, .design-header').forEach(header => {
    header.classList.remove('collapsed');
    const body = header.nextElementSibling;
    if (body) {
      body.classList.remove('hidden');
    }
  });

  // Delegated click listener for collapsible headers
  document.addEventListener('click', function(e) {
    const header = e.target.closest('.pathogen-header, .pest-header, .card-header, .design-header');
    if (header) {
      toggle(header);
    }
  });
});

(function() {
  var carousel = document.querySelector('.carousel');
  if (!carousel) return;
  var imgs = carousel.querySelectorAll('img');
  if (imgs.length <= 1) return;
  var idx = 0;
  var total = imgs.length;
  var update = function() {
    carousel.scrollTo({
      left: imgs[idx].offsetLeft,
      behavior: 'smooth'
    });
    idx = (idx + 1) % total;
  };
  update();
  setInterval(update, 5000);
})();