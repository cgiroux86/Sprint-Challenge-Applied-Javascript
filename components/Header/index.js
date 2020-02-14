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
    let div = document.createElement('div')
    div.classList.add('header')
   
    let span1 = document.createElement('span')
    span1.classList.add('date')
    span1.textContent = 'SMARCH 28, 2019'
   
    let h1 = document.createElement('h1')
    h1.textContent = 'Lambda Times'
   
    let span2 = document.createElement('span')
    span2.classList.add('temp')
    span2.textContent = `98°`
   
    div.append(span1,h1,span2)
   
    return div
   
   }
   
   let headerCont = document.querySelector('.header-container')
   console.log(headerCont)
   
   headerCont.append(Header())

