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
    //dictionaty to capture filters
    var filters = {}
    //prevent page from refreshing
    d3.event.preventDefault();
    //select table
    var ufoTable = d3.select("tbody");
    //clear table
    ufoTable.html("");

    

    //select input elements
    var dateinputElement = d3.select("#datetime");
    var cityinputElement = d3.select("#city");
    var stateinputElement = d3.select("#state");
    var countryinputElement = d3.select("#country");

    //get the value property
    var dateinputValue = dateinputElement.property("value");
    console.log(dateinputValue);
    var cityinputValue = cityinputElement.property("value");
    var stateinputValue = stateinputElement.property("value");
    var countryinputValue = countryinputElement.property("value");

    //check if filter exists
    if (dateinputValue) {
        filters["datetime"] = dateinputValue;
    }
    if (cityinputValue) {
        filters["city"] = cityinputValue.toLowerCase();
    }
    if (stateinputValue) {
        filters["state"] = stateinputValue.toLowerCase();
    }
    if (countryinputValue) {
        filters["country"] = countryinputValue.toLowerCase();
    }

    //copy table to filter based on inputs
    var tempData = tableData
    Object.entries(filters).forEach(function([key, value]){
        tempData = tempData.filter(row => row[key] === value)
    })    // filter based on input values
    // tempData = tempData.filter(ufo => ufo.datetime === dateinputValue);
    // console.log(tempData
    // tempData = tempData.filter(ufo => ufo.city === cityinputValue.toLowerCase());
    // console.log(tempData);

    // tempData = tempData.filter(ufo => ufo.state === stateinputValue.toLowerCase());
    // console.log(tempData);

    // tempData = tempData.filter(ufo => ufo.country === countryinputValue.toLowerCase());
    // console.log(tempData);

    //create an array of filtered UFO sightings

    //create an array of filtered UFO sightings
    tempData.forEach(function(filteredUFO) {
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
//             Object.entries(tempData).forEach(function ([key, value]) {
//                 var tbody = d3.select("tbody");
//                 //console.log(filteredUFO);
//                 var row = tbody.append("tr");
//                 console.log(key, value);
//                 var cell = row.append("td");
//                 cell.text(value);
//         });
//     }
// }

// store the data in a list

// loop through each parameter in the filter object

// for each parameter compare the full list of data to make sure that it matches the filter parameter

    // //variable to store any input
    // if (dateFilterData.length != 0) {
    //     ufoTable.html("");
    //     //create an array of filtered UFO sightings
    //     dateFilterData.forEach(function (filteredUFO) {
    //         var tbody = d3.select("tbody");
    //         console.log(filteredUFO);
    //         var row = tbody.append("tr");
    //         Object.entries(filteredUFO).forEach(function ([key, value]) {
    //             console.log(key, value);
    //             var cell = row.append("td");
    //             cell.text(value);
    //         });
    //     });
    // }
    // else if (cityFilterData.length != 0) {
    //     //create an array of filtered UFO sightings
    //     ufoTable.html("");
    //     cityFilterData.forEach(function(filteredUFO) {
    //         var tbody = d3.select("tbody");
    //         console.log(filteredUFO);
    //         var row = tbody.append("tr");
    //         Object.entries(filteredUFO).forEach(function([key, value]) {
    //             console.log(key, value);
    //             var cell = row.append("td");
    //             cell.text(value);
    //         });
    //     });
    // }
    // else if (stateFilterData.length != 0) {
    //     //create an array of filtered UFO sightings
    //     ufoTable.html("");
    //     stateFilterData.forEach(function(filteredUFO) {
    //         var tbody = d3.select("tbody");
    //         console.log(filteredUFO);
    //         var row = tbody.append("tr");
    //         Object.entries(filteredUFO).forEach(function([key, value]) {
    //             console.log(key, value);
    //             var cell = row.append("td");
    //             cell.text(value);
    //         });
    //     });
    // }
    // else if (countryFilterData.length != 0) {
    //     //create an array of filtered UFO sightings
    //     ufoTable.html("");
    //     countryFilterData.forEach(function(filteredUFO) {
    //         var tbody = d3.select("tbody");
    //         console.log(filteredUFO);
    //         var row = tbody.append("tr");
    //         Object.entries(filteredUFO).forEach(function([key, value]) {
    //             console.log(key, value);
    //             var cell = row.append("td");
    //             cell.text(value);
    //         });
    //     });
    // }
    // else {
    //     alert("No results found!")
    // }
//}