document.addEventListener("DOMContentLoaded", function () {
    let t1 = gsap.timeline({ paused: true });
  
    // Select .menu-overlay using the correct class selector (prepend with a dot)
    t1.to(".menu-overlay", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power2.out",
    });
  
    t1.from(
      ".menu-link, .btn",
      {
        opacity: 0,
        y: 60,
        stagger: 0.05,
        duration: 0.75,
        ease: "power1.inOut",
      },
      "<"
    );
  
    t1.to(
      ".video-preview",
      {
        duration: 1,
        height: "200px",
        ease: "power2.out",
      },
      "<"
    );
    t1.to(
      ".menu-divider",
      {
        duration: 2,
        width: "100%",
        ease: "power4.out",
      },
      "<"
    );
  
    function openMenu() {
      document.querySelector(".menu-overlay").style.pointerEvents = "all";
      t1.play();
    }
  
    function closeMenu() {
      document.querySelector(".menu-overlay").style.pointerEvents = "none";
      t1.reverse();
    }
  
    document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
    document
      .querySelector(".menu-close-btn")
      .addEventListener("click", closeMenu);
    // Remove the t1.reverse(); line, as it's not necessary here
  });
  