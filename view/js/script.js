

/*function getLetter(){
    var letter = document.getElementById('input').value;

    if (letter === first letter of city)
{
        put state name in first item of row, then add all cities
        that start with the letter 
    }

}*/ 


var searchInput = document.getElementById('input');
var val='';
searchInput.addEventListener('input', (event) => {
    val = event.target.value;
})

var jsonResults;
var stringURL = 'https://jsonmock.hackerrank.com/api/cities/?city=' + val;

/*fetch(stringURL)
.then(response => {
   return response.json();
})
.then(data => console.log(data.data));
*/

fetch(stringURL)
.then(response => {
   return response.json();
})
.then(function(data){
    jsonResults = data.data;
})
console.log(jsonResults)



var list = document.getElementById('list');

function setList(group){
    clearList();
    for (var city of group){

    }
    if (group.length === 0){
        setNoResults();
    }

}

function clearList(){

}

function setNoResults(){

}

