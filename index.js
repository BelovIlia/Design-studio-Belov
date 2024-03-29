const paths = [
    "./image-folder/room.png",
    "./image-folder/image 2.png",
    "./image-folder/image 3.png"
]

const texts = [
    {
        city: "Rostv-on-Don <br/> LCD admiral",
        area: "81 m2",
        repairTime: "3.5 months",
        repairCost: "Upon request"
    },
    {
        city: "Sochi <br/> Thieves",
        area: "105 m2",
        repairTime: "4 months",
        repairCost: "Upon request"
    },
    {
        city: "Rostv-on-Don <br/> Patriotic",
        area: "93 m2",
        repairTime: "3 months",
        repairCost: "Upon request"
    }
]

const citySpan = document.querySelector('#city');
const areaSpan = document.querySelector('#area');
const repairTimeSpan = document.querySelector('#repairTime');
const repairCostSpan = document.querySelector('#repairCost');

const links = document.querySelectorAll('.item__link');

const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');

const dotFirst = document.querySelector('.dot-grey-left');
const dotSecond = document.querySelector('.dot-grey-average');
const dotThird = document.querySelector('.dot-grey-right');

const dots = [dotFirst, dotSecond, dotThird]; 

const img = document.querySelector('.img__room');
 
let currentIndex = 0;

function changeImg(index) {
    currentIndex = index;
    console.log(paths[index])
    img.src = paths[index];
    // dots
    dots.forEach(dot => dot.src = "./image-folder/grey-dot.svg");
    dots[index].src = "./image-folder/white-dot.svg";
    // links
    links.forEach(link => link.classList.remove('item__color'));
    links[index].classList.add('item__color');

    // text
    const text = texts[index];
    citySpan.innerHTML = text.city;
    areaSpan.innerHTML = text.area;
    repairTimeSpan.innerHTML = text.repairTime;
    repairCostSpan.innerHTML = text.repairCost;
}

links.forEach((link, i) => link.addEventListener('click', () => {
    changeImg(i);
})) 

dots.forEach((dot, i) => dot.addEventListener('click', () => {
    changeImg(i);
}))
 
function changeImgNext() { 
    const index = currentIndex;

    console.log("next", index)

    if (index === paths.length - 1) {
        changeImg(0);
    } else {
        changeImg(index + 1);
    }
}

function changeImgPrev() {
    const index = currentIndex;

    console.log("prev", index)

    if (index === 0) {
        changeImg(paths.length - 1);
    } else {
        changeImg(index - 1);
    }
}

arrowNext.addEventListener('click', changeImgNext);
arrowPrev.addEventListener('click', changeImgPrev);


