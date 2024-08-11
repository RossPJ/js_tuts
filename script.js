//There are two gymnastics teams: Dolphins and Koalas. 
//They compete against each other 3 times. 
//The winner with the highest average score wins a trophy

// var scoreDolphins = (96 + 108 + 89) / 3; //average dolphins score 
// var scoreKoolas = (88 + 100 + 110) / 3; //average koolas score

// if (scoreDolphins > scoreKoolas) {
//     console.log('Dolphins win the trophy')
// } else if (scoreDolphins < scoreKoolas) {
//     console.log('Koolas win the trophy')
// } else {
//     console.log('Both win the trophy')
// }

//_______________________________________________________________

//switch case example 
// const day = 'wednesday';
// switch(day) {
//     case 'monday':
//         console.log('plan course structure');
//         console.log('plan course something');
//         break;
//     case 'tuesday':
//         console.log('plan course structure');
//         break;
//     case 'wednesday':
//         console.log('plan course structure');
//         break;
//     case 'thursday':
//     case 'friday':
//         console.log('know idea what im doing')
//         break;
//     default:
//         console.log('not a valid day')
//     }

//________________________________________________________________

//template literall

// var new_list = ['tom', 'pills', 23, 'city bus']
// var new_str = `This guy named ${new_list[0]} came around one day and was looking for some ${new_list[1]}`
// console.log(new_str)


//_______________________________________________________________

//ternary / conditional operator 

// var age = 23; 

// //condtion ? if statement : else statement 
// age >= 18 ? console.log('i like to drink cheese') : console.log('I like to eat water');

// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// console.log(typeof arr[3]);

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i] + 'poopsicle')
// }]
// test comment for git push 

// function clogger() {
//     console.log('Inside the function buddy!')
// };

// clogger();


// // function declaration
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age
// };
// console.log(calcAge1(1982));

// // arrow functions (function expression)
// var calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(1873));

// let numbers = [1,2,4,8];

// numbers.push(12)

// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// numbers.splice(4,1)

// let list = [
//     {text: 'milk', cost: 4, need: false},
//     {text: 'eggs', cost: 10, need: true},
//     {text: 'butter', cost: 5, need: false},
//     {text: 'bread', cost: 3, need: true},
//     {text: 'bacon', cost: 12, need: true}
 
// ];

// names = ['patrick', 'henry', 'mango', 'boo boo'];

// let html = '';
// let total = 0;
// let cost = '';

//functions 

// for (let i = 0; i < list.length; i++) {
//     if (list[i].need === true) {
//         html += `<li>${list[i].text}: $${list[i].cost}</li>`;
//         total += list[i].cost
//     };    
// }

// let html2 = '';

// for (let i = 0; i < names.length; i++){
//     html2 += `<p>Hello, my name is ${list[i].text}.</p>`;
// }


// document.getElementById('list').innerHTML = html;
// document.getElementById('cost').innerHTML = `$${total}`;
// document.getElementById('para_text').innerHTML = html2;

//  let list = [
//     {text: 'milk', cost: 4, need: false},
//     {text: 'eggs', cost: 10, need: true},
//     {text: 'butter', cost: 5, need: false},
//     {text: 'bread', cost: 3, need: true},
//     {text: 'bacon', cost: 12, need: true}
// ];

// function generateTable(tableData) {
//     let table = document.createElement('table');
//     let thead = table.createTHead();
//     let tbody = table.createTBody();

//     // Create table header row
//     let headerRow = thead.insertRow();
//     Object.keys(tableData[0]).forEach(key => {
//         let th = document.createElement('th');
//         let text = document.createTextNode(key);
//         th.appendChild(text);
//         headerRow.appendChild(th);
//     });

//     // Create table rows with data
//     tableData.forEach(item => {
//         let row = tbody.insertRow();
//         Object.values(item).forEach(value => {
//             let cell = row.insertCell();
//             let text = document.createTextNode(value);
//             cell.appendChild(text);
//         });
//     });

//     return table;
// }

// // Get the container element where you want to add the table
// let container = document.getElementById('tableContainer');

// // Generate the table and add it to the container
// container.appendChild(generateTable(list));

// let list = [
//     {id: 2123, text: 'milk', cost: 4, need: false},
//     {id: 2123, text: 'milk', cost: 23, need: true},
//     {id: 1200, text: 'eggs', cost: 10, need: true},
//     {id: 1100, text: 'butter', cost: 5, need: false},
//     {id: 1000, text: 'bread', cost: 3, need: true},
//     {id: 900, text: 'bacon', cost: 12, need: true}
// ];


// list.forEach((i) => console.log(i));


// const data = [
//     { name: 'Rahul abdul jabaar', age: 25, city: 'New Delhi' },
//     { name: 'Vijay vajayjay', age: 30, city: 'Muzaffarpur' },
//     { name: 'Gaurav durov', age: 22, city: 'Noida' },
// ];

// function createTableWithInnerHTML() {
//     let tableHTML = '<table border="3"><tr>';

//     Object.keys(list[0]).forEach(key => {
//         tableHTML += `<th>${key}</th>`;
//     });

//     tableHTML += '</tr>';

//     list.forEach(item => {
//         tableHTML += '<tr>';
//         Object.values(item).forEach(value => {
//             tableHTML += `<td>${value}</td>`;
//         });
//         tableHTML += '</tr>';
//     });

//     tableHTML += '</table>';

//     document.body.innerHTML += tableHTML;
// }

// createTableWithInnerHTML();


// function functionBuddy(){
//     return alert('Function Buddy!')
// }


// let functionBuddy2 = function () {
//     return alert('Function Buddy Number Fucking 2!!')
// }


// const getGreeting = () => {

//     let getName = prompt('Enter your name fool:');
//     document.getElementById('intro').innerHTML = getName;
// }


$( document ).ready(function() {
 
   $.ajax({
       url: "http://feeds.nytimes.com/nyt/rss/HomePage",
       type: "GET",
       dataType: "xml",
       success: function ( data ) {

        let html = '';
                // Define an empty array to store titles
        let titlesArray = [];
        let linksArray = [];

        // Find the title(s) in the RSS data
        let rssTitle = $(data).find('title');
        let rssLinks =$(data).find('link');

        // Iterate over each title found and push it to the array
        rssTitle.each(function() {
            titlesArray.push($(this).text());
        });

        rssLinks.each(function() {
            linksArray.push($(this).text());
        });


        // Log the array to check the titles
        for (let i = 0; i < titlesArray.length; i++) {
            html+=`<a href="${linksArray[i]}"><li>${titlesArray[i]}</li></a>`;

        }
       console.log(html)
       document.getElementById('intro').innerHTML = html;
       }






   });
 
});



