document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('fade-in');
});


document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    
    if (href && href.includes('.html')) {
      e.preventDefault();
      document.body.classList.add('fade-out');
      
      setTimeout(() => {
        window.location.href = href;
      }, 400); 
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const imageWrappers = document.querySelectorAll('.image-wrapper');
  
  imageWrappers.forEach(wrapper => {
    const overlayText = wrapper.querySelector('.overlay-text');
    
    wrapper.addEventListener('mouseenter', function() {
      overlayText.style.opacity = '1';
    });
    
    wrapper.addEventListener('mouseleave', function() {
      overlayText.style.opacity = '0';
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  console.log('Script loaded');
  
  const imageWrappers = document.querySelectorAll('.image-wrapper');
  console.log('Found ' + imageWrappers.length + ' image wrappers');
  
  imageWrappers.forEach(function(wrapper) {
    const overlayText = wrapper.querySelector('.overlay-text');
    
    
    wrapper.addEventListener('mouseenter', function() {
      if (overlayText) {
        overlayText.style.opacity = '1';
      }
    });
    
    wrapper.addEventListener('mouseleave', function() {
      if (overlayText) {
        overlayText.style.opacity = '0';
      }
    });
    
    
    wrapper.addEventListener('click', function() {
      const link = this.getAttribute('data-link');
      console.log('Clicked! Navigating to: ' + link);
      if (link) {
        window.location.href = link;
      }
    });
    
  
    wrapper.style.cursor = 'pointer';
  });
});

window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Typewriter effect
const text = "Front End Devloper,\nProduct & UI/UX\nDesigner";
const typewriterElement = document.querySelector('.typewriter'); // Add this class to your h1
let index = 0;

