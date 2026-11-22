// Buah Rasa — script.js
// Tiga interaksi kecil, tanpa library:
// 1) tombol mode gelap, 2) penghitung bintang, 3) tahun di footer.

(function () {
  "use strict";

  // 1) Mode gelap / terang — simpan pilihan di browser (localStorage).
  var themeBtn = document.getElementById("themeBtn");
  var saved = null;
  try { saved = localStorage.getItem("buah-rasa-theme"); } catch (e) { /* abaikan */ }

  function applyTheme(dark) {
    document.body.classList.toggle("dark", dark);
    themeBtn.textContent = dark ? "☀️ Mode Terang" : "🌙 Mode Gelap";
    try { localStorage.setItem("buah-rasa-theme", dark ? "dark" : "light"); } catch (e) { /* abaikan */ }
  }

  if (saved === "dark") { applyTheme(true); }
  themeBtn.addEventListener("click", function () {
    applyTheme(!document.body.classList.contains("dark"));
  });

  // 2) Penghitung bintang — contoh state paling sederhana.
  var count = 0;
  var starBtn = document.getElementById("starBtn");
  var starCount = document.getElementById("starCount");
  starBtn.addEventListener("click", function () {
    count += 1;
    starCount.textContent = count + " bintang terkumpul di halaman ini.";
    if (count === 10) {
      starCount.textContent += " Terima kasih! Bintang asli bisa diberikan di GitHub.";
    }
  });

  // 3) Tahun berjalan di footer — supaya tidak usah diedit tiap tahun.
  document.getElementById("year").textContent = new Date().getFullYear();

  // 4) Scroll halus untuk link navigasi di halaman yang sama.
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (a) {
    a.addEventListener("click", function (ev) {
      var target = document.querySelector(a.getAttribute("href"));
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
