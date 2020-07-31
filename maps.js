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

function popAvgA() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("PopAvgOutputA");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[3];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Population per Area: " + avg);
};

function farateAvgA() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FARateAvgOutputA");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[4];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Firearms Rate: " + avg);
};

function fadeathsAvgA() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FADeathsAvgOutputA");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[5];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Firearms Deaths: " + avg);
};

function fprateAvgA() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FPRateAvgOutputA");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[6];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Flu/Pneumonia Rate: " + avg);
};

function fpdeathsAvgA() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FPDeathsAvgOutputA");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[7];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Flu/Pneumonia Deaths: " + avg);
};

function hrateAvgA() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("HRateAvgOutputA");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[8];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Homicide Rate: " + avg);
};

function hdeathsAvgA() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("HDeathsAvgOutputA");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[9];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Homicide Deaths: " + avg);
}

function popAvgB() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("PopAvgOutputB");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[3];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Population per Area: " + avg);
};

function farateAvgB() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FARateAvgOutputB");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[4];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Firearms Rate: " + avg);
};

function fadeathsAvgB() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FADeathsAvgOutputB");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[5];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Firearms Deaths: " + avg);
};

function fprateAvgB() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FPRateAvgOutputB");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[6];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Flu/Pneumonia Rate: " + avg);
};

function fpdeathsAvgB() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FPDeathsAvgOutputB");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[7];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Flu/Pneumonia Deaths: " + avg);
};

function hrateAvgB() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("HRateAvgOutputB");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[8];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Homicide Rate: " + avg);
};

function hdeathsAvgB() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("HDeathsAvgOutputB");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[9];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Homicide Deaths: " + avg);
}

function popAvgC() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("PopAvgOutputC");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[3];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Population per Area: " + avg);
};

function farateAvgC() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FARateAvgOutputC");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[4];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Firearms Rate: " + avg);
};

function fadeathsAvgC() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FADeathsAvgOutputC");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[5];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Firearms Deaths: " + avg);
};

function fprateAvgC() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FPRateAvgOutputC");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[6];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Flu/Pneumonia Rate: " + avg);
};

function fpdeathsAvgC() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FPDeathsAvgOutputC");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[7];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Flu/Pneumonia Deaths: " + avg);
};

function hrateAvgC() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("HRateAvgOutputC");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[8];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Homicide Rate: " + avg);
};

function hdeathsAvgC() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("HDeathsAvgOutputC");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[9];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Homicide Deaths: " + avg);
}

function popAvgD() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("PopAvgOutputD");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[3];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Population per Area: " + avg);
};

function farateAvgD() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FARateAvgOutputD");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[4];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Firearms Rate: " + avg);
};

function fadeathsAvgD() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FADeathsAvgOutputD");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[5];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Firearms Deaths: " + avg);
};

function fprateAvgD() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FPRateAvgOutputD");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[6];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Flu/Pneumonia Rate: " + avg);
};

function fpdeathsAvgD() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("FPDeathsAvgOutputD");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[7];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Flu/Pneumonia Deaths: " + avg);
};

function hrateAvgD() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("HRateAvgOutputD");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[8];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Homicide Rate: " + avg);
};

function hdeathsAvgD() {
    var table, x, i, rows, avg, rowcount, output = 0;
    table = document.getElementById("state-data");
    output = document.getElementById("HDeathsAvgOutputD");
    rows = table.rows;
    let total = 0;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[9];
        x = Number(x.innerHTML);
        total = total + x;
        rowcount = i;
    }
    avg = total / rowcount;
    avg = avg.toFixed(3);
    output.innerHTML = "";
    output.append("Homicide Deaths: " + avg);
}

function callAveragesA() {
    popAvgA();
    farateAvgA();
    fadeathsAvgA();
    fprateAvgA(); 
    fpdeathsAvgA(); 
    hrateAvgA(); 
    hdeathsAvgA();
}

function callAveragesB() {
    popAvgB();
    farateAvgB();
    fadeathsAvgB();
    fprateAvgB(); 
    fpdeathsAvgB(); 
    hrateAvgB(); 
    hdeathsAvgB();
}

function callAveragesC() {
    popAvgC();
    farateAvgC();
    fadeathsAvgC();
    fprateAvgC(); 
    fpdeathsAvgC(); 
    hrateAvgC(); 
    hdeathsAvgC();
}

function callAveragesD() {
    popAvgD();
    farateAvgD();
    fadeathsAvgD();
    fprateAvgD(); 
    fpdeathsAvgD(); 
    hrateAvgD(); 
    hdeathsAvgD();
}

// Build the table when the page loads
buildTable(stateData);