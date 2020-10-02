const toggleDropDown = () => {
    let navbarToggle = document.getElementById('nav-toggle');

    if (navbarToggle.className === 'topnav'){
        navbarToggle.className += ' responsive';
    }else{
        navbarToggle.className = 'topnav';
    }
}

$(window).on('resize load', function() {
    if(window.innerWidth <= 992) {
        const navbar = document.getElementsByTagName('nav');
        navbar.className += 'sticky-top';
    }
});

//the medium breakpoint
/*
const toggleStickyNavbar = () => {
    if(window.innerWidth <= 992) {
        const navbar = document.getElementsByTagName('nav');
        navbar.className += 'sticky-top';
    }
}
toggleStickyNavbar();*/
