// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// gawing x and hamburger menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}



// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      // active navbar links
      navLinks.forEach(links => {
        // aalisin ang active link
        links.classList.remove('active');
        // lipat sa iba ang active
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // sticky navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

function messageSent() {
  alert("I got your message!!")
  return;
}

function agree(){
  alert("Oh dba! Sabi ko sayo tama ako eh.")
  return;
}

function notAgree(){
  alert("Weh! Di mo naman naaalala eh. HAHAHA chz")
  return;
}

function love(){
  alert("I love you more my bebbi!")
  return;
}

function miss(){
  alert("I miss you more!!!")
}


