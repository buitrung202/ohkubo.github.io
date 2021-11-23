(function() {
    let slideID = 0;
    $('.container-btn').children().each(function() {
        $(this).click(function() {

            slideID = $(this).index()

            $('.slide').each(function() {
                $(this).index() == id ? $(this).show() : $(this).hide();

            });
        });
    });
    // 
    var timer = function() {

        interval = setInterval(function() {
            slideID == $('.slide').length - 1 ? slideID = 0 : slideID++;
            $('.slide').each(function() {
                $(this).index() == slideID ? $(this).show('slow') : $(this).hide("slow");
            });

        }, 7000);
    };
    timer();





    /**
     * mobile menu button
     * */
    const nav = document.querySelector('#nav');
    const menu = document.querySelector('#menu');
    const menuToggle = document.querySelector('.nav__toggle');
    let isMenuOpen = false;


    // TOGGLE MENU ACTIVE STATE
    menuToggle.addEventListener('click', e => {

        e.preventDefault();
        isMenuOpen = !isMenuOpen;

        // toggle a11y attributes and active class
        menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
        menu.hidden = !isMenuOpen;
        nav.classList.toggle('nav--open');


        $('.nav__menu').show();


        $('.service-mobile').html("");

    });


    // TRAP TAB INSIDE NAV WHEN OPEN
    nav.addEventListener('keydown', e => {
        // abort if menu isn't open or modifier keys are pressed
        if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
            return;
        }

        // listen for tab press and move focus
        // if we're on either end of the navigation
        const menuLinks = menu.querySelectorAll('.nav__link');
        if (e.keyCode === 9) {
            if (e.shiftKey) {
                if (document.activeElement === menuLinks[0]) {
                    menuToggle.focus();
                    e.preventDefault();
                }
            } else if (document.activeElement === menuToggle) {
                menuLinks[0].focus();
                e.preventDefault();
            }
        }
    });
    /*banner click*/

    $('.banner').click(function() {
        if ($('.wrap-header-service').css('z-index') == 999999) {
            $('.wrap-header-service').css({ "z-index": "999" });
            // nav.classList.toggle('nav--open');
        } else {
            $('.wrap-header-service').css({ "z-index": "999999" });
        }
        if (screen.width > 950) {

            $('.clm').toggle();
        } else {
            $('.service-mobile').html($('.panel_nav').html()).css({ "height": "50vh" });
            $('.clm_3').css({ "display": "flex" });
            $('.nav__menu').hide();
        }
    });

})();