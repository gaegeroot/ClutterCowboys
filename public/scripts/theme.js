'use strict';

var theme = {
    /**
     * Theme's components/functions list
     * Comment out or delete the unnecessary component.
     * Some components have dependencies (plugins).
     * Do not forget to remove dependency from src/js/vendor/ and recompile.
     */
    init: function () {
        theme.costCalculator();
        theme.stickyHeader();
        theme.anchorSmoothScroll();
        theme.svgInject();
        theme.backgroundImage();
        theme.backgroundImageMobile();
        theme.scrollCue();
        theme.pageProgress();
        theme.offCanvas();
        theme.isotope();
        theme.swiperSlider();
        theme.formHandler();
    },

    /**
     * Sticky Header
     * Enables sticky behavior on navbar on page scroll
     * Requires assets/js/vendor/headhesive.min.js
    */
    stickyHeader: () => {
        var navbar = document.querySelector(".navbar");
        if (navbar == null) return;
        var options = {
            offset: 350,
            offsetSide: 'top',
            classes: {
                clone: 'navbar-clone fixed',
                stick: 'navbar-stick',
                unstick: 'navbar-unstick',
            },
            onStick: function () {
                var navbarClonedClass = this.clonedElem.classList;
                if (navbarClonedClass.contains('transparent') && navbarClonedClass.contains('navbar-dark')) {
                    this.clonedElem.className = this.clonedElem.className.replace("navbar-dark", "navbar-light");
                }
            }
        };
        var banner = new Headhesive('.navbar', options);
    },
    /**
     * Anchor Smooth Scroll
     * Adds smooth scroll animation to links with .scroll class
     * Requires assets/js/vendor/smoothscroll.js
     */
    anchorSmoothScroll: () => {
        let paddingTop = 130;
        const links = document.querySelectorAll(".scroll");
        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }
        function clickHandler(e) {
            e.preventDefault();
            this.blur();
            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop - paddingTop;
            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    },
    /**
     * SVGInject
     * Replaces an img element with an inline SVG so you can apply colors to your SVGs
     * Requires assets/js/vendor/svg-inject.min.js
     */
    svgInject: () => {
        SVGInject.setOptions({
            onFail: function (img, svg) {
                img.classList.remove('svg-inject');
            }
        });
        document.addEventListener('DOMContentLoaded', function () {
            SVGInject(document.querySelectorAll('img.svg-inject'), {
                useCache: true
            });
        });
    },
    /**
     * Background Image
     * Adds a background image link via data attribute "data-image-src"
     */
    backgroundImage: () => {
        var bg = document.querySelectorAll(".bg-image");
        for (var i = 0; i < bg.length; i++) {
            var url = bg[i].getAttribute('data-image-src');
            bg[i].style.backgroundImage = "url('" + url + "')";
        }
    },
    /**
     * Background Image Mobile
     * Adds .mobile class to background images on mobile devices for styling purposes
     */
    backgroundImageMobile: () => {
        var isMobile = (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) ? true : false;
        if (isMobile) {
            document.querySelectorAll(".image-wrapper").forEach(e => {
                e.classList.add("mobile")
            })
        }
    },
    /**
     * scrollCue.js
     * Enables showing elements by scrolling
     * Requires assets/js/vendor/scrollCue.min.js
     */
    scrollCue: () => {
        scrollCue.init({
            interval: -400,
            duration: 700,
            percentage: 0.8
        });
        scrollCue.update();
    },
    /**
     * Page Progress
     * Shows page progress on the bottom right corner of pages
     */
    pageProgress: () => {
        var progressWrap = document.querySelector('.progress-wrap');
        if (progressWrap != null) {
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            var offset = 50;
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            window.addEventListener("scroll", function (event) {
                var scroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
                var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollElementPos >= offset) {
                    progressWrap.classList.add("active-progress")
                } else {
                    progressWrap.classList.remove("active-progress")
                }
            });
            progressWrap.addEventListener('click', function (e) {
                e.preventDefault();
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        }
    },
    costCalculator: () => {
        let pileNumberContainer = document.querySelector("#pile_number");

        if (pileNumberContainer) {
            let pileNumber = pileNumberContainer.textContent,
                decreaser = document.querySelector("#decrease_pile"),
                increaser = document.querySelector("#increase_pile"),
                lowerEstimate = document.querySelector("#lower_estimate"),
                upperEstimate = document.querySelector("#upper_estimate");

            decreaser.addEventListener('click', () => {
                if (pileNumber > 2) {
                    processEstimate(--pileNumber);
                }
            })

            increaser.addEventListener('click', () => {
                processEstimate(++pileNumber);
            })

            function processEstimate(pileNumber) {
                pileNumberContainer.innerText = pileNumber;
                let lowerEstimateNumber = Math.round(pileNumber < 5 ? ((pileNumber * 1.5) - 1) * 33 < 120 ? 120 : ((pileNumber * 1.5) - 1) * 33 : ((pileNumber * 1.5) - 2) * 33);
                let upperEstimateNumber = Math.round(pileNumber < 5 ? ((pileNumber * 1.5) + 2) * 33 : ((pileNumber * 1.5) + 2) * 33);
                lowerEstimate.innerText = `\$${lowerEstimateNumber}`;
                upperEstimate.innerText = `\$${upperEstimateNumber}`;
            }
        }


    },
    /**
     * Offcanvas
     * Enables offcanvas-nav, closes offcanvas on anchor clicks, focuses on input in search offcanvas
     */
    offCanvas: () => {
        var navbar = document.querySelector(".navbar");
        if (navbar == null) return;
        const navOffCanvasBtn = document.querySelectorAll(".offcanvas-nav-btn");
        const navOffCanvas = document.querySelector('.navbar:not(.navbar-clone) .offcanvas-nav');
        if (navOffCanvas) {
            const bsOffCanvas = new bootstrap.Offcanvas(navOffCanvas, { scroll: true });
            const scrollLink = document.querySelectorAll('.onepage .navbar li a.scroll');
            const searchOffcanvas = document.getElementById('offcanvas-search');
            navOffCanvasBtn.forEach(e => {
                e.addEventListener('click', event => {
                    bsOffCanvas.show();
                })
            });
            scrollLink.forEach(e => {
                e.addEventListener('click', event => {
                    bsOffCanvas.hide();
                })
            });
            if (searchOffcanvas != null) {
                searchOffcanvas.addEventListener('shown.bs.offcanvas', function () {
                    document.getElementById("search-form").focus();
                });
            }
        }
    },
    /**
     * Isotope
     * Enables isotope grid layout and filtering
     * Requires assets/js/vendor/isotope.pkgd.min.js
     * Requires assets/js/vendor/imagesloaded.pkgd.min.js
     */
    isotope: () => {
        var grids = document.querySelectorAll('.grid');
        if (grids != null) {
            grids.forEach(g => {
                var grid = g.querySelector('.isotope');
                var filtersElem = g.querySelector('.isotope-filter');
                var buttonGroups = g.querySelectorAll('.isotope-filter');
                var iso = new Isotope(grid, {
                    itemSelector: '.item',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: grid.offsetWidth / 12
                    },
                    percentPosition: true,
                    transitionDuration: '0.7s'
                });
                imagesLoaded(grid).on("progress", function () {
                    iso.layout({
                        masonry: {
                            columnWidth: grid.offsetWidth / 12
                        }
                    })
                }),
                    window.addEventListener("resize", function () {
                        iso.arrange({
                            masonry: {
                                columnWidth: grid.offsetWidth / 12
                            }
                        });
                    }, true);
                if (filtersElem != null) {
                    filtersElem.addEventListener('click', function (event) {
                        if (!matchesSelector(event.target, '.filter-item')) {
                            return;
                        }
                        var filterValue = event.target.getAttribute('data-filter');
                        iso.arrange({
                            filter: filterValue
                        });
                    });
                    for (var i = 0, len = buttonGroups.length; i < len; i++) {
                        var buttonGroup = buttonGroups[i];
                        buttonGroup.addEventListener('click', function (event) {
                            if (!matchesSelector(event.target, '.filter-item')) {
                                return;
                            }
                            buttonGroup.querySelector('.active').classList.remove('active');
                            event.target.classList.add('active');
                        });
                    }
                }
            });
        }
    },
    /**
     * Swiper Slider
     * Enables carousels and sliders
     * Requires assets/js/vendor/swiper-bundle.min.js
     */
    swiperSlider: function () {
        var carousel = document.querySelectorAll('.swiper-container');
        for (var i = 0; i < carousel.length; i++) {
            var slider1 = carousel[i];
            slider1.classList.add('swiper-container-' + i);
            var controls = document.createElement('div');
            controls.className = "swiper-controls";
            var pagi = document.createElement('div');
            pagi.className = "swiper-pagination";
            var navi = document.createElement('div');
            navi.className = "swiper-navigation";
            var prev = document.createElement('div');
            prev.className = "swiper-button swiper-button-prev";
            var next = document.createElement('div');
            next.className = "swiper-button swiper-button-next";
            slider1.appendChild(controls);
            controls.appendChild(navi);
            navi.appendChild(prev);
            navi.appendChild(next);
            controls.appendChild(pagi);
            var sliderEffect = slider1.getAttribute('data-effect') ? slider1.getAttribute('data-effect') : 'slide';
            if (slider1.getAttribute('data-items-auto') === 'true') {
                var slidesPerViewInit = "auto";
                var breakpointsInit = null;
            } else {
                var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 3; // items in all devices
                var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : 1; // start - 575
                var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsXs); // 576 - 767
                var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsSm); // 768 - 991
                var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsMd); // 992 - 1199
                var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItemsLg); // 1200 - end
                var sliderItemsXxl = slider1.getAttribute('data-items-xxl') ? slider1.getAttribute('data-items-xxl') : Number(sliderItemsXl); // 1500 - end
                var slidesPerViewInit = sliderItems;
                var breakpointsInit = {
                    0: {
                        slidesPerView: Number(sliderItemsXs)
                    },
                    576: {
                        slidesPerView: Number(sliderItemsSm)
                    },
                    768: {
                        slidesPerView: Number(sliderItemsMd)
                    },
                    992: {
                        slidesPerView: Number(sliderItemsLg)
                    },
                    1200: {
                        slidesPerView: Number(sliderItemsXl)
                    },
                    1400: {
                        slidesPerView: Number(sliderItemsXxl)
                    }
                }
            }
            var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
            var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false';
            var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 5000;
            var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true';
            var sliderResizeUpdate = slider1.getAttribute('data-resizeupdate') !== 'false';
            var sliderAllowTouchMove = slider1.getAttribute('data-drag') !== 'false';
            var sliderReverseDirection = slider1.getAttribute('data-reverse') === 'true';
            var sliderMargin = slider1.getAttribute('data-margin') ? slider1.getAttribute('data-margin') : 30;
            var sliderLoop = slider1.getAttribute('data-loop') === 'true';
            var sliderCentered = slider1.getAttribute('data-centered') === 'true';
            var swiper = slider1.querySelector('.swiper:not(.swiper-thumbs)');
            var swiperTh = slider1.querySelector('.swiper-thumbs');
            var sliderTh = new Swiper(swiperTh, {
                slidesPerView: 5,
                spaceBetween: 10,
                loop: false,
                threshold: 2,
                slideToClickedSlide: true
            });
            if (slider1.getAttribute('data-thumbs') === 'true') {
                var thumbsInit = sliderTh;
                var swiperMain = document.createElement('div');
                swiperMain.className = "swiper-main";
                swiper.parentNode.insertBefore(swiperMain, swiper);
                swiperMain.appendChild(swiper);
                slider1.removeChild(controls);
                swiperMain.appendChild(controls);
            } else {
                var thumbsInit = null;
            }
            var slider = new Swiper(swiper, {
                on: {
                    beforeInit: function () {
                        if (slider1.getAttribute('data-nav') !== 'true' && slider1.getAttribute('data-dots') !== 'true') {
                            controls.remove();
                        }
                        if (slider1.getAttribute('data-dots') !== 'true') {
                            pagi.remove();
                        }
                        if (slider1.getAttribute('data-nav') !== 'true') {
                            navi.remove();
                        }
                    },
                    init: function () {
                        if (slider1.getAttribute('data-autoplay') !== 'true') {
                            this.autoplay.stop();
                        }
                        this.update();
                    }
                },
                autoplay: {
                    delay: sliderAutoPlayTime,
                    disableOnInteraction: false,
                    reverseDirection: sliderReverseDirection,
                    pauseOnMouseEnter: false
                },
                allowTouchMove: sliderAllowTouchMove,
                speed: parseInt(sliderSpeed),
                slidesPerView: slidesPerViewInit,
                loop: sliderLoop,
                centeredSlides: sliderCentered,
                spaceBetween: Number(sliderMargin),
                effect: sliderEffect,
                autoHeight: sliderAutoHeight,
                grabCursor: true,
                resizeObserver: false,
                updateOnWindowResize: sliderResizeUpdate,
                breakpoints: breakpointsInit,
                pagination: {
                    el: carousel[i].querySelector('.swiper-pagination'),
                    clickable: true
                },
                navigation: {
                    prevEl: slider1.querySelector('.swiper-button-prev'),
                    nextEl: slider1.querySelector('.swiper-button-next'),
                },
                thumbs: {
                    swiper: thumbsInit,
                },
            });
        }
    },
    formHandler: function () {
        let contactForm = document.getElementById('contact-form');

        if (contactForm) {
            contactForm.onsubmit = async function (event) {
                event.preventDefault();

                var formData = new FormData(contactForm);
                var jsonData = await JSON.stringify(Object.fromEntries(formData))
                var xhr = new XMLHttpRequest();
                xhr.open("POST", contactForm.action, true);
                xhr.setRequestHeader('Content-Type','application/json');
                console.log(jsonData)
                xhr.send(jsonData);
                xhr.onload = function (e) {
                    if (xhr.status === 200) {
                        console.log("success!")
                    } else {
                        var response = JSON.parse(xhr.response);
                        console.log(response.error)
                    }
                };
            }
        }
    }
}
theme.init();