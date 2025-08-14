// script.js
const links = document.querySelectorAll("#navbar a");
const current = window.location.pathname.split("/").pop();

links.forEach((link) => {
  if (link.getAttribute("href") === current) {
    link.style.textDecoration = "underline";
  }
});

// Improved active link styling for navbar
links.forEach((link) => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Modal for Success Stories
function openStoryModal(name, subtitle, description) {
  document.getElementById("modal-title").textContent = name;
  document.getElementById("modal-subtitle").textContent = subtitle;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("story-modal").style.display = "flex";
}

function closeStoryModal() {
  document.getElementById("story-modal").style.display = "none";
}

// Lightbox for Gallery
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
