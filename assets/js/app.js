let accordian = document.querySelectorAll(".full-part");
let firstimg = document.querySelector(".accord-img");
let firsttxt = document.querySelector(".accord-para");
firstimg.style.transform = "rotate(180deg)";
firsttxt.style.display = "block";
accordian.forEach(element => {
    let img = element.querySelector(".accord-img");
    let clicable = element.querySelector(".top-part");
    let txt = element.querySelector(".accord-para");
    clicable.addEventListener("click", () => {
        accordian.forEach(otherelement => {
            if (otherelement !== element) {
                let othertxt = otherelement.querySelector(".accord-para");
                let otehrimg = otherelement.querySelector(".accord-img");
                othertxt.style.display = "none";
                otehrimg.style.transform = "rotate(0deg)";
            }
        });
        let disp_text = window.getComputedStyle(txt).display;
        if (disp_text === "none") {
            txt.style.display = "block";
            img.style.transform = "rotate(180deg)";
        } else {
            txt.style.display = "none";
            img.style.transform = "rotate(0deg)";
        };
    });
});

$('.overflowSlider').slick({
    dots: true,
    speed: 555,
    arrows: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "Linear",
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: true,
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        },
        {
            breakpoint: 993,
            settings: {
                arrows: true,
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        },
        {
            breakpoint: 576,
            settings: {
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        },
        {
            breakpoint: 320,
            settings: {
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        }
    ]
});

$('.Slider-slider-2').slick({
    speed: 555,
    dots: false,
    arrow: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev_1",
    nextArrow: ".next_1",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        },
        {
            breakpoint: 993,
            settings: {
                arrows: true,
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        },
        {
            breakpoint: 576,
            settings: {
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        },
        {
            breakpoint: 320,
            settings: {
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                cssEase: "Linear",
            }
        }
    ]
});

$(".parentBox").slick({
    speed: 500,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1,
    autoplay: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    cssEase: 'linear',
    pauseOnHover: true,
    variableWidth: true,
});