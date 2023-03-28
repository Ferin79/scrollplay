export const pageScrollScript = (duration: number) => {
  return `
  function animateScroll(duration, easing) {
    const start = window.pageYOffset;
    const distance = document.body.scrollHeight - start;
    const startTime = performance.now();
  
    function ease(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  
    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const scrollPosition = start + distance * ease(elapsedTime / duration);
  
      window.scrollTo(0, scrollPosition);
  
      if (elapsedTime < duration) {
        requestAnimationFrame(step);
      } else {
        const completeDiv = document.createElement('div');
        completeDiv.id = 'scrollplay-complete';
        document.body.appendChild(completeDiv);
      }
    }
  
    requestAnimationFrame(step);
  }
  
  animateScroll(${duration}, "linear");
  
`;
};
