const filterTable = () => {
    const searchTerm = document.querySelector("#search").value;
    const table = document.querySelector("#myTable");
    const rows = document.querySelectorAll("tr");
    console.log(searchTerm)
    for (const row of rows) {
       var entry = row.querySelectorAll("td");
       console.log(entry);
       if (entry.length == 0) {
          continue;
       }
       const isMatch = checkMatch(entry, searchTerm);
       if (isMatch) {
          row.classList.remove('hide');
       } else {
          row.classList.add('hide');
       }      
    }
 };
 
 const checkMatch = (cell, searchTerm) => {
    for(var i = 0; i < cell.length - 1; i++) {
        const name = cell[i].innerHTML; 
        if (name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
            return true;
        }
    }
    
    return false;
 };
 
 document.querySelector('#search').onkeyup = filterTable;