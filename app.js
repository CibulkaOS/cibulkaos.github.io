/* CibulkaOS — jediná dynamika stránky: aktuální rok v patičce */
(function () {
  "use strict";
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
