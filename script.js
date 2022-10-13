let chess_plate_rows = document.querySelectorAll('table>tbody>tr');
let chess_plate_cells_onclick = document.querySelectorAll('table>tbody>tr>td');

chess_plate_rows.forEach(function(row, index, list){
    let chess_plate_cells = row.querySelectorAll('td');

    chess_plate_cells.forEach(function(cell, i, list){
        if (i % 2 == 0 && index % 2 == 0 || i % 2 !== 0 && index % 2 !== 0) {
            cell.classList.add('black-cell')
        }
    })
})

chess_plate_cells_onclick.forEach(function(cell){
    cell.addEventListener('click', function() {
        cell.classList.toggle("black-cell");
     })
})