// Scroll animation
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var opacity = 1 - (window.scrollY / 150); // Reduce opacity gradually as scroll position increases
    opacity = Math.max(0, opacity); // Ensure opacity is between 0 and 1

    if (window.scrollY > 150) {
        opacity = 0; // Set opacity to 0 once scroll position is 200 pixels or more
        header.style.zIndex = -10; // Hide header by setting z-index to -10
    } else {
        header.classList.toggle("sticky", window.scrollY > 0);
        header.style.zIndex = 1; // Reset z-index to 1 when header is visible
    }

    header.style.opacity = opacity; // Apply opacity to the header
});

window.addEventListener('DOMContentLoaded', () => {
    const includes = document.querySelectorAll('[data-include]');
  
    includes.forEach(el => {
      const file = el.getAttribute('data-include');
  
      fetch(file)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Could not fetch ${file}`);
          }
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
        })
        .catch(error => {
          console.error(error);
          el.innerHTML = "<p>Component not found.</p>";
        });
    });
  });
  