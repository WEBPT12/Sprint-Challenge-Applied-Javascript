// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    //<div class="header">
    const divHeader = document.createElement('div')
    divHeader.classList.add('header')

    //<span class="date">SMARCH 28, 2019</span>
    const spanDate = document.createElement('span')
    spanDate.classList.add('date')
    spanDate.textContent = 'SMARCH 28, 2019'

    //<h1>Lambda Times</h1>
    const h1Header = document.createElement('span')
    h1Header.textContent = 'Lambda Times'

    //<span class="temp">98°</span>
    const spanTemp = document.createElement('span')
    spanTemp.classList.add('temp')
    spanTemp.textContent = '98°'
    // creating an array of my different component pieces 
    const components = [spanDate, h1Header, spanTemp]
    // then using .map to loop thorugh my array appending eachone after the divHeader 
    components.map(component => divHeader.append(component))

    return divHeader
}

//And add it to the DOM in the .header-container component
// creating a variable to hold the entire function
const headerContainer = Header()
document.querySelector('.header-container').appendChild(headerContainer)
