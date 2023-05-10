export const initAccordions = ()=> {
    const searchOneAccordion = (el, selector)=> {
        let parent = el;
        while (parent) {
            if (parent.matches(selector)) {
                return true;
            }
            parent = parent.parentElement;
        }
        return false;
    }
    const accordions = document.querySelectorAll("[data-accordion]")
    accordions.forEach(accordion =>{
        const isOneAccordion = searchOneAccordion(accordion, "[data-one-accordion]")
        accordion.addEventListener("click", (e)=> {
            const content = accordion.nextElementSibling
            const disableAccordion = (el)=>{
                el.classList.remove("active")
                el.nextElementSibling.style.maxHeight = null
            }
            if(content.style.maxHeight){
                if(isOneAccordion) accordions.forEach(disableAccordion)
                disableAccordion(accordion)
            } else{
                if(isOneAccordion) accordions.forEach(disableAccordion)
                accordion.classList.add("active")
                content.style.maxHeight = content.scrollHeight + 'px'
            }
        })
    })
}