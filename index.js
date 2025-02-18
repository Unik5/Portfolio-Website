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

//Home Button
const HomeButton = document.getElementById("Home");
HomeButton.addEventListener("click", function(){
  window.location.href="index.html";
});

//About Me Button
const AboutButton = document.getElementById("About");
AboutButton.addEventListener("click", function(){
  document.getElementById("AboutMe").scrollIntoView({ behavior: "smooth" });
});

//Projects Section
const ProjectsButton = document.getElementById("Projects");
ProjectsButton.addEventListener("click", function(){
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

//Download Button
document.getElementById("Donwload_CV").addEventListener("click", function() {
  // Define the path to the PDF file
  const pdfUrl = "./Images/Unique_Lama_CV.pdf";  // Change this to your actual file path

  // Create an invisible anchor tag to trigger the download
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Unique_Lama_CV.pdf";  // Specify the download filename
  link.click();  // Programmatically trigger a click to download the PDF
});


  const modal = document.getElementById("contactModal");
  const hireMeBtn = document.getElementById("ContactBtn");
  const closeBtn = document.querySelector(".close");

  // Open modal when clicking Hire Me button
  hireMeBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  // Close modal when clicking close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

