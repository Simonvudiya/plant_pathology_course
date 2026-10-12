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

document.addEventListener("DOMContentLoaded", () => {
  // Get current page filename
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  // Create aside navigation
  const aside = document.createElement("aside");
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
});