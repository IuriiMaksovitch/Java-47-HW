const persons = [];

const personId = document.getElementById('personId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const buttonAddPerson = document.getElementById('addPerson');
const buttonGetStats = document.getElementById('calcStats');
const personsList = document.getElementById('personsList');
const stats = document.getElementById('stats');

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
}

buttonAddPerson.addEventListener('click', () => {
    const exist = !!persons.find(p => p.id === personId.value);
    if (!exist) {
        persons.push(new Person(personId.value, firstName.value, lastName.value, age.value))
        const list = persons.map(item => `<li>ID:${item.id} Name: ${item.firstName} Surname: ${item.lastName} Age: ${item.age}`);
        personsList.innerHTML = list;
    } else {
        alert('Person with this ID is already exist');
    }
});

buttonGetStats.addEventListener('click', getStat);

function getStat() {
    const arrOfAge = [];
    persons.forEach(item => arrOfAge.push(item.age));
    const maxAge = Math.max(...arrOfAge);
    const minAge = Math.min(...arrOfAge);
    const averageAge = arrOfAge.reduce((acc, item) => acc+item, 0)/arrOfAge.length;
    
    stats.innerHTML = '';
    const h2 = document.createElement('h2')
    h2.append(document.createTextNode('Stats'))
    stats.appendChild(h2);

    const ul = document.createElement('ul')
    let li = document.createElement('li')
    li.append(document.createTextNode(`Max age: ${maxAge}`))
    ul.appendChild(li);

    li = document.createElement('li')
    li.append(document.createTextNode(`Min age: ${minAge}`))
    ul.appendChild(li);

    li = document.createElement('li')
    li.append(document.createTextNode(`Average age: ${averageAge}`))
    ul.appendChild(li);

    stats.append(ul);
}


