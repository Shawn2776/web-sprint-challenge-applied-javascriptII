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
  const divHeader = document.createElement('div');
  const spanDate = document.createElement('span');
  const h1Item = document.createElement('h1');
  const spanTemp = document.createElement('span');

  divHeader.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  spanDate.textContent = `October 30th, 2020`;
  h1Item.textContent = 'Lambda Times';
  spanTemp.textContent = `78\u00B0`

  divHeader.appendChild(spanDate);
  divHeader.appendChild(h1Item);
  divHeader.appendChild(spanTemp);

  return divHeader
}

const divHeaderContainer = document.querySelector(`.header-container`);

divHeaderContainer.appendChild(Header());