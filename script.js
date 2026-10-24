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

// Hero slider (home page only): auto-advance + dots
(function () {
  var slides = document.querySelectorAll('.slide');
  var dotsWrap = document.getElementById('dots');
  if (!slides.length || !dotsWrap) return;
  var cur = 0, timer;
  slides.forEach(function (_, i) {
    var b = document.createElement('button');
    b.setAttribute('aria-label', 'Slide ' + (i + 1));
    if (i === 0) b.className = 'on';
    b.addEventListener('click', function () { show(i); restart(); });
    dotsWrap.appendChild(b);
  });
  var dots = dotsWrap.querySelectorAll('button');
  function show(i) {
    slides[cur].classList.remove('active'); dots[cur].classList.remove('on');
    cur = i;
    slides[cur].classList.add('active'); dots[cur].classList.add('on');
  }
  function next() { show((cur + 1) % slides.length); }
  function restart() { clearInterval(timer); timer = setInterval(next, 5000); }
  restart();
})();

// Demo contact form: success + error messages (ship-checks 12, 13)
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.demo-form');
  var msg = document.getElementById('form-msg');
  if (!form || !msg) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.querySelector('input[type="text"]').value.trim();
    var email = form.querySelector('input[type="email"]').value.trim();
    var text = form.querySelector('textarea').value.trim();
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    msg.hidden = false;
    if (!name || !emailOk || !text) {
      msg.textContent = 'Please fill in your name, a valid email address, and a message before sending.';
      msg.className = 'form-msg err';
    } else {
      msg.textContent = 'Thanks! This is a demo form, so nothing was actually sent. For real enquiries, please use the official contact page.';
      msg.className = 'form-msg ok';
      form.reset();
    }
  });
});
