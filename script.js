document.querySelector('.cta-button').addEventListener('click', function(){
  this.textContent = 'Скачивание началось!';
  this.classList.add('fade-in');
});

const heroTitle = document.querySelector('#hero h2');
heroTitle.addEventListener('mouseover', function(){
  this.style.color = '#0056b3';
});
heroTitle.addEventListener('mouseout', function(){
  this.style.color = '#007bff';
});
