// This is where it all goes :)

document.addEventListener('DOMContentLoaded', () => {
  const span1 = document.getElementById('span1');
  const span2 = document.getElementById('span2');
  const span3 = document.getElementById('span3');
  const bannerText = document.querySelector('.banner-text');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 0 && scrollY < 150) {
      span1.classList.add('active');
      span2.classList.remove('active');
      span3.classList.remove('active');
      bannerText.classList.remove('active');
    } else if (scrollY >= 150 && scrollY < 250) {
      span1.classList.remove('active');
      span2.classList.add('active');
      span3.classList.remove('active');
      bannerText.classList.remove('active');
    } else if (scrollY >= 250 && scrollY < 350) {
      span1.classList.remove('active');
      span2.classList.remove('active');
      span3.classList.add('active');
      bannerText.classList.remove('active');
    } else if (scrollY > 350) {
      // span1.classList.remove('active');
      // span2.classList.remove('active');
      // span3.classList.remove('active');
      bannerText.classList.add('active');
    }
  });
});
