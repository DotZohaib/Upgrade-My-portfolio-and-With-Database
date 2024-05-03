// Function to toggle the menu
let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function(e) {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-times');
});




function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show-menu');
  }
  
  // Function for smooth scrolling
  function smoothScrollToTarget(e) {
    e.preventDefault();
  
    const nav = document.querySelector('nav');
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
  
    window.scrollTo({
      top: targetElement.offsetTop - nav.clientHeight,
      behavior: 'smooth'
    });
  }
  
  // Function to handle click on service icon
  function toggleServiceInfo() {
    const servicesInfo = this.querySelector('.servicesinfo');
    servicesInfo.classList.toggle('show-servicesinfo');
  }
  
  // Function to handle form submission
  function handleFormSubmission(e) {
    e.preventDefault();
  
    const name = document.getElementById('Name').value;
    const number = document.getElementById('Number').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('text').value;
  
    // Handle form submission (you can send this data to a server or handle it as needed)
    console.log('Form submitted with the following data:');
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Clear form fields after submission
    document.getElementById('Name').value = '';
    document.getElementById('Number').value = '';
    document.getElementById('email').value = '';
    document.getElementById('text').value = '';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', function () {
      document.querySelector('body').classList.toggle('apply');
      this.classList.toggle('fa-xmark');
      toggleMenu();
    });
  
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(anchor => {
      anchor.addEventListener('click', smoothScrollToTarget);
    });
  
    const servicesBoxes = document.querySelectorAll('.servicesbox');
    servicesBoxes.forEach(box => {
      const servicesIcon = box.querySelector('.servicesicon');
      servicesIcon.addEventListener('click', toggleServiceInfo);
    });
  
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmission);
  });
  
