/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
  <list>
  <student>
    <name lang ="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang ="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

//создание переменных для сохранения значений
let nameNode = [];
let ageNode = [];
let profNode = [];
let langAttr = [];

// цикл для заполнения текстовыми значениями из XML
for (let i = 0; i < 2; i++) {

  nameNode.push(studentNode[i].querySelector("name").textContent);
  ageNode.push(studentNode[i].querySelector("age").textContent);
  profNode.push(studentNode[i].querySelector("prof").textContent);
  langAttr.push(studentNode[i].children[0].attributes.lang.nodeValue);
  
}

 
/* Этап 3. Запись данных в результирующий объект */
const result = [ 
  {
    name : nameNode[0],
    age : ageNode[0],
    prof : profNode[0],
    lang: langAttr[0],
  },
  {
    name : nameNode[1],
    age : ageNode[1],
    prof : profNode[1],
    lang: langAttr[1],
  },
];

console.log("list", result);