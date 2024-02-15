window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("navbar a");
  
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#333";
      navLinks.forEach((link) => {
        link.style.color = "#fff";
      });
    } else {
      header.style.backgroundColor = "transparent";
      navLinks.forEach((link) => {
        link.style.color = "#fff";
      });
    }
  });
  
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 90, 
        behavior: "smooth"
      });
    });
  });