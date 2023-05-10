export const initBurgerHeader = (burgerSelector,menuSelector)=> {
    const burger = document.querySelector(burgerSelector)
    const menu = document.querySelector(menuSelector)
    if(burger && menu){
        burger.addEventListener("click", ()=>{
            menu.classList.toggle("open")
            burger.classList.toggle("active")
            document.body.classList.toggle("lock")
        })
    }
}