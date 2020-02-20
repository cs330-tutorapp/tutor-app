const filterTable = () => {
    const searchTerm = document.querySelector("#search").value;
    const table = document.querySelector("#myTable");
    const rows = document.querySelectorAll("tr");
    for (const row of rows) {
       const firstcell = row.querySelector("td");
       if (!firstcell) {
          continue;
       }
       const isMatch = checkMatch(firstcell, searchTerm);
       if (isMatch) {
          row.classList.remove('hide');
       } else {
          row.classList.add('hide');
       }
    }
 };

 const checkMatch = (cell, searchTerm) => {
<<<<<<< HEAD:filter.js
      const name = cell.innerHTML;
      if (name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
          return true;
      }
=======
    for(var i = 0; i < cell.length - 1; i++) {
        const name = cell[i].innerHTML; 
        if (name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
            return true;
        }
    }
    
>>>>>>> project_5:js/filter.js
    return false;
 };

 document.querySelector('#search').onkeyup = filterTable;
