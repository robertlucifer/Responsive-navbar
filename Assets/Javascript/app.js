const navslide = ()=>{
    const nav_btn = document.querySelector('.menu-btn');
    const slide_panel = document.querySelector('.nav-bar-list');
    const nav_bar_links = document.querySelectorAll('.nav-bar-links');
   
nav_btn.addEventListener('click',()=>{
            //to toggle the nav bar//
        slide_panel.classList.toggle('nav-bar-list-active');
     
            //nav bar links Animation
        nav_bar_links.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = '';
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
        }
    });
        nav_btn.classList.toggle('animation');
    });
   
}


navslide();