// from data.js
var tableData = data;

// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("form");



//print values to table
tableData.forEach(function(UFOData) {
    var tbody = d3.select("tbody");
    console.log(UFOData);
    var row = tbody.append("tr");
    Object.entries(UFOData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

//create event handlers
button.on("click", runEnter);
form.on("change", runEnter);
//complete event handler for form completion
function runEnter() {
    var ufoTable = d3.select("tbody");
    ufoTable.html("");
    //prevent page from refreshing
    d3.event.preventDefault();
    //select input elemtent
    var inputElement = d3.select("#datetime");
    //get the value property
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    //conditional to check input value
    if (inputValue.length != 0) {   
        var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
        console.log(filteredData);

        //create an array of filtered UFO sightings
        filteredData.forEach(function(filteredUFO) {
            var tbody = d3.select("tbody");
            console.log(filteredUFO);
            var row = tbody.append("tr");
            Object.entries(filteredUFO).forEach(function([key, value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }    
    else{
        alert("No results found")
    }
}