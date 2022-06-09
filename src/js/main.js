window.addEventListener('DOMContentLoaded', () => {
    modals();
})

function modals(){
        function bindModal(trigger, modal, close){
            trigger.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }

                modal.style.display = "flex";
                document.body.style.overflow = "hidden";
            });

            close.addEventListener('click', () => {
                modal.style.display = "none";
                document.body.style.overflow = "";
            });

            modal.addEventListener('click', (e) => {
                if(e.target === modal){
                    modal.style.display = "none";
                    document.body.style.overflow = "";
                }
            })
        }

        function countClick(clickedElement, counterElement){
            let count = 0;
            let cloneCount = 0;
            let upd = n => localStorage.setItem('myKey', counterElement.textContent = n || 0, count = n);
            upd(localStorage.getItem('myKey'));
            clickedElement.addEventListener('click', () => {
                upd(+counterElement.textContent + 1);
                if(count > 5){
                    cloneCount++;
                    let cloneBtn = clickedElement.cloneNode(true);
                    cloneBtn.classList.add('content__reset');
                    cloneBtn.innerHTML = "reset";
                    cloneBtn.style.backgroundColor = "#B7D6D5";
                    cloneBtn.style.marginLeft = "10%";
                    clickedElement.after(cloneBtn);
                    cloneBtn.onclick = e => upd(0);
                    if(cloneCount > 1){
                        cloneBtn.remove();
                    }
                }
            })
    }




    const callModalBtn = document.querySelector('.content__button');
    const modalWindow = document.querySelector('.modal__wrapper');
    const closeModalBtn = document.querySelector('.modal__close');

    bindModal( callModalBtn, modalWindow, closeModalBtn );

    const modalClick = document.querySelector('.content__button');
    const counterElement = document.querySelector('.modal__click');
    countClick(modalClick, counterElement);
};
