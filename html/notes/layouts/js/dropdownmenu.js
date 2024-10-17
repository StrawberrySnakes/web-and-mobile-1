document.getElementById('hamburger').addEventListener('click', clickMenu);

function clickMenu() {
    let nav = getNav();

    for (let i = 0, l = nav.classList.length; i < l; i++) {
        if (nav.classList[i] === 'shown') {
            nav.classList.remove('shown');
            return;
        }
    }

    nav.classList.add('shown');
}

function getNav() {
    let navElements = document.getElementsByTagName('nav');

    if (navElements.length <= 0) {
        console.error('There was a problem finding the nav element.');
    }

    return navElements[0];
}