// script.js
// Minimal JS: mobile nav toggle, section reveal, active nav link

(function(){
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if(mobileToggle){
    mobileToggle.addEventListener('click', ()=>{
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!expanded));
      if(mobileNav.hasAttribute('hidden')){
        mobileNav.removeAttribute('hidden');
      } else {
        mobileNav.setAttribute('hidden','');
      }
    });
  }

  // Close mobile nav on link click
  mobileNav && mobileNav.addEventListener('click', (e)=>{
    if(e.target.tagName === 'A'){
      mobileNav.setAttribute('hidden','');
      mobileToggle && mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // IntersectionObserver to reveal sections
  const sections = document.querySelectorAll('.section');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        // once in view, unobserve to save work
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.12});
  sections.forEach(s => io.observe(s));

  // Active nav link highlighting
  const header = document.querySelector('.site-header');
  const headerOffset = header ? header.offsetHeight : 80;
  const sectionMap = Array.from(document.querySelectorAll('main > section[id]')).map(s=>({id:s.id, el:s}));

  function onScroll(){
    const y = window.scrollY + headerOffset + 20;
    let current = sectionMap[0] ? sectionMap[0].id : '';
    for(const s of sectionMap){
      if(s.el.offsetTop <= y) current = s.id;
    }
    document.querySelectorAll('.nav a').forEach(a=>{
      a.classList.toggle('active', a.getAttribute('href') === '#'+current);
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // keyboard: allow Esc to close mobile nav
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      if(mobileNav && !mobileNav.hasAttribute('hidden')){
        mobileNav.setAttribute('hidden','');
        mobileToggle && mobileToggle.setAttribute('aria-expanded','false');
      }
    }
  });
})();