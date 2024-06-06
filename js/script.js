function openEnvelope() {
    document.querySelector('.container').classList.add('expand');
    document.querySelector('.closed-envelope').style.opacity = '0';
    document.querySelector('.titulo').style.opacity = '0';
    document.querySelector('.opened-envelope').style.opacity = '1';
}