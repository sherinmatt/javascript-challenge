// from data.js
var tableData = data;

// CODE below:-

//console.log(tableData);

//reference -> table body
var tbody = d3.select("tbody");

// column needed components- datatime, city, state, country, shape, comments
//var columns = ["datetime", "city", "state", "country", "shape", "comments"];

// select-> button
var button = d3.select("#filter-btn");
//select -> form
var form = d3.select("#form-control");


//table
// utilized arrow function to save time here.  
data.forEach((UFOReport) => {
    console.log(UFOReport);
    var row = tbody.append("tr");

    Object.entries(UFOReport).forEach(([key, value]) => {
        console.log(key,value);
//appending a cell-> row 
        var cell = row.append("td");
        cell.text(value);
        console.log(key,value);

    });

});

// event handler button
button.on("click", runEnter);
//event hangler form
form.on("click", runEnter);


// building function runEnter 
function runEnter() {
//so as to inhibit the webpage refresh
    d3.event.preventDefault();
    var dateInput = d3.select("#datetime");
//extra 
//  var cityInput = d3.select("#city");
// var stateInput = d3.select("#state");
// var countryInput = d3.select("#country");
// var shapeInput = d3.select("#shape");


// value property 
    var amountInput = dateInput.property("value");
    console.log(amountInput);


// filtering by datetime
    var newData = tableData.filter(ufo => ufo.datetime === amountInput);


// console
    console.log(newData);
//tbody
    var tbody = d3.select("tbody");
//important to refresh the table
    tbody.html("");
//table w/ filtered data
    newData.forEach((UFOReport) => {
        var row = tbody.append("tr");

        Object.entries(UFOReport).forEach(([key, value]) => {
            console.log(key,value);
//appending a cell-> row  
            var cell = row.append("td");
            cell.text(value);
//console.log(key, value);

        });
    });
};
//function runEnter()


// end of UFO levl 1




//testing :- 
//entering the date 1/8/2010 displays four rows from that date. 










