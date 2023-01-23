const menuBar = document.querySelector('.menu-bar');
const closeMenu = document.querySelector('.close-menu')
const featuresOverlay = document.querySelector('.features-overlay')
const arrowDownCompany = document.getElementById('arrow-down-company')
const arrowDownFeatures = document.getElementById('arrow-down-features')
const featuresIconContainer = document.querySelector('.features-icon-container')
const companyContainer = document.getElementById('company-container')
const featuresItems = document.querySelector('.features-items')
const companyItem = document.querySelector('.company-items')
isClicked = true
companyItem.classList.add('hidden')


menuBar.addEventListener('click', () => {
    featuresOverlay.style.width = "100%"
})

closeMenu.addEventListener('click', () => {
    featuresOverlay.style.width = "0%"
})

featuresIconContainer.addEventListener('click', () => {{
    if(isClicked) {
        arrowDownFeatures.src = 'images/icon-arrow-up.svg'
        featuresItems.style.display = 'block'
    } else {
        arrowDownFeatures.src = 'images/icon-arrow-down.svg'
        featuresItems.style.display = 'none'
    }
    isClicked = !isClicked
}})

companyContainer.addEventListener('click', () =>{
    if(isClicked) {
        arrowDownCompany.src = 'images/icon-arrow-up.svg'
        companyItem.classList.remove('hidden')
    } else {
        arrowDownCompany.src = 'images/icon-arrow-down.svg'
        companyItem.classList.add('hidden')
    }
    isClicked = !isClicked
})







