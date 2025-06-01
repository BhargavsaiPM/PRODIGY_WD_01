const navbar = document.getElementById('navbar');
    const logos = document.getElementsByClassName("logo");
    const links = navbar.getElementsByTagName("a");

    // Initial styles
    navbar.style.backgroundColor = "black";
    navbar.style.transition = "background-color 1.5s ease, box-shadow 1s ease";
    navbar.style.boxShadow = "none";
    navbar.style.opacity = "0";         // Start transparent for entrance animation
    navbar.style.transform = "translateY(-20px)"; // Start slightly above

    // Animate navbar entrance after short delay
    setTimeout(() => {
      navbar.style.transition += ", opacity 1s ease, transform 1s ease";
      navbar.style.opacity = "1";
      navbar.style.transform = "translateY(0)";
    }, 100);

    // Set initial styles and transitions for logos and links
  

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgb(89 101 185)";  // Calm Teal
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)";  // Add shadow on scroll
         for (const logo of logos) {
          logo.style.transition = "color 1.8s ease";
        }
        for (const link of links) {
          link.style.transition = "color 1.8s ease";
        }
      } else {
        navbar.style.backgroundColor = "black";
        navbar.style.boxShadow = "none";  // Remove shadow
         for (const logo of logos) {
          logo.style.transition = "color 1.8s ease";
        }
        for (const link of links) {
          link.style.transition = "color 1.8s ease";
        }
      }
    });