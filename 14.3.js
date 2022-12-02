let result = document.querySelector('.img');
let url = 'https://picsum.photos/v2/list?limit=';
//console.log(result);

function numberLoading() {
  let value = document.querySelector('input').value;
  if (value <= 10 && value >= 1) {
    reportClear();
    useRequest(url + value, displayResult);
    //console.log(url);
  } else {
    report();
  };
};

function report() {
  let a = '';
  a = `<p class='result'>Число вне диапазона от 1 до 10 </p>`;
  result.innerHTML = a;
};

function reportClear() {
  result.innerHTML = '';
}

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  result.innerHTML = cards;
}



