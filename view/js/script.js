//<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

var searchInput = document.getElementById('input');

searchInput.addEventListener('input', (event) => {
    const val = event.target.value;
    working(val);
    //console.log(val);
    //if (val ) is not a letter continue
})

function working(input){
    //fetch data from JSON URL
    var jsonResults = [];
    var stringURL = 'https://jsonmock.hackerrank.com/api/cities/?city=' + input;

    //console.log(stringURL);

     
    $(function() {
        $.getJSON(stringURL, function(data) {
            //console.log(data.data);
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