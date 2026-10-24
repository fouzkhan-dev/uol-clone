// Mobile menu + animated stat counters (original code for this demo)
document.getElementById('burger').addEventListener('click', function () {
  document.getElementById('nav').classList.toggle('open');
});

document.querySelectorAll('.stat strong').forEach(function (el) {
  var target = parseInt(el.getAttribute('data-count'), 10);
  var cur = 0;
  var step = Math.max(1, Math.round(target / 60));
  var t = setInterval(function () {
    cur += step;
    if (cur >= target) { cur = target; clearInterval(t); }
    el.textContent = cur.toLocaleString('en-US');
  }, 22);
});
