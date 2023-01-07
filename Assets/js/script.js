const navSlide = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.sidebar li');


    lines.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link,index) => {
         if (link.style.animation) {
            link.style.animation = '';
         } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
 
 //list animation
 lines.classList.toggle('toggle');

});

}


navSlide();