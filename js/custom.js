// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 50);
// });

// $(function() {
//   var headerMid = $(".header-mid");
//   $(window).scroll(function() {
//       var scroll = $(window).scrollTop();
  
//       if (scroll > 50) {
//           headerMid.removeClass('animate__fadeIn').addClass("animate__fadeInDown");
//       } else {
//           headerMid.removeClass("animate__fadeInDown").addClass('animate__fadeIn');
//       }
//   });
// });

$('.counter').counterUp({
  delay: 20,
  time: 1000,
  triggerOnce:true
});

$('#home-slider').owlCarousel({
  loop: true,
  margin: 10,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  mouseDrag: false,
  smartSpeed: 250,
  margin: 0,
  navText: [
    '<i class="far fa-chevron-left" aria-hidden="true"></i>',
    '<i class="far fa-chevron-right" aria-hidden="true"></i>'
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    575: {
      items: 1
    },
    767: {
      items: 1
    },
    991: {
      items: 1
    },
    1199: {
      items: 1
    },
    1399: {
      items: 1
    }
  }
});

// Your JavaScript code here
function createProgressBar(config) {
  var progressBar = new ProgressBar.Line(config.element, {
    strokeWidth: config.strokeWidth || 1,
    easing: config.easing || 'easeInOut',
    duration: config.duration || 1400,
    color: config.color || '#FFEA82',
    trailColor: config.trailColor || '#777',
    trailWidth: config.trailWidth || 0.1,
    svgStyle: config.svgStyle || { width: '100%', height: '100%' },
    text: config.text || {
      value: '0%', // Initial text value
      className: 'progressbar__label',
      style: {
        color: '#000',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        transform: { prefix: true, value: 'translate(-50%, -50%)' }
      }
    },
    step: config.step || function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + '%'); // Update text value
      bar.path.setAttribute('stroke', state.color);
    },
    duration: config.animationDuration || 2000,
    from: config.from || { color: '#FFEA82' },
    to: config.to || { color: '#ED6A5A' }
  });

  progressBar.animate(config.value || 0); // Animate progress to the specified value
}

var progressBars = [
{
element: '#progress',
strokeWidth: 5,
easing: 'easeInOut',
duration: 1400,
color: '#FFEA82',
trailColor: '#fff',
trailWidth: 5,
svgStyle: { width: '100%', height: '100%' },
text: {
  value: '0%',
  className: 'progressbar-label',
  // style: {
  //   color: '#fff',
  //   position: 'absolute',
  //   left: '50%',
  //   top: '50%',
  //   padding: 0,
  //   margin: 0,
  //   transform: { prefix: true, value: 'translate(-50%, -50%)' }
  // }
},
step: function(state, bar) {
  bar.setText(Math.round(bar.value() * 100) + '%'); // Update text value
  bar.path.setAttribute('stroke', state.color);
},
value: 0.7, // Specify the initial value
animationDuration: 2000,
from: { color: '#bda003' },
to: { color: '#bda003' }
  },
  {
    element: '#progress2',
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#EFEDED',
    trailWidth: 5,
    svgStyle: { width: '100%', height: '100%' },
    text: {
      value: '0%',
      className: 'progressbar-label',
      // style: {
      //   color: '#fff',
      //   position: 'absolute',
      //   left: '50%',
      //   top: '50%',
      //   padding: 0,
      //   margin: 0,
      //   transform: { prefix: true, value: 'translate(-50%, -50%)' }
      // }
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + '%'); // Update text value
      bar.path.setAttribute('stroke', state.color);
    },
    value: 0.7, // Specify the initial value
    animationDuration: 2000,
    from: { color: '#7A61A5' },
    to: { color: '#7A61A5' }
  },
  {
    element: '#progress3',
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#EFEDED',
    trailWidth: 5,
    svgStyle: { width: '100%', height: '100%' },
    text: {
      value: '0%',
      className: 'progressbar-label',
      // style: {
      //   color: '#fff',
      //   position: 'absolute',
      //   left: '50%',
      //   top: '50%',
      //   padding: 0,
      //   margin: 0,
      //   transform: { prefix: true, value: 'translate(-50%, -50%)' }
      // }
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + '%'); // Update text value
      bar.path.setAttribute('stroke', state.color);
    },
    value: 0.7, // Specify the initial value
    animationDuration: 2000,
    from: { color: '#7A61A5' },
    to: { color: '#7A61A5' }
  },
  {
    element: '#progress1',
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#EFEDED',
    trailWidth: 5,
    svgStyle: { width: '100%', height: '100%' },
    text: {
      value: '0%',
      className: 'progressbar-label',
      // style: {
      //   color: '#fff',
      //   position: 'absolute',
      //   left: '50%',
      //   top: '50%',
      //   padding: 0,
      //   margin: 0,
      //   transform: { prefix: true, value: 'translate(-50%, -50%)' }
      // }
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + '%'); // Update text value
      bar.path.setAttribute('stroke', state.color);
    },
    value: 0.7, // Specify the initial value
    animationDuration: 2000,
    from: { color: '#7A61A5' },
    to: { color: '#7A61A5' }
    }
];

progressBars.forEach(function(config) {
  createProgressBar(config);
});





