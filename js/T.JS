document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

function fetchBooks() {
  fetch("book.html")
    .then((response) => response.text())
    .then((html) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      let bookRows = doc.querySelectorAll(".book-section table tbody tr");

      let books = [];
      bookRows.forEach((row) => {
        let cells = row.querySelectorAll("td");
        if (cells.length >= 3) {
          // Ensure there are enough columns
          books.push({
            code: cells[0].innerText.trim(),
            name: cells[1].innerText.trim(),
            author: cells[2].innerText.trim(),
          });
        }
      });

      window.libraryBooks = books; // Store books globally
    })
    .catch((error) => console.error("Error fetching books:", error));
}

function searchBook() {
  let searchInput = document.getElementById("searchBox").value.trim(); // Trim input
  let resultsContainer = document.getElementById("searchResults");

  if (searchInput === "") {
    alert("Please enter a book name, code, or author before searching.");
    return;
  }

  resultsContainer.innerHTML = ""; // Clear previous results

  let books = window.libraryBooks || [];
  if (books.length === 0) {
    resultsContainer.innerHTML = "<p>Error: Book list not loaded yet.</p>";
    return;
  }

  let query = searchInput.toLowerCase();
  let filteredBooks = books.filter(
    (book) =>
      book.code.toLowerCase().includes(query) ||
      book.name.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );

  if (filteredBooks.length === 0) {
    resultsContainer.innerHTML = "<p>No books found.</p>";
    return;
  }

  let resultTable = document.createElement("table");
  resultTable.innerHTML = `
        <thead>
            <tr>
                <th>Book Code</th>
                <th>Book Name</th>
                <th>Author</th>
            </tr>
        </thead>
    `;

  let tbody = document.createElement("tbody");
  filteredBooks.forEach((book) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${book.code}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
        `;
    tbody.appendChild(row);
  });

  resultTable.appendChild(tbody);
  resultsContainer.appendChild(resultTable);
}

// DROPDOWN MENU
document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.querySelector(".dropdown-login > a");
  const dropdown = document.querySelector(".dropdown-menu-login");

  loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", function (e) {
    if (!loginLink.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});
