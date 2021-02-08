export default {
  mounted: el => {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        el => el.nodeName === 'IMG',
      );
      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 500);
        });
        imageElement.src = imageElement.dataset.url;
        imageElement.addEventListener('error', () => console.log('error'));
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: '0.25',
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window['IntersectionObserver']) {
      createObserver();
    } else {
      loadImage();
    }
  },
};