/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
let jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
let data = JSON.parse(jsonString);
// console.log('data', data);
let list = data.list;
// console.log('list', list);


/* Этап 3. Запись данных в результирующий объект */
let result = [];

//console.log(name);

for (let elem of list) {
//  console.log(elem)
  let key = {
  name: elem.name,
  age: Number(elem.age),
  prof: elem.prof,
};
  result.push(key)
};

console.log('result', result);