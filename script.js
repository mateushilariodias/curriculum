const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualstyle = modal.style.display
    if(actualstyle == 'block') {
        modal. style.display = 'none'
    }
    else {
        modal. style.display = 'block'
    }
}
const btn = document.querySelector('#ctaBodyOneMobile')
btn.addEventListener('click', switchModal)
window. onclick = function (event) {
    const modal = document.querySelector('.modal')
    if (event. target == modal) {
        switchModal ()
    }
}