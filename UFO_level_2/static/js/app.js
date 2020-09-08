// from data.js
var tableData = data.js;

// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select(".form-group");

// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//complete event handler for form completion
function runEnter() {
    //prevent page from refreshing
    d3.event.preventDefault();
    //select input elemtent
    var inputElement = d3.select(".form-control");
    //get the value property
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    //print values to table
    tableData.forEach(function(filteredData) {
        var tbody = d3.select("tbody");
        console.log(filteredData);
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

}