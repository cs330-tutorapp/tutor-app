const filterTable = () => {
    const searchTerm = document.querySelector("#search").value;
    console.log(searchTerm);
    const table = document.querySelector("#myTable");
    const rows = document.querySelectorAll(".container");
    for (const row of rows) {
       const firstCell = row.querySelector("p");
       console.log(firstCell.innerHTML);
       if (!firstCell) {
          continue;
       }
       const isMatch = checkMatch(firstCell, searchTerm);
       if (isMatch) {
          row.classList.remove('hide');
       } else {
          row.classList.add('hide');
       }      
    }
 };
 
 const checkMatch = (cell, searchTerm) => {
    const name = cell.innerHTML; 
    if (name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
       return true;
    }
    return false;
 };
 
 document.querySelector('#search').onkeyup = filterTable;

