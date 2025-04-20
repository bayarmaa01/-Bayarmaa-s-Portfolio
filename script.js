// Section switching
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Light/Dark Theme Toggle
const themeToggleBtn = document.getElementById('toggleTheme');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(section => {
  observer.observe(section);
});

// Default to "About" section on load
document.addEventListener('DOMContentLoaded', () => {
  showSection('about');
});

// Toggle CV viewer
const cvFrame = document.getElementById("cvFrame");
const toggleCvBtn = document.getElementById("toggleCvBtn");

toggleCvBtn.addEventListener("click", () => {
  const isExpanded = cvFrame.classList.toggle("expanded");

  if (isExpanded) {
    cvFrame.classList.remove("collapsed");
    cvFrame.style.pointerEvents = "auto";
    toggleCvBtn.textContent = "🔽 Collapse CV";
  } else {
    cvFrame.classList.add("collapsed");
    cvFrame.style.pointerEvents = "none";
    toggleCvBtn.textContent = "🔍 View Full CV";
  }
});
