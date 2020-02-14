// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
  Object.values(res.data.articles).map(elem => {
    elem.map(item => body.append(createCard(item)))
    
  })
}).catch(err => console.log(err))

function createCard(obj) {
  const card = document.createElement('div')
  card.classList.add('card')
 
 const div1 = document.createElement('div')
 div1.classList.add('headline')
 div1.textContent = obj.headline

 const div2 = document.createElement('div')
 div2.classList.add('author')

 const imgContainer = document.createElement('div')
 imgContainer.classList.add('img-container')

 const img = document.createElement('img')
 img.src = obj.authorPhoto

 const span = document.createElement('span')
 span.textContent = obj.authorName

 card.append(div1, div2)
 div2.append(imgContainer,span)
 imgContainer.append(img)

 return card
}

const body = document.querySelector('.cards-container')
