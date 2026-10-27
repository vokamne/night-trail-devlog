// Night Trail devlog — mobile menu and image lightbox
(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Lightbox: any <a class="zoom" href="big.jpg"> opens the image large
  var links = document.querySelectorAll('a.zoom');
  if (!links.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Image viewer');
  box.innerHTML = '<button type="button" aria-label="Close">&times;</button><img alt=""><p></p>';
  document.body.appendChild(box);

  var img = box.querySelector('img');
  var caption = box.querySelector('p');
  var closeBtn = box.querySelector('button');
  var lastFocus = null;

  function open(link) {
    var thumb = link.querySelector('img');
    img.src = link.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    caption.textContent = link.getAttribute('data-caption') || (thumb ? thumb.alt : '');
    lastFocus = link;
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
    if (lastFocus) lastFocus.focus();
  }

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      open(link);
    });
  });
  box.addEventListener('click', function (e) {
    if (e.target !== img) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && box.classList.contains('open')) close();
  });
})();
