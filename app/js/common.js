"use strict";

// FIXED MENU


// MOBILE MENU

const mobileMenuCheck = document.querySelector('#checkbox');
const mobileMenuCont = document.querySelector('#mobile-cont');
const mobileMenuLink = document.getElementsByClassName('mobile-menu-link');
const mobileMenuBtn = document.querySelector('#mobile-btn');

mobileMenuCheck.addEventListener('click', function () {
    let activeClass = mobileMenuCont.classList.contains('mobile-menu-container--active');
    if (!activeClass) {
        mobileMenuCont.classList.add('mobile-menu-container--active');
        document.body.style.overflow = 'hidden';
        mobileMenuBtn.classList.add('mobile-menu-btn--active:after');
        mobileMenuBtn.classList.add('mobile-menu-btn--active:before');
        mobileMenuBtn.classList.add('mobile-menu-btn--active');
    }
    if (activeClass) {
        mobileMenuCont.classList.remove('mobile-menu-container--active');
        mobileMenuCont.classList.remove('mobile-menu-container--active');
        document.body.style.overflow = 'auto';
        mobileMenuBtn.classList.remove('mobile-menu-btn--active:after');
        mobileMenuBtn.classList.remove('mobile-menu-btn--active:before');
        mobileMenuBtn.classList.remove('mobile-menu-btn--active');
    }
});

for (let i = 0; i < mobileMenuLink.length; i++) {
    mobileMenuLink[i].addEventListener('click', function () {
        mobileMenuCont.classList.remove('mobile-menu-container--active');
        document.body.style.overflow = 'auto';
        mobileMenuBtn.classList.remove('mobile-menu-btn--active:after');
        mobileMenuBtn.classList.remove('mobile-menu-btn--active:before');
        mobileMenuBtn.classList.remove('mobile-menu-btn--active');

    });
}


// TEAM ACCO

const accoTeam = document.getElementsByClassName('accordeon-team__desc-people');

for (let i = 0; i < accoTeam.length; i++) {
    accoTeam[i].addEventListener('click', function () {
        let activeClass = this.classList.contains('accordeon-team__desc-people--active');
        if (!activeClass) {
            for (let y = 0; y < accoTeam.length; y++) {
                accoTeam[y].classList.remove('accordeon-team__desc-people--active');
                accoTeam[i].classList.add('accordeon-team__desc-people--active');
            }
        }
        if (activeClass) {
            this.classList.remove('accordeon-team__desc-people--active');
        }
    });
}

// MENU ACCO

const accoMenuBtn = document.getElementsByClassName('accordeon-menu__list-btn');
const accoMenuDesc = document.getElementsByClassName('accordeon-menu__hidden-desc');

for (let i = 0; i < accoMenuBtn.length; i++) {
    accoMenuBtn[i].addEventListener('click', function () {
        for (let y = 0; y < accoMenuDesc.length; y++) {
            let activeClass = accoMenuDesc[i].classList.contains('accordeon-menu__hidden-desc--active');
            if (!activeClass) {
                for (let x = 0; x < accoMenuDesc.length; x++) {
                    accoMenuDesc[x].classList.remove('accordeon-menu__hidden-desc--active');
                    accoMenuDesc[i].classList.add('accordeon-menu__hidden-desc--active');
                }
            }
            if (activeClass) {
                accoMenuDesc[i].classList.remove('accordeon-menu__hidden-desc--active');
            }
        }
    });
}

// BURGER MENU

const burgerMenu = document.getElementsByClassName('carousel-burgers__menu');
const burgerMenuList = document.getElementsByClassName('carousel-burgers__menu-list');

for (let i = 0; i < burgerMenu.length; i++) {
    burgerMenu[i].addEventListener('click', function () {
        for (let y = 0; y < burgerMenuList.length; y++) {
            let activeClass = burgerMenuList[i].classList.contains('carousel-burgers__menu-list--active');
            if (!activeClass) {
                for (let x = 0; x < burgerMenuList.length; x++) {
                    burgerMenuList[x].classList.remove('carousel-burgers__menu-list--active');
                    burgerMenuList[i].classList.add('carousel-burgers__menu-list--active');
                }
            }
            if (activeClass) {
                burgerMenuList[i].classList.remove('carousel-burgers__menu-list--active');
            }
        }
    });
}


// const burgerMenu = document.querySelector('#burger-menu');
// const burgerMenuList = document.querySelector('#burger-list');
// let burgerOp = burgerMenuList.style.opacity;
// let computedStyle = getComputedStyle(burgerMenuList);
// let maxOp = 1;
//
// burgerMenu.addEventListener('click', function () {
//     if (computedStyle.opacity < maxOp) {
//         burgerMenuList.style.opacity += 1;
//     } else {
//         burgerMenuList.style.opacity -= 1;
//     }
//
// });

// SLIDER

const slides = document.querySelectorAll('#best-burgers__slider .best-burgers__list');
const slideInterval = setInterval(nextSlide, 2000);
const next = document.querySelector('#carousel-next');
const prev = document.querySelector('#carousel-prev');
const controls = document.querySelectorAll('.btn__none');
let currentSlide = 0;

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'best-burgers__list';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'best-burgers__list best-burgers__list--active';
}

next.onclick = function () {
    nextSlide();
};

prev.onclick = function () {
    previousSlide();
};

// MAPS

ymaps.ready(init);

let placemarks = [{
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
            '</div>'
        ]
    },
        {
            latitude: 59.94,
            longitude: 30.25,
            hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',
                'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
                '</div>'
            ]
        },
        {
            latitude: 59.93,
            longitude: 30.34,
            hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',
                'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
                '</div>'
            ]
        }
    ],
    geoObjects = [];

function init() {
    const map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (let i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
            hintContent: placemarks[i].hintContent,
            balloonContent: placemarks[i].balloonContent.join('')
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/forsprite/svg/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        });
    }

    const clusterer = new ymaps.Clusterer({
        clusterIcons: [{
            href: '../img/forsprite/png/burger-promo.png',
            size: [100, 100],
            offset: [-50, -50]
        }],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}