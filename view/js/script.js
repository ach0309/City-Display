const inputSearch = document.getElementById('input');
const btn = document.getElementById('btn');
const cities = document.getElementById('numCities');
const loader = document.getElementById('loader');
const totalCities = document.getElementById('totalCount');


//adds loader everytime button is clicked, search DOM for 'this'
function onClick($this) {
    loader.classList.add('active');
    totalCities.classList.add('active');
    //setTimeout(function(){loader.classList.remove('active')}, 500);

    let val = $this.previousElementSibling.value;
    setTimeout(function(){validate(val)}, 500);
}

//remove table every new input
inputSearch.addEventListener('input', (event)=>{
    $("table").children().remove();
    totalCities.classList.remove('active');
    
})

//validate the input
function validate(val){
    if (val!='' && /^[a-zA-Z]*$/.test(inputSearch.value)){
        working(val);
    }
    else {alert('Please provide the valid input')
    loader.classList.remove('active');
    totalCities.classList.remove('active');
    }

}


// if input is valid
function working(val){
    let url = 'https://jsonmock.hackerrank.com/api/cities/?city=' + val;
    let item = '';
    

    $(function(){
        $.getJSON(url, function(data){
            //console.log(data);
            var result = data.data;
            loader.classList.remove('active');
            var len = result.length;
            dataObject = {};
            //number of cities
            cities.innerHTML= len;

            //create object dataObject = {state:cities}
            $.each(result, function(key,value){
                if (value.state in dataObject){
                    dataObject[value.state].push(value.city);
                } else {
                    dataObject[value.state] = [value.city];
                }
            });
            
            //create table
            $.each(dataObject, function(key,value){
                item += "<tr>";
                item += "<td>" + key + "</td>"
                for(let i=0; i<value.length; i++){
                    item+= "<td>" + value[i] + "</td>"
                }
                item += "</tr>";
            })
        $('#tables').append(item);    
        })
    })
}