
function swiperSlider(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }
      });
}
swiperSlider();

function swiperSlider2(){
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        }
      });
}
swiperSlider2();

function swiperSlider3(){
    var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1000,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
          breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }
      });
}
swiperSlider3();

function swiperSlider4(){
    var swiper = new Swiper(".mySwiper4", {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
          breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
      });
}
swiperSlider4();

// function signUpForm() {
//     const formOverlay = document.querySelector(".form-overlay");
//     const openForms = document.querySelectorAll(".signup_btn");
//     const closeForm = document.querySelector(".close-btn");
//     const submitBtn = document.querySelector(".submit_btn");
    
//     // Open form for each signup_btn
//     openForms.forEach(btn => {
//         btn.addEventListener('click', () => {
//             formOverlay.classList.add('active');
//             document.body.classList.add('no-scroll');
//         });
//     });
    
//     // Close form function
//     function closeFormHandler() {
//         formOverlay.classList.remove('active');
//         document.body.classList.remove('no-scroll');
//     }
    
//     // Close button
//     closeForm.addEventListener('click', closeFormHandler);
    
//     // Close when clicking on overlay background
//     formOverlay.addEventListener('click', (e) => {
//         if (e.target === formOverlay) {
//             closeFormHandler();
//         }
//     });
    
//     // Close with Escape key
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && formOverlay.classList.contains('active')) {
//             closeFormHandler();
//         }
//     });
    
//     // Handle form submission
//     submitBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         alert('Form submitted successfully!');
//         closeFormHandler();
//     });
// }

// signUpForm();


