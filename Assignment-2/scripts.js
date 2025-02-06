document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.querySelector('.cta-button');
  
    ctaButton.addEventListener('mouseover', function () {
      ctaButton.style.backgroundColor = '#8d4d33';
      ctaButton.style.transform = 'scale(1.05)';
    });
  
    ctaButton.addEventListener('mouseout', function () {
      ctaButton.style.backgroundColor = '#b5835a';
      ctaButton.style.transform = 'scale(1)';
    });
  
    ctaButton.addEventListener('click', function () {
      alert('Welcome to Brewed Awakening! Check out our delicious menu.');
    });
  });
  