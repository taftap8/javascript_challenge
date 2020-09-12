// from data.js
var tableData = data;

// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("form");



//print values to table
tableData.forEach(function (UFOData) {
    var tbody = d3.select("tbody");
    console.log(UFOData);
    var row = tbody.append("tr");
    Object.entries(UFOData).forEach(function ([key, value]) {
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

    //prevent page from refreshing
    d3.event.preventDefault();

    //select input elements
    var dateinputElement = d3.select("#datetime");
    var cityinputElement = d3.select("#city");
    var stateinputElement = d3.select("#state");
    var countryinputElement = d3.select("#country");

    //get the value property
    var dateinputValue = dateinputElement.property("value");
    var cityinputValue = cityinputElement.property("value");
    var stateinputValue = stateinputElement.property("value");
    var countryinputValue = countryinputElement.property("value");

    // capute any input value
    var dateFilterData = tableData.filter(ufo => ufo.datetime === dateinputValue);
    console.log(dateFilterData);
    var cityFilterData = tableData.filter(ufo => ufo.city === cityinputValue.toLowerCase());
    console.log(cityFilterData);
    var stateFilterData = tableData.filter(ufo => ufo.state === stateinputValue);
    console.log(stateFilterData);
    var countryFilterData = tableData.filter(ufo => ufo.country === countryinputValue);
    console.log(countryFilterData);
    //console.log(filteredData);

    

    //variable to store any input
    if (dateFilterData.length != 0) {
        ufoTable.html("");
        //create an array of filtered UFO sightings
        dateFilterData.forEach(function (filteredUFO) {
            var tbody = d3.select("tbody");
            console.log(filteredUFO);
            var row = tbody.append("tr");
            Object.entries(filteredUFO).forEach(function ([key, value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
    else if (cityFilterData.length != 0) {
        //create an array of filtered UFO sightings
        ufoTable.html("");
        cityFilterData.forEach(function(filteredUFO) {
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
    else if (stateFilterData.length != 0) {
        //create an array of filtered UFO sightings
        ufoTable.html("");
        stateFilterData.forEach(function(filteredUFO) {
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
    else if (countryFilterData.length != 0) {
        //create an array of filtered UFO sightings
        ufoTable.html("");
        countryFilterData.forEach(function(filteredUFO) {
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
    else {
        alert("No results found!")
    }
}