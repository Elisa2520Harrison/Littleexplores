// detect scroll event on document
document.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change navbar bg to baby bluish
        document.getElementById('navbar').style.backgroundColor = ' #6c777c';
    } else {
        // change navbar bg to transparent
        document.getElementById('navbar').style.backgroundColor = 'transparent';
    }
});