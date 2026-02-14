document.querySelector(".randomizer").addEventListener("click", function () {
  const pages = [
    "page1.1.html",
    "page1.html",
    "page2.html",
    "page3.html",
    "page4.html",
    "page5.html"
  ];

  const randomIndex = Math.floor(Math.random() * pages.length);
  window.location.href = pages[randomIndex];
});