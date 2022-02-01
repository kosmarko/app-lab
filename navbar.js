let scrollpos = window.scrollY;
const header = document.querySelector('.header');
const navMob = document.querySelector('.nav-mobile');
const toggleButton = document.querySelector('.toggle-btn');
const mobileNav = document.querySelector('.visiable');
const backdrop = document.querySelector('.backdrop');

function add_class_on_scroll() {
  header.classList.add('fixed_nav');
}

function remove_class_on_scroll() {
  header.classList.remove('fixed_nav');
}

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= 90) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
  console.log(scrollpos);
});

function closeModal() {
  backdrop.classList.remove('open');
  setTimeout(function () {
    backdrop.style.display = 'none';
  }, 200);
}

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  closeModal();
});

toggleButton.addEventListener('click', function () {
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(function () {
    backdrop.classList.add('open');
  }, 10);
});

console.log(scrollpos);

// FAQ paneli
let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    // Naizmenicno zatvaranje ali nece da zatvori current panel
    // let elems = document.getElementsByClassName('accordion');
    // for (let it of elems) {
    //   it.classList.remove('active');
    //   it.nextElementSibling.style.maxHeight = null;
    // }
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// SLICK SLAJDER
let gadgetCarousel = $('.carousel');

gadgetCarousel.each(function () {
  if ($(this).is('.slider')) {
    $(this).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrow: true,
      autoplay: true,
      autoplaSpeed: 2000,
      infinite: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  } else if ($(this).is('.slider2')) {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      autoplay: true,
      autoplaSpeed: 2000,
      infinite: true,
      prevArrow: '.arrow_left',
      nextArrow: '.arrow_right',
      // prevArrow:false,
      // nextArrow:false
    });
  } else {
    $(this).slick();
  }
});
