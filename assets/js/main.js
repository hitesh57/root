(function() {
	"use strict";

    //Preloader
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM fully loaded and parsed');
        const getPreloaderId = document.getElementById('preloader');
        if (getPreloaderId) {
            console.log('Preloader element found!');
            // Delaying hiding to ensure it happens after DOM content is loaded
            setTimeout(function() {
                getPreloaderId.classList.add('preloader-hidden');
                console.log('Preloader hidden');
            }, 1000); // Delay by 1 second for smooth transition
        } else {
            console.log('Preloader element not found');
        }
    });

    window.onload = function(){

        //Header Sticky
        const getHeaderId = document.querySelector(".navbar-area");
        if (getHeaderId) {
            window.addEventListener('scroll', event => {
                const height = 150;
                const { scrollTop } = event.target.scrollingElement;
                document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
            });
        }

        // Back to Top
        let progressPath = document.getElementById("progress-path");
        let progressWrap = document.getElementById("progress-wrap");
        let pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.webkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.webkitTransition =
        "stroke-dashoffset 10ms linear";
        
        const onScollEvent = function (event) {
            let scroll = window.scrollY;
            let height = document.body.scrollHeight - window.innerHeight;
            let progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;

            let offset = 50;
                if (window.scrollY > offset) {
                progressWrap.classList.add("active-progress");
                } else {
                progressWrap.classList.remove("active-progress");
            }
        };

        onScollEvent();
            window.onscroll = onScollEvent;
            progressWrap.onclick = function (event) {
            window.scroll({ top: 0, behavior: "smooth" });
            return false;
        };
        
    };

    //Hero Slider
    var hero_sliderOne = new Swiper(".hero-slider-one", {
		loop: false,
		speed: 1500,
        slidesPerView: 1,
        fadeEffect: { crossFade: true },
        effect: "fade",
		spaceBetween: 25,
        autoHeight: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
        },
	});

    //Location Slider
	var location_slider = new Swiper(".location-slider-one", {
		loop: true,
		speed: 1500,
		spaceBetween: 24,
        navigation: {
            nextEl: ".location-next",
            prevEl: ".location-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1.5
            },
            992: {
                slidesPerView: 2.2
            },
            1200: {
                slidesPerView: 2.3
            },
            1300: {
                slidesPerView: 2.5
            },
            1400: {
                slidesPerView: 2.9
            },
            1600: {
                slidesPerView: 3.3,
                spaceBetween: 30,
            }
        }
	});
    var location_slider = new Swiper(".location-slider-two", {
		loop: true,
		speed: 1500,
        // autoplay: {
        //     delay: 5500,
        //     disableOnInteraction: true,
        // },
		spaceBetween: 24,
        navigation: {
            nextEl: ".location-next",
            prevEl: ".location-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1.8
            },
            992: {
                slidesPerView: 2.2
            },
            1200: {
                slidesPerView: 2.6
            },
            1300: {
                slidesPerView: 2.9
            },
            1400: {
                slidesPerView: 3.1
            },
            1600: {
                slidesPerView: 3.5,
                spaceBetween: 28,
            },
            1920: {
                slidesPerView: 3.7
            }
        }
	});

    //Testimonial Slider
	var testimonial_slider = new Swiper(".testimonial-slider-one", {
		loop: false,
		speed: 1500,
        slidesPerView: 1,
		spaceBetween: 0,
        autoHeight: true,
        fadeEffect: { crossFade: true },
        effect: "fade",
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        }
	});
	var testimonial_slider_two = new Swiper(".testimonial-slider-two", {
		loop: true,
		speed: 1500,
        slidesPerView: 1,
		spaceBetween: 24,
        autoHeight: true,
        autoplay: {
            delay: 300500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1.3
            },
            1200: {
                slidesPerView: 1.6
            },
            1400: {
                slidesPerView: 2,
            },
            1600: {
                slidesPerView: 2,
            }
        }
	});
	var testimonial_slider_four = new Swiper(".testimonial-slider-four", {
		loop: false,
		speed: 1500,
        slidesPerView: 1,
		spaceBetween: 0,
        autoHeight: true,
        fadeEffect: { crossFade: true },
        effect: "fade",
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        }
	});

    //Categroy Slider
	var hospital_slider_one = new Swiper(".category-slider-one", {
		loop: true,
		speed: 1500,
        slidesPerView: 1,
		spaceBetween: 24,
        autoHeight: true,
        navigation: {
            nextEl: ".category-next",
            prevEl: ".category-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 23
            },
            1600: {
                slidesPerView: 6,
                spaceBetween: 28
            }
        }
	});

    //Hospital Slider
	var hospital_slider_one = new Swiper(".hospital-slider-one", {
		loop: false,
		speed: 1500,
        slidesPerView: 1,
		spaceBetween: 24,
        autoHeight: true,
        navigation: {
            nextEl: ".hospital-next",
            prevEl: ".hospital-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1.7
            },
            1200: {
                slidesPerView: 4
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 23
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
	});
    var hospital_slider_two = new Swiper(".hospital-slider-two", {
		loop: false,
		speed: 1500,
        slidesPerView: 1,
		spaceBetween: 24,
        autoHeight: true,
        navigation: {
            nextEl: ".hospital-next",
            prevEl: ".hospital-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 23
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
	});

    //Doctor Slider
	var doctor_slider_one = new Swiper(".doctor-slider-one", {
		loop: true,
		speed: 1500,
        slidesPerView: 1,
		spaceBetween: 24,
        autoHeight: true,
        navigation: {
            nextEl: ".doctor-next",
            prevEl: ".doctor-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 23

            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
	});

    //Brand Slider
	var brand_slider = new Swiper(".brand-slider", {
		loop: false,
		speed: 15000,
		freemode: false,
		spaceBetween: 45,
		simulateTouch: false,
		autoplay: {
			delay: 1,
			disableOnInteraction: false
		},
        breakpoints:{
            0: {
                slidesPerView: 1.8
            },
            576: {
                slidesPerView: 2.8
            },
            768: {
                slidesPerView: 3.5
            },
            992: {
                slidesPerView: 4.5
            },
            1200: {
                slidesPerView: 5.5
            },
            1400: {
                slidesPerView: 6
            }
        }
	});

    // Counter Js
    if ("IntersectionObserver" in window) {
        let counterObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                let counter = entry.target;
                let target = parseInt(counter.innerText);
                let step = target / 200;
                let current = 0;
                let timer = setInterval(function () {
                    current += step;
                    counter.innerText = Math.floor(current);
                    if (parseInt(counter.innerText) >= target) {
                    clearInterval(timer);
                    }
                }, 10);
                counterObserver.unobserve(counter);
                }
            });
        });
        let counters = document.querySelectorAll(".counter");
            counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }

    //Gsap Mousemove Animation
    document.addEventListener("mousemove", mouseMoveFunc);
    let moveonmouse = gsap.utils.toArray(".moveContent");

    function mouseMoveFunc(e) {
        moveonmouse.forEach((circle, index) => {
            const depth = 65;
            const moveX = (e.pageX - window.innerWidth / 2) / depth;
            const moveY = (e.pageY - window.innerHeight / 2) / depth;
            index ++

            gsap.to(circle, {
            x: moveX * index,
            y: moveY * index,
            });
        });
    }

    //Title Animation With SplitText 
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
        }
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" })
    tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });

    //Text Reveal Animation
    window.addEventListener("load", function() {
        gsap.registerPlugin(CustomEase);
    
        // Wrap every letter
        const textRevealElements = document.querySelectorAll(".reveal-text");
    
        textRevealElements.forEach((element) => {
            element.innerHTML = element.textContent.replace(
                /([-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]+)/g,
                '<div class="word">$1</div>'
            );
    
            let words = element.querySelectorAll(".word");
            words.forEach((word) => {
                word.innerHTML = word.textContent.replace(
                    /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,
                    "<div class='perspective'><div class='letter'><div>$&</div></div></div>"
                );
            });
    
            const letters = element.querySelectorAll(".letter");
    
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    toggleActions: "restart none none reset"
                }
            });
            tl.set(element, { autoAlpha: 1 });
            tl.fromTo(
                letters,
                0.6, {
                    transformOrigin: "center",
                    rotationY: 90,
                    x: 30
                }, {
                    rotationY: 0.1,
                    x: 0,
                    stagger: 0.025,
                    ease: CustomEase.create("custom", "M0,0 C0.425,0.005 0,1 1,1 ")
                }
            );
        });
    });

    // AOS js
    AOS.init({
        startEvent: 'load'
    });

    // Dashboard Js
    var button = document.querySelector('.db-burger-menu');
    var buttonTwo = document.querySelector('.db-mobile-menu');
    var body = document.querySelector('body');
    if (button) {
        button.addEventListener('click', function() {
            body.classList.toggle('minimized');
            button.classList.toggle('active');
        });
    }
    if (buttonTwo) {
        buttonTwo.addEventListener('click', function() {
            body.classList.toggle('minimized');
            buttonTwo.classList.toggle('active');
        });
    }

    //Language Selector
    const selectedLanguage = document.getElementById('selected-language');
    const dropdown = document.getElementById('dropdown');

    // Only proceed if both elements exist
    if (selectedLanguage && dropdown) {
        // Add event listener for toggling the dropdown
        selectedLanguage.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });

        // Add event listener for dropdown item selection
        dropdown.addEventListener('click', (event) => {
            const item = event.target.closest('.dropdown-item');
            if (!item) return;

            const lang = item.dataset.lang;
            const flag = item.dataset.flag;
            const name = item.querySelector('span + span').textContent;

            // Update the selected language and flag
            selectedLanguage.querySelector('.flag-container img').src = flag;
            selectedLanguage.querySelector('.selected-language span:last-child').textContent = name;

            // Hide the dropdown
            dropdown.style.display = 'none';
            console.log(`Language selected: ${lang}`);
        });

        // Close the dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.language-selector')) {
            dropdown.style.display = 'none';
            }
        });
    } else {}


    //Sidebar Dropdown Menu
    const menuItems = document.querySelectorAll('.menu-item');
    if (menuItems.length > 0) {
        // Loop through each menu item to add event listeners
        menuItems.forEach(item => {
            const parent = item.querySelector('.parent');
            const dropdown = item.querySelector('.dropdown');

            // When a parent item is clicked
            parent.addEventListener('click', () => {
            // If the item has a dropdown
            if (dropdown) {
                // Close all dropdowns immediately by removing 'active' class
                menuItems.forEach(otherItem => {
                const otherDropdown = otherItem.querySelector('.dropdown');
                if (otherItem !== item) {
                    // Remove active class from other items
                    otherItem.classList.remove('active');
                    // Reset max-height to 0 immediately so that it's ready for the next opening
                    if (otherDropdown) {
                    otherDropdown.style.maxHeight = 0;
                    }
                }
                });

                // If the current item isn't already active, we open it, else we close it
                const currentDropdown = item.querySelector('.dropdown');
                if (!item.classList.contains('active')) {
                item.classList.add('active');
                currentDropdown.style.maxHeight = currentDropdown.scrollHeight + "px";  // Set max-height based on actual content height
                } else {
                item.classList.remove('active');
                currentDropdown.style.maxHeight = 0;  // Close the dropdown immediately
                }
            }
            // If it doesn't have a dropdown, just handle it as a normal click (e.g., navigation or action)
            else {
                console.log(`${parent.textContent} clicked! No dropdown.`);
            }
            });
        });
    }

})();

    //Custom Cursor
    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor-inner');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function(){
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function(){
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
    });

    a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    })
try {

    // function to set a given theme/color-scheme
    function setTheme(themeName) {
        localStorage.setItem('hinton_theme', themeName);
        document.documentElement.className = themeName;
    }
    // function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('hinton_theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }
    // Immediately invoked function to set the theme on initial load
    (function () {
        if (localStorage.getItem('hinton_theme') === 'theme-dark') {
            setTheme('theme-dark');
            document.querySelector('.slider-btn').checked = false;
        } else {
            setTheme('theme-light');
        document.querySelector('.slider-btn').checked = true;
        }
    })();

} catch (err) {}