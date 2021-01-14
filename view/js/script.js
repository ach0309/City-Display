//<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

var searchInput = document.getElementById('input');

var val='';

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
            console.log(data.data);
            var cities='';
            var r= data.data;
            $.each(r, function(key,value){
                cities += '<tr>';
                cities += '<td>' + value.state + '</td>';
                cities += '<td>' + value.city+ '</td>';
                cities += '</tr>';
            });
        $('#tables').append(cities);
        });

    });





/*
    $(function() {
        $.getJSON(stringURL, function(data) {
            //console.log(data.data);
            var tr;
            var r= data.data;
            for (var i = 0; i < r.length; i++) {
                //console.log(r[i].state);
                tr = $('<tr/>');
                if (i===0){
                    tr.append("<td>" + r[i].state + "</td>");
                } else {
                    tr.append("<td>" + r[i].city + "</td>");
                }
            $('table').append(tr);    
            }
        });
    });
*/
    /*    
    //build the table
    function buildTable(data){
        var myTable = document.getElementById('table')
        for (var i=0; i<data.length; i++){
            if (i===0){
                var row = <tr>
                            <td>${data[i]}.state</td>
                        </tr>
                myTable.innerHTML +=row;
            }
            else{
                row = <tr>
                        <td>${data[i]}.cities</td>
                    </tr>
                myTable.innerHTML +=row;
            }

        }
    }
    //another idea
    function buildTable(data){
        var tr;
        for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i][0] + "</td>");
        tr.append("<td>" + data[i][1] + "</td>");
        $('table').append(tr);
        }
    }

    //build the table
    function buildTable(data){
        var myTable = document.getElementById('table')
        var row ='';
        for (var i=0; i<data.length; i++){
            if (i===0){
                row += '<tr>';
                row += '<td>' + value.state[i] + '</td>';
                row += '</tr>';
            }
            else{
                row += '<tr>';
                row += '<td>' + value.city[i] + '</td>';
                row += '</tr>';
            }
        table.innerHTML += row
        }
    }

        $.ajax({
            method: 'GET',
            url: stringURL,
            type: JSON,
            success: function(response){
                jsonResults = response.data;
                console.log(jsonResults);
                //buildTable(jsonResults);
            }
        });
    */
}
