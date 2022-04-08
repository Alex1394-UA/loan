export default class ShowInfo {
    constructor (triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                try {
                    const sibling = btn.closest('.module__info-show').nextElementSibling;
                sibling.classList.add('animated');
                sibling.classList.toggle('msg');
                if (sibling.classList.contains('fadeIn')) {
                    sibling.classList.remove('fadeIn');
                } else {
                    sibling.classList.add('fadeIn');
                }
                sibling.style.marginTop = '20px';
                } catch(e) {}
            });
        });
    }
}