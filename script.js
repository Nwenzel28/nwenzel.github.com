// =======================
// PORTFOLIO DATA
// =======================

const portfolios = [
  {
    year: "Class of 2026",
    students: [
      { name: "Ryder Kawachika", link: "#" },
      { name: "Mason Domion", link: "#" },
      { name: "Tyler Wee", link: "#" }
    ]
  },
  {
    year: "Class of 2027",
    students: [
      { name: "Alan Mitchell", link: "#" },
      { name: "Kai Stewart", link: "#" }
    ]
  }
];

// =======================
// NUMBER FACTS DATA
// =======================

const numberFacts = [
  {
    number: 3,
    fact: "Used in 3D design and spatial engineering."
  },
  {
    number: 24,
    fact: "There are 24 hours in a day, critical for scheduling and logistics systems."
  },
  {
    number: 360,
    fact: "360 degrees in a circle, essential in robotics rotation and motion control."
  }
];

// =======================
// AUTO-GENERATE PORTFOLIOS
// =======================

const portfolioContainer = document.getElementById("portfolio-container");

if (portfolioContainer) {
  portfolios.forEach(group => {
    const section = document.createElement("section");

    const title = document.createElement("h2");
    title.textContent = `${group.year} (${group.students.length})`;

    const list = document.createElement("ul");

    group.students.forEach(student => {
      const li = document.createElement("li");
      const link = document.createElement("a");

      link.href = student.link;
      link.textContent = student.name;

      li.appendChild(link);
      list.appendChild(li);
    });

    section.appendChild(title);
    section.appendChild(list);
    portfolioContainer.appendChild(section);
  });
}

// =======================
// AUTO-GENERATE NUMBER FACTS
// =======================

const numbersContainer = document.getElementById("numbers-container");

if (numbersContainer) {
  numberFacts.forEach(item => {
    const section = document.createElement("section");

    const title = document.createElement("h2");
    title.textContent = item.number;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.fact;

    section.appendChild(title);
    section.appendChild(paragraph);
    numbersContainer.appendChild(section);
  });
}
