// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  // create elements
  const headerDiv = document.createElement('div');
  const headerSpanDate = document.createElement('span');
  const headerH1 = document.createElement('h1');
  const headerSpanTemp = document.createElement('span')

  // give elements classes as required
  headerDiv.classList.add('header');
  headerSpanDate.classList.add('date');
  headerSpanTemp.classList.add('temp');

  // add textContent
  headerSpanDate.textContent = `December 4th, 2020`;
  headerH1.textContent = 'Lambda Times';
  headerSpanTemp.textContent = '98°';

  // appendChild to parent element
  headerDiv.appendChild(headerSpanDate);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(headerSpanTemp);

  // return the element
  return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());