const stateData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any existing data
    tbody.html("");

    // Build the rows of the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Fill the cells of each row with a value
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleFilters() {
    let state = d3.select("#states").property("value");
    let year = d3.select("#years").property("value");
    let gov = d3.select("#govs").property("value");
    let filteredData = stateData;

    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    };
    if (year) {
        filteredData = filteredData.filter(row => row.year === year);
    };
    if (gov) {
        filteredData = filteredData.filter(row => row.governor == gov);
    };

    buildTable(filteredData);
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("state-data");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "desc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;

        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];

            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                    }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            };
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "desc") {
                dir = "asc";
                switching = true;
            }
        }
    }
}

function callAveragesA() {
    function AveragesA(elementid, columnindex, precedingtext) {
        var table, x, i, rows, avg, rowcount, output = 0;
        table = document.getElementById("state-data");
        output = document.getElementById(elementid);
        rows = table.rows;
        let total = 0;
        for (i = 1; i < (rows.length); i++) {
            x = rows[i].getElementsByTagName("td")[columnindex];
            x = Number(x.innerHTML);
            total = total + x;
            rowcount = i;
        }
        avg = total / rowcount;
        avg = avg.toFixed(3);
        output.innerHTML = "";
        output.append(precedingtext + avg);
    }

    AveragesA("PopAvgOutputA", 3, "Population per Area: ");
    AveragesA("FARateAvgOutputA", 4, "Firearms Rate: ");
    AveragesA("FADeathsAvgOutputA", 5, "Firearms Deaths: ");
    AveragesA("FPRateAvgOutputA", 6, "Flu/Pneumonia Rate: ");
    AveragesA("FPDeathsAvgOutputA", 7, "Flu/Pneumonia Deaths: ");
    AveragesA("HRateAvgOutputA", 8, "Homicide Rate: ");
    AveragesA("HDeathsAvgOutputA", 9, "Homicide Deaths: ");
}

function callAveragesB() {
    function AveragesB(elementid, columnindex, precedingtext) {
        var table, x, i, rows, avg, rowcount, output = 0;
        table = document.getElementById("state-data");
        output = document.getElementById(elementid);
        rows = table.rows;
        let total = 0;
        for (i = 1; i < (rows.length); i++) {
            x = rows[i].getElementsByTagName("td")[columnindex];
            x = Number(x.innerHTML);
            total = total + x;
            rowcount = i;
        }
        avg = total / rowcount;
        avg = avg.toFixed(3);
        output.innerHTML = "";
        output.append(precedingtext + avg);
    }

    AveragesB("PopAvgOutputB", 3, "Population per Area: ");
    AveragesB("FARateAvgOutputB", 4, "Firearms Rate: ");
    AveragesB("FADeathsAvgOutputB", 5, "Firearms Deaths: ");
    AveragesB("FPRateAvgOutputB", 6, "Flu/Pneumonia Rate: ");
    AveragesB("FPDeathsAvgOutputB", 7, "Flu/Pneumonia Deaths: ");
    AveragesB("HRateAvgOutputB", 8, "Homicide Rate: ");
    AveragesB("HDeathsAvgOutputB", 9, "Homicide Deaths: ");
}

function callAveragesC() {
    function AveragesC(elementid, columnindex, precedingtext) {
        var table, x, i, rows, avg, rowcount, output = 0;
        table = document.getElementById("state-data");
        output = document.getElementById(elementid);
        rows = table.rows;
        let total = 0;
        for (i = 1; i < (rows.length); i++) {
            x = rows[i].getElementsByTagName("td")[columnindex];
            x = Number(x.innerHTML);
            total = total + x;
            rowcount = i;
        }
        avg = total / rowcount;
        avg = avg.toFixed(3);
        output.innerHTML = "";
        output.append(precedingtext + avg);
    }

    AveragesC("PopAvgOutputC", 3, "Population per Area: ");
    AveragesC("FARateAvgOutputC", 4, "Firearms Rate: ");
    AveragesC("FADeathsAvgOutputC", 5, "Firearms Deaths: ");
    AveragesC("FPRateAvgOutputC", 6, "Flu/Pneumonia Rate: ");
    AveragesC("FPDeathsAvgOutputC", 7, "Flu/Pneumonia Deaths: ");
    AveragesC("HRateAvgOutputC", 8, "Homicide Rate: ");
    AveragesC("HDeathsAvgOutputC", 9, "Homicide Deaths: ");
}

function callAveragesD() {
    function AveragesD(elementid, columnindex, precedingtext) {
        var table, x, i, rows, avg, rowcount, output = 0;
        table = document.getElementById("state-data");
        output = document.getElementById(elementid);
        rows = table.rows;
        let total = 0;
        for (i = 1; i < (rows.length); i++) {
            x = rows[i].getElementsByTagName("td")[columnindex];
            x = Number(x.innerHTML);
            total = total + x;
            rowcount = i;
        }
        avg = total / rowcount;
        avg = avg.toFixed(3);
        output.innerHTML = "";
        output.append(precedingtext + avg);
    }

    AveragesD("PopAvgOutputD", 3, "Population per Area: ");
    AveragesD("FARateAvgOutputD", 4, "Firearms Rate: ");
    AveragesD("FADeathsAvgOutputD", 5, "Firearms Deaths: ");
    AveragesD("FPRateAvgOutputD", 6, "Flu/Pneumonia Rate: ");
    AveragesD("FPDeathsAvgOutputD", 7, "Flu/Pneumonia Deaths: ");
    AveragesD("HRateAvgOutputD", 8, "Homicide Rate: ");
    AveragesD("HDeathsAvgOutputD", 9, "Homicide Deaths: ");
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

// Build the table when the page loads
buildTable(stateData);