<<<<<<< HEAD
const dynamicContainer = document.getElementById('dynamic-fireflies');
let fireflyCount = 0;
const maxFireflies = 100;  // limit max on screen to not overload browser

function createDynamicFirefly(x, y) {
  if (fireflyCount >= maxFireflies) return;  // limit fireflies

  const firefly = document.createElement('div');
  firefly.classList.add('dynamic-firefly');

  // Set initial position (adjust size offset for centering)
  firefly.style.left = `${x - 3}px`;
  firefly.style.top = `${y - 3}px`;

  // Optionally randomize animation duration & delay for natural effect
  const duration = 2000 + Math.random() * 2000; // 2 to 4 seconds
  firefly.style.animationDuration = `${duration}ms`;

  dynamicContainer.appendChild(firefly);
  fireflyCount++;

  // Remove the firefly element after animation ends
  firefly.addEventListener('animationend', () => {
    dynamicContainer.removeChild(firefly);
    fireflyCount--;
  });
}

// Debounce fireflies creation for performance: only create every 50ms max
let lastFireflyTime = 0;
window.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastFireflyTime > 50) {
    createDynamicFirefly(e.clientX, e.clientY);
    lastFireflyTime = now;
  }
});
// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if (hash.startsWith("#")) {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simple form handler (demo)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks! (Demo only. No backend configured.)");
});

=======
const dynamicContainer = document.getElementById('dynamic-fireflies');
let fireflyCount = 0;
const maxFireflies = 100;  // limit max on screen to not overload browser

function createDynamicFirefly(x, y) {
  if (fireflyCount >= maxFireflies) return;  // limit fireflies

  const firefly = document.createElement('div');
  firefly.classList.add('dynamic-firefly');

  // Set initial position (adjust size offset for centering)
  firefly.style.left = `${x - 3}px`;
  firefly.style.top = `${y - 3}px`;

  // Optionally randomize animation duration & delay for natural effect
  const duration = 2000 + Math.random() * 2000; // 2 to 4 seconds
  firefly.style.animationDuration = `${duration}ms`;

  dynamicContainer.appendChild(firefly);
  fireflyCount++;

  // Remove the firefly element after animation ends
  firefly.addEventListener('animationend', () => {
    dynamicContainer.removeChild(firefly);
    fireflyCount--;
  });
}

// Debounce fireflies creation for performance: only create every 50ms max
let lastFireflyTime = 0;
window.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastFireflyTime > 50) {
    createDynamicFirefly(e.clientX, e.clientY);
    lastFireflyTime = now;
  }
});
// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if (hash.startsWith("#")) {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simple form handler (demo)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks! (Demo only. No backend configured.)");
});

>>>>>>> 1b8c78d (Initial commit)
