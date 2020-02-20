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
      const name = cell.innerHTML;
      if (name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
          return true;
      }
    return false;
 };

 document.querySelector('#search').onkeyup = filterTable;
