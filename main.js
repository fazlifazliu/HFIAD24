
      const menuButton = document.querySelector(".menu-icon");
      const navigation = document.querySelector(".main-nav");
      const navLinks = document.querySelectorAll(".nav-list a");
      const navOverlay = document.querySelector(".nav-overlay");
      const scrollTopButton = document.querySelector(".scroll-top");

      // Toggle mobile menu
      menuButton.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("is-open");
        navOverlay.classList.toggle("is-open");
        menuButton.classList.toggle("is-open");
        document.body.classList.toggle("menu-open");
        menuButton.setAttribute("aria-expanded", isOpen);
      });

      // Close menu when clicking a navigation link
      navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href");

          this.classList.add("is-tapped");

          setTimeout(() => {
            this.classList.remove("is-tapped");

            navigation.classList.remove("is-open");
            navOverlay.classList.remove("is-open");
            menuButton.classList.remove("is-open");
            document.body.classList.remove("menu-open");
            menuButton.setAttribute("aria-expanded", "false");

            if (targetId && targetId.startsWith("#")) {
              document.querySelector(targetId)?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }, 180);
        });
      });

      // Close menu when clicking on overlay
      navOverlay.addEventListener("click", function () {
        navigation.classList.remove("is-open");
        navOverlay.classList.remove("is-open");
        menuButton.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
      });

      // Show scroll-to-top button when scrolling down
      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          scrollTopButton.classList.add("is-visible");
        } else {
          scrollTopButton.classList.remove("is-visible");
        }
      });

      // Scroll smoothly back to top
      scrollTopButton.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
   