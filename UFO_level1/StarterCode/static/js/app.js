// from data.js
var tableData = data;

// CODE below

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
// arrow function 
data.forEach((UFOReport) => {
    console.log(UFOReport);
    var row = tbody.append("tr");

    Object.entries(UFOReport).forEach(([key, value]) => {
        console.log(key,value);
//appending a cell-> row 
        var cell = row.append("td");
        cell.text(value);
        console.log(key, value)

    });

});

// event handler button
button.on("click", runEnter);
//event hangler form
form.on("click", runEnter);


// function runEnter 
function runEnter() {
//inhibit refresh
    d3.event.preventDefault();
    var dateInput = d3.select("#datetime");
// var cityInput = d3.select("#city");
// var stateInput = d3.select("#state");
    var amountInput = dateInput.property("value");
    console.log(amountInput);


// filtering my datetime
    var newData = tableData.filter(ufo => ufo.datetime === amountInput);


// console
    console.log(newData);
//tbody
    var tbody = d3.select("tbody");
//refresh the table
    tbody.html("");
//table w/ filtered data
    newData.forEach((UFOReport) => {
        var row = tbody.append("tr");

        Object.entries(UFOReport).forEach(([key, value]) => {
            console.log(key,value);
//appending a cell-> row  
            var cell = row.append("td");
            cell.text(value);
// console.log(key, value)

        });
    });

};
//function 












