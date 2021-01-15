//<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

var button = document.getElementById("btn");
var clrTables = document.getElementById('tables');
var inputSearch = document.getElementById('tables');

inputSearch.addEventListener('input', clear) {
    clrTables = '';
}

function onClick($this){
    var val = $this.previousElementSibling.value;
    if(val && val.trim().length >0){
        working(val);
    } else {
        notWorking(val);
    }
}


function notWorking(input){
    document.getElementById('modal-box').classList.add('.modal');
    setTimeout(function(){ document.getElementById('modal-box').classList.remove('modal')}, 30);
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
