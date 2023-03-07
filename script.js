let home = document.getElementById('home');
let us = document.getElementById('us');
let articles = document.getElementById('articles');
let contact = document.getElementById('contact');

let homeSection = document.getElementById('home-section');
let usSection = document.getElementById('us-section');
let articlesSection = document.getElementById('articles-section');
let contactSection = document.getElementById('contact-section');

home.addEventListener('click', function() {
  homeSection.classList.add('active');
  usSection.classList.remove('active');
  articlesSection.classList.remove('active');
  contactSection.classList.remove('active');
});

us.addEventListener('click', function() {
  homeSection.classList.remove('active');
  usSection.classList.add('active');
  articlesSection.classList.remove('active');
  contactSection.classList.remove('active');
});

articles.addEventListener('click', function() {
  homeSection.classList.remove('active');
  usSection.classList.remove('active');
  articlesSection.classList.add('active');
  contactSection.classList.remove('active');
});

contact.addEventListener('click', function() {
  homeSection.classList.remove('active');
  usSection.classList.remove('active');
  articlesSection.classList.remove('active');
  contactSection.classList.add('active');
});

let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
let text = document.getElementById('text');

setInterval(() => {
  let firstColor = colors[Math.floor(Math.random() * colors.length)];
  let secondColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`;

  if(isColorDark(firstColor) && isColorDark(secondColor)){
    text.style.color = "#ffffff";
  }else{
    text.style.color = "#000000";
  }
}, 1000);

function isColorDark(color) {
    var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(color);
    return (match[1] & 255)
         + (match[2] & 255)
         + (match[3] & 255)
         < 3 * 256 / 2;
}