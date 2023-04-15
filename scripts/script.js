function openNav() {
  const openMenu = document.getElementById("hamburger-open");
  const navMenu = document.getElementById("menu-small");
  const closeNavBtn = document.getElementById("hamburger-close");
  openMenu.style.display = "none";
  closeNavBtn.style.display = "block";
  navMenu.style.display = "block";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";

  document.addEventListener("mouseup", function (e) {
    if (!navMenu.contains(e.target)) {
      navMenu.style.display = "none";
      openMenu.style.display = "block";
      closeNavBtn.style.display = "none";
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }
  });
}

function closeNav() {
  const openMenu = document.getElementById("hamburger-open");
  const navMenu = document.getElementById("menu-small");
  const closeNavBtn = document.getElementById("hamburger-close");
  navMenu.style.display = "none";
  openMenu.style.display = "block";
  closeNavBtn.style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

function toggleMenu() {
  const navMenu = document.getElementById("menu-small");
  if (x.matches) {
    closeNav();
  }
}

const x = window.matchMedia("(min-width: 900px)");

toggleMenu(x);
x.addListener(toggleMenu);

const renderSkillInfo = () => {
  const skillsList = [
    "JavaScript",
    "React.js",
    "Interaction Design",
    "HTML",
    "CSS",
    "Responsive Web Design",
    "Bootstrap",
    "WordPress",
  ];

  const skillsElement = document.getElementById("skills");
  for (let skill of skillsList) {
    const skillTemplate = `
    <li class="skill">${skill}</li>
    `;
    skillsElement.innerHTML += skillTemplate;
  }
};

window.onload = () => renderSkillInfo();
