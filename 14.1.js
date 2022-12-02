/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
let parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
let xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
//console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
let xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
let list = [];

let students = xmlDOM.querySelectorAll("student");

students.forEach(student => {
    let name = student.querySelector("name")
    let first = student.querySelector("first").textContent;
    let second = student.querySelector("second").textContent;
    let age = student.querySelector("age").textContent;
    let prof = student.querySelector("prof").textContent;
    let langAttr = name.getAttribute('lang');
    let result = {
        lang: langAttr,
        first: first,
        second: second,
        age: Number(age),
        prof: prof,
    };
    list.push(result)
})

console.log('result', list);



