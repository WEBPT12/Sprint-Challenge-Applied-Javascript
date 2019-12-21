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

//axios.get
axios.get('https://lambda-times-backend.herokuapp.com/articles')
//make sure to keep loking at the response given in console!
    .then(res => {
        const { bootstrap, javascript, jquery, node, technology } = res.data.articles

        // console.log(bootstrap)
        //notice the data you get back
        //map over so that you can retrive the data and iterate over it and display it onn\ the page
        bootstrap.map(card => {
            const cardDiv = document.querySelector('.cards-container')
            cardDiv.appendChild(cardCreator(card))
        })
        // console.log(javascript)
        javascript.map(card => {
            const cardDiv = document.querySelector('.cards-container')
            cardDiv.appendChild(cardCreator(card))
           })
        // console.log(jquery)
        jquery.map(card => {
            const cardDiv = document.querySelector('.cards-container')
            cardDiv.appendChild(cardCreator(card))
           })
        // console.log(node)
        node.map(card => {
            const cardDiv = document.querySelector('.cards-container')
            cardDiv.appendChild(cardCreator(card))
           })
        // console.log(technology)
        technology.map(card => {
            const cardDiv = document.querySelector('.cards-container')
            cardDiv.appendChild(cardCreator(card))
           })
    })

    .catch(err => console.log(err))

// component
function cardCreator(card) {
    // <div class="card"></div>
    const divParent = document.createElement('div')
    divParent.classList.add('card')

    // <div class="headline">{Headline of article}</div>
    const divHeadline = document.createElement('div')
    divHeadline.classList.add('headline')
    divHeadline.textContent = card.headline
    divParent.appendChild(divHeadline)

    // <div class="author">
    const divAuthor = document.createElement('div')
    divAuthor.classList.add('author')
    divParent.appendChild(divAuthor)

    // <div class="img-container">
    const divImg = document.createElement('div')
    divImg.classList.add('img-container')
    divAuthor.appendChild(divImg)

    // <img src={url of authors image} />
    const img = document.createElement('img')
    img.src = card.authorPhoto
    divImg.appendChild(img)

    // <span>By {authors name}</span>
    const span = document.createElement('span')
    span.textContent = card.authorName
    divAuthor.appendChild(span)

    return divParent
}

