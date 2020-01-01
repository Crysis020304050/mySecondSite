'use strict';

const headerContent = document.getElementsByClassName('headerContent')[0];
const header = document.getElementById('header');

window.onscroll = () => {
    if (window.scrollY > 40) {
        headerContent.style.padding = "25px 0";
        headerContent.style.borderBottom = "none";
        header.style.backgroundColor = "#292C47";
    }
    else {
        headerContent.style.padding = "40px 0";
        headerContent.style.borderBottom = "1px solid rgba(255, 255, 255, 0.15)";
        header.style.background = "none";
    }

};

const works = document.getElementsByClassName('work');

for (let work of works) {

    work.addEventListener('click', function (event) {
        event.stopPropagation();
        const imageOfWork = document.getElementsByClassName('imageOfWork')[0];
        imageOfWork.src = `${work.querySelector('img').src}`;
        onWorkClick();
    })
}

function onWorkClick() {


    document.body.style.overflow = 'hidden';
    const workClick = document.getElementsByClassName('workClick')[0];
    workClick.style.display = 'flex';

    document.getElementsByClassName('closeWork ')[0].onclick = closeButton;

    workClick.addEventListener('click', function (event) {
        event.stopPropagation();
        if (workClick === event.target) {
            closeButton();
        }

    })



}

function closeButton() {
    document.body.style.overflow = 'unset';
    document.getElementsByClassName('workClick')[0].style.display = 'none';

}

