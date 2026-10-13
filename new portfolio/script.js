document.addEventListener("DOMContentLoaded", () => {
  function updateTimeAndDate() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = `${String(hours).padStart(2, "0")}:${minutes} <span class="ampm">${ampm}</span>`;

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const dayString = days[now.getDay()];

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const dateString = `${months[now.getMonth()]} ${now.getFullYear()}`;

    const clockEl = document.getElementById("digital-clock");
    const dayEl = document.getElementById("calendar-day");
    const dateEl = document.getElementById("calendar-date");

    if (clockEl) clockEl.innerHTML = timeString;
    if (dayEl) dayEl.textContent = dayString;
    if (dateEl) dateEl.textContent = dateString;
  }

  setInterval(updateTimeAndDate, 1000);
  updateTimeAndDate();
  // Hero Carousel Slider Logic
  const slides = document.querySelectorAll(".hero-slide");
  const indicators = document.querySelectorAll(".carousel-indicators .indicator");
  let currentSlide = 0;

  function showSlide(index) {
    if (slides.length === 0) return;

    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((ind) => ind.classList.remove("active"));

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    if (indicators[currentSlide]) {
      indicators[currentSlide].classList.add("active");
    }
  }

  if (slides.length > 0) {
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4000);
  }

  indicators.forEach((indicator, idx) => {
    indicator.addEventListener("click", () => {
      showSlide(idx);
    });
  });
});