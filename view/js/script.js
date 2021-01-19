//<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

var inputSearch = document.getElementById('input');
var button = document.getElementById("btn");
var box = document.getElementById('modal-box');
var ok = document.getElementById('okay-btn');

box.style.visibility='hidden';


//Reset table every time a letter is typed
var letters = /^[A-Za-z]+$/;
function onClick($this){
    $("table").children().remove();
    var val = $this.previousElementSibling.value;
    if(val && val.trim().length>0 && val!==''){
        
    } if (val.match(letters) ==="true"){
        working(val);
    } else {
        notWorking(val);
    }
}

function okClick($ok){
    box.style.visibility ='hidden';
}

function notWorking(input){
    box.style.visibility='visible';
}

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
