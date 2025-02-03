window.onscroll = function() {
    document.getElementById("scrollTop").style.display =
      window.scrollY > 200 ? "block" : "none";
  };
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

//   document.getElementById("darkModeToggle").onclick = function() {
//     document.body.classList.toggle("dark-mode");
//   };

// window.addEventListener("scroll", function() {
//     let aboutMe = document.querySelector(".About_Me");
//     let position = aboutMe.getBoundingClientRect().top;
//     if (position < window.innerHeight) {
//       aboutMe.classList.add("visible");
//     }
//   });