const btn = document.querySelector('.explore-btn');

btn.addEventListener('click', function(e) {
    let x = e.clientX - e.target.getBoundingClientRect().left;
    let y = e.clientY - e.target.getBoundingClientRect().top;

    let ripples = document.createElement('span');
    ripples.classList.add('ripple');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';

    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove();
    }, 600);
});