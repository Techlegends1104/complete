function searchBooks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('bookTable');
    const tr = table.getElementsByTagName('tr');
    let found = false;

    for (let i = 1; i < tr.length; i++) { // skip header
        let tdCode = tr[i].getElementsByTagName('td')[0];
        let tdName = tr[i].getElementsByTagName('td')[1];
        let tdAuthor = tr[i].getElementsByTagName('td')[2];

        if (tdCode || tdName || tdAuthor) {
            let codeValue = tdCode.textContent || tdCode.innerText;
            let nameValue = tdName.textContent || tdName.innerText;
            let authorValue = tdAuthor.textContent || tdAuthor.innerText;

            if (
                codeValue.toUpperCase().indexOf(filter) > -1 ||
                nameValue.toUpperCase().indexOf(filter) > -1 ||
                authorValue.toUpperCase().indexOf(filter) > -1
            ) {
                tr[i].style.display = "";
                found = true;
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    const noResultRow = document.getElementById('noResultRow');
    if (!found) {
        if (!noResultRow) {
            const row = table.insertRow();
            row.id = 'noResultRow';
            const cell = row.insertCell(0);
            cell.colSpan = table.rows[0].cells.length;
            cell.style.textAlign = 'center';
            cell.style.padding = '20px';
            cell.innerText = 'No matching books found!';
        }
    } else {
        if (noResultRow) {
            noResultRow.remove();
        }
    }
}

// Event listeners
document.getElementById('searchBtn').addEventListener('click', searchBooks);

document.getElementById('searchInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBooks();
    }
});

// Load books when page loads
showBooks('CSE');




