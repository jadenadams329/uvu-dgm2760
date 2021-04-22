function duplicateMenu() {
    //get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    console.log(topList)
    
    //create new items for bottom of page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')

        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLink.textContent = menuItem.textContent

        // append children to make them appear in the DOM
        newLI.appendChild(newLink)
        let nav = document.querySelector('#smallNavArea')
        newList.appendChild(newLI)
        nav.appendChild(newList)
        console.log(nav)
    })
    


}

duplicateMenu()