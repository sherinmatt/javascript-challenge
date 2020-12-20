// from data.js
var tableData = data;


// CODE below

//console.log(tableData);

//reference -> table body
var tbody = d3.select("tbody");
// column needed parts- datatime, city, state, country, shape, comments
//var columns = ["datetime", "city", "state", "country", "shape", "comments"]

var button = d3.select("#filter-btn");
var form = d3.select("#form-control");


//table
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













