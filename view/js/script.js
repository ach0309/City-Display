//<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

var searchInput = document.getElementById('input');
var button = document.getElementById("btn");
var box = document.getElementById('modal-box');
var ok = document.getElementById('okay-btn');
var load = document.getElementById('loader');



function onClick($this){
    $("table").children().remove();
    let val = $this.previousElementSibling.value;
    load.classList.add('active');
    setTimeout(function(){load.classList.remove('active')}, 1000);
    setTimeout(function(){validate(val)}, 1000);
}

function validate(a){
    if (/^[a-zA-Z]*$/g.test(searchInput.value) && a!='') {
        console.log(a);
        working(a);
    }
    else{
        //notWorking(a);
        alert("Please provide the valid input");
    }
}


//Reset table/error message every time a letter is typed
function okClick($ok){
    box.style.visibility ='hidden';
}
searchInput.addEventListener('input', (event) => {
    okClick(input);
})

// when not Working
function notWorking(input){
    box.style.visibility='visible';
}

//when working
function working(input){
    //fetch data from JSON URL
    var jsonResults = [];
    var stringURL = 'https://jsonmock.hackerrank.com/api/cities/?city=' + input;

     
    $(function() {
        $.getJSON(stringURL, function(data) {
            var items='';
            var r= data.data;

            //get the amount of cities found
            var valLen = r.length;
            document.getElementById('numCities').innerHTML = valLen;

            var dict = {};
            //create an object {state: [cities]}
            $.each(r, function(key,value){
                if (value.state in dict){
                    dict[value.state].push(value.city);
                } else {
                    dict[value.state] = [value.city];
                }
            });

            //loop through object 
            $.each(dict, function(key,value){
                items += '<tr>';
                items += '<td>' + key + '</td>';
                //loop through values to get the cities for each key
                for (let i=0; i<value.length; i++){
                    items += '<td>'+ value[i] + '</td>';
                }
                items += '</tr>';
            });
        $('#tables').append(items);
        });

    });

}
