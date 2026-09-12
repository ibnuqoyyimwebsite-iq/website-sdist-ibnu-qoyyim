document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.navtoggle');
  var nav = document.querySelector('.mainnav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Tap-to-open dropdowns on touch/mobile (menu stays open on hover for desktop via CSS)
  document.querySelectorAll('.has-dropdown > button, .has-dropdown > a.dropdown-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        trigger.parentElement.classList.toggle('open');
      }
    });
  });
});
