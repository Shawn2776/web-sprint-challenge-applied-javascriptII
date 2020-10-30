// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(futureData => {

    const bootstrapTopic = futureData.data.articles.bootstrap;
    const javascriptTopic = futureData.data.articles.javascript;
    const jqueryTopic = futureData.data.articles.jquery;
    const nodeTopic = futureData.data.articles.node;
    const technologyTopic = futureData.data.articles.technology;

    bootstrapTopic.forEach(element => {

      const headline = element.headline;
      const src = element.authorPhoto;
      const author = element.authorName;

      const bsTest = cardMaker({ headline, src, author })

      cardsContainer.appendChild(bsTest);
    });

    javascriptTopic.forEach(element => {

      const headline = element.headline;
      const src = element.authorPhoto;
      const author = element.authorName;

      const jsTest = cardMaker({ headline, src, author })

      cardsContainer.appendChild(jsTest);
    });

    jqueryTopic.forEach(element => {

      const headline = element.headline;
      const src = element.authorPhoto;
      const author = element.authorName;

      const jqTest = cardMaker({ headline, src, author })

      cardsContainer.appendChild(jqTest);
    });

    nodeTopic.forEach(element => {

      const headline = element.headline;
      const src = element.authorPhoto;
      const author = element.authorName;

      const nodeTest = cardMaker({ headline, src, author })

      cardsContainer.appendChild(nodeTest);
    });

    technologyTopic.forEach(element => {

      const headline = element.headline;
      const src = element.authorPhoto;
      const author = element.authorName;

      const techTest = cardMaker({ headline, src, author })

      cardsContainer.appendChild(techTest);
    });

    function cardMaker({ headline, src, author}) {
      const cardDiv = document.createElement('div');
      const headlinedDiv = document.createElement('div');
      const authordDiv = document.createElement('div');
      const cardImageContainer = document.createElement('div');
      const cardImg = document.createElement('img');
      const cardSpan = document.createElement('span');
    
      cardDiv.classList.add(`card`);
      headlinedDiv.classList.add('headline');
      authordDiv.classList.add(`author`);
      cardImageContainer.classList.add(`img-container`);

      headlinedDiv.textContent = headline;
      cardImg.src = src;
      cardSpan.textContent = `By: ${author}`;

      cardDiv.appendChild(headlinedDiv);
      cardDiv.appendChild(authordDiv);
      authordDiv.appendChild(cardImageContainer);
      cardImageContainer.appendChild(cardImg);
      authordDiv.appendChild(cardSpan);
      
      return cardDiv;
    }

    const cards = document.querySelectorAll('.card .headline')
    Array.from(cards).forEach(element => {
      element.addEventListener('click', (e) => {
        console.log(element)
      })
    });
    

  })
  .catch((drama) => {
    console.log(drama);
  })



const cardsContainer = document.querySelector(`.cards-container`);
