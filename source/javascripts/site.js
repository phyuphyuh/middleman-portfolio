// This is where it all goes :)

document.addEventListener('DOMContentLoaded', () => {
  const spans = Array.from(document.querySelectorAll('.span-text'));
  const bannerText = document.querySelector('.banner-text');
  const projects = document.getElementById('projects');

  const scrollSection = document.querySelector('.scroll-section');
  const scrollingDiv = document.getElementById('about');



  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const spanPositions = spans.map((span, index) => {
      const adjustedStart = index === 0 ? span.offsetTop - 300 : span.offsetTop;
      const adjustedEnd = index === 0 ? adjustedStart + 400 : span.offsetTop + 100;
      return { start: adjustedStart, end: adjustedEnd };
    });
    const projectsPosition = projects.offsetTop;


    spans.forEach((span, index) => {
      const { start, end } = spanPositions[index];

      if (scrollY >= start && scrollY < end) {
        span.classList.add('active');
      } else {
        span.classList.remove('active');
      }
    });

    const lastSpan = spans.length - 1;

    if (scrollY >= spanPositions[lastSpan].end && scrollY < projectsPosition) {
      bannerText.classList.add('active');
      bannerText.classList.remove('after');
    } else if ((scrollY >= projectsPosition)) {
      bannerText.classList.remove('active');
      bannerText.classList.add('after');
    } else {
      bannerText.classList.remove('active');
      bannerText.classList.remove('after');
    }

    if (scrollSection && scrollingDiv) {
      const { top, height } = scrollSection.getBoundingClientRect();
      const scrollPercentage = Math.min(Math.max(-top / height, 0), 1);

      const positionX = (1 - scrollPercentage * 2) * 200;
      scrollingDiv.style.left = `${positionX}%`;
    }



  });

});
