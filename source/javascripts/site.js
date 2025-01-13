// This is where it all goes :)

document.addEventListener('DOMContentLoaded', () => {
  const span1 = document.getElementById('span1');
  const span2 = document.getElementById('span2');
  const span3 = document.getElementById('span3');
  const bannerText = document.querySelector('.banner-text');

  const scrollSection = document.querySelector(".scroll-section");
  const scrollingDiv = document.querySelector("#about");

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 0 && scrollY < 100) {
      span1.classList.add('active');
      span2.classList.remove('active');
      span3.classList.remove('active');
      bannerText.classList.remove('active');
    } else if (scrollY >= 100 && scrollY < 250) {
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

    if (scrollSection && scrollingDiv) {
      const { top, height } = scrollSection.getBoundingClientRect();
      const scrollPercentage = Math.min(Math.max(-top / height, 0), 1);

      const positionX = (1 - scrollPercentage * 2) * 100;
      scrollingDiv.style.left = `${positionX}%`;
    }
  });

});
