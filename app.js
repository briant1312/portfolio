function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight + 100 || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


const allLetters = document.querySelectorAll('.word-container span')
document.addEventListener('scroll', () => {
    if(isInViewport(document.querySelector('.terminal'))) {
        for(let i = 0; i < allLetters.length; i++) {
            setTimeout(() => {
              allLetters[i].classList.add('appear')
            }, 120 * i + 400);
          }
          setTimeout(() => {
            document.querySelector('.content').classList.add('appear')
          }, 250 * allLetters.length);
    }
})