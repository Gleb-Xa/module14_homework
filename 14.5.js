let btnRequest = document.querySelector('.btn-request')
let divResult = document.querySelector('.result-api')
let valid = document.querySelector('.valid-inputs')
let myUrl = '';

useRequest(localStorage.getItem('url'));

btnRequest.addEventListener('click', () => {  
  let number = +document.querySelector('.input-number').value;
  let limit = +document.querySelector('.input-limit').value;
  let checkNumber = number <= 10 && number >= 1 && Number.isInteger(number);  
  let checkLimit = limit <= 10 && limit >= 1 && Number.isInteger(limit); 
   
  if (checkNumber && checkLimit) {
    valid.textContent = 'Успех';
    myUrl = `https://picsum.photos/v2/list?page=${number}&limit=${limit}`;
    localStorage.setItem('url', myUrl);
    useRequest(myUrl);
  } else if (checkNumber) {
    valid.textContent = 'Лимит вне диапазона от 1 до 10';
  } else if (checkLimit) {
    valid.textContent = 'Номер страницы вне диапазона от 1 до 10';
  } else {       
    valid.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
  }
})

async function useRequest(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    let cards = '';

    data.forEach(item => {
      let cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
      </div>
    `;
    cards = cards + cardBlock;
    })
    divResult.innerHTML = cards;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}