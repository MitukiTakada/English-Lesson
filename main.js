const btn = document.querySelector('.humberger-menu');
btn.addEventListener('click', function() {
  document.querySelector('#navi').classList.toggle('active');
  document.querySelector('.humberger-menu').classList.toggle('active');
});
const reason = document.querySelector('.reason-contents');
const io = new IntersectionObserver((entries) => {
  for(const e of entries) {
    if(e.isIntersecting) {
      reason.classList.add('inview');
      io.unobserve(e.target);
    }
    else {
    }
  }
},);
io.observe(reason);


const balloon1 = document.querySelector('.voice-1');
const observer1 = new IntersectionObserver((entries) => {
  for(const e of entries) {
    if(e.isIntersecting) {
      balloon1.classList.add('inview-balloon');
      observer1.unobserve(e.target);
    } else {
    }
  }
});
observer1.observe(balloon1);

const balloon2 = document.querySelector('.voice-2');
const observer2 = new IntersectionObserver((entries) => {
  for(const e of entries) {
    if(e.isIntersecting) {
      balloon2.classList.add('inview-balloon');
      observer3.unobserve(e.target);
    } else{
    }
  }
});
observer2.observe(balloon2);

const balloon3 = document.querySelector('.voice-3');
const observer3 = new IntersectionObserver((entries) => {
  for(const e of entries) {
    if(e.isIntersecting) {
      balloon3.classList.add('inview-balloon');
      observer3.unobserve(e.target);
    } else {
    }
  }
});
observer3.observe(balloon3);
