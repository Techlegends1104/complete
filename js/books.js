const books = {
    CSE: [
        { code: "CSE101", name: "Introduction to Algorithms", author: "Thomas H. Cormen" },
        { code: "CSE102", name: "Operating System Concepts", author: "Abraham Silberschatz" },
        { code: "CSE103", name: "Database System Concepts", author: "Henry F. Korth" },
        { code: "CSE104", name: "Computer Networking: Principles", author: "Andrew S. Tanenbaum" },
        { code: "CSE105", name: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell" },
        { code: "CSE106", name: "Java Programming", author: "Herbert Schildt" },
        { code: "CSE107", name: "Python Crash Course", author: "Eric Matthes" },
        { code: "CSE108", name: "Head First Java", author: "Kathy Sierra" },
        { code: "CSE109", name: "Data Structures and Algorithms in Java", author: "Robert Lafore" },
        { code: "CSE110", name: "Clean Code", author: "Robert C. Martin" },
        { code: "CSE111", name: "Design Patterns", author: "Erich Gamma" },
        { code: "CSE112", name: "Effective Java", author: "Joshua Bloch" },
        { code: "CSE113", name: "HTML and CSS: Design and Build Websites", author: "Jon Duckett" },
        { code: "CSE114", name: "JavaScript: The Good Parts", author: "Douglas Crockford" },
        { code: "CSE115", name: "React Up & Running", author: "Stoyan Stefanov" },
        { code: "CSE116", name: "Node.js Design Patterns", author: "Mario Casciaro" },
        { code: "CSE117", name: "Linux Administration Handbook", author: "Evi Nemeth" },
        { code: "CSE118", name: "The Pragmatic Programmer", author: "Andrew Hunt" },
        { code: "CSE119", name: "Cybersecurity Essentials", author: "Charles J. Brooks" },
        { code: "CSE120", name: "Blockchain Basics", author: "Daniel Drescher" },
        { code: "CSE121", name: "Computer Graphics with OpenGL", author: "Donald Hearn" },
        { code: "CSE122", name: "Deep Learning with Python", author: "François Chollet" },
        { code: "CSE123", name: "Introduction to Machine Learning", author: "Alpaydin" },
        { code: "CSE124", name: "Cryptography and Network Security", author: "William Stallings" },
        { code: "CSE125", name: "Software Engineering", author: "Ian Sommerville" },
        { code: "CSE126", name: "PHP & MySQL Web Development", author: "Luke Welling" },
        { code: "CSE127", name: "Programming Rust", author: "Jim Blandy" },
        { code: "CSE128", name: "Swift Programming: The Big Nerd Ranch Guide", author: "Matthew Mathias" },
        { code: "CSE129", name: "React Native in Action", author: "Nader Dabit" },
        { code: "CSE130", name: "Flutter for Beginners", author: "Marco L. Napoli" },
        { code: "CSE131", name: "Android Programming", author: "Bill Phillips" },
        { code: "CSE132", name: "Full Stack JavaScript Development", author: "Eric Elliott" },
        { code: "CSE133", name: "Introduction to Cloud Computing", author: "Rajkumar Buyya" },
        { code: "CSE134", name: "Docker in Action", author: "Jeff Nickoloff" },
        { code: "CSE135", name: "Kubernetes Up & Running", author: "Kelsey Hightower" },
        { code: "CSE136", name: "Hands-on AWS", author: "Frank Kane" },
        { code: "CSE137", name: "Python Machine Learning", author: "Sebastian Raschka" },
        { code: "CSE138", name: "TensorFlow for Deep Learning", author: "Tom Hope" },
        { code: "CSE139", name: "Hadoop: The Definitive Guide", author: "Tom White" },
        { code: "CSE140", name: "Big Data Fundamentals", author: "Thomas Erl" },
        { code: "CSE141", name: "Agile Software Development", author: "Robert C. Martin" },
        { code: "CSE142", name: "Penetration Testing", author: "Georgia Weidman" },
        { code: "CSE143", name: "Network Security Essentials", author: "William Stallings" },
        { code: "CSE144", name: "CompTIA Security+", author: "Mike Meyers" },
        { code: "CSE145", name: "CCNA Guide to Networking", author: "Richard Deal" },
        { code: "CSE146", name: "Wireless Communications", author: "Theodore S. Rappaport" },
        { code: "CSE147", name: "Computer Organization", author: "William Stalling" },
        { code: "CSE148", name: "Assembly Language Step-By-Step", author: "Jeff Duntemann" },
        { code: "CSE149", name: "Quantum Computing for Everyone", author: "Chris Bernhardt" },
        { code: "CSE150", name: "The Art of Computer Programming", author: "Donald Knuth" }
      ],
       
    Electrical: [
        { code: "EE101", name: "Circuit Theory", author: "Hayt" },
        { code: "EE102", name: "Control Systems", author: "Nagrath" }
    ],
    Mechanical: [
        { code: "ME101", name: "Thermodynamics", author: "Cengel" },
        { code: "ME102", name: "Fluid Mechanics", author: "Frank White" }
    ],
    Metallurgy: [
        { code: "MT101", name: "Material Science", author: "Callister" },
        { code: "MT102", name: "Physical Metallurgy", author: "Sidney Avner" }
    ]
};

// Function to display books of the selected branch and hide other branches
function showBooks(branch) {
    // Hide all branch cards except the selected one
    const branchCards = document.querySelectorAll('.branch-card');
    branchCards.forEach(card => {
        if (!card.classList.contains(branch)) {
            card.style.display = 'none';
        }
    });

    // Display the book section
    const bookSection = document.getElementById('bookSection');
    bookSection.classList.add('active');

    // Fill the table with books from the selected branch
    const tbody = document.getElementById('bookTableBody');
    tbody.innerHTML = '';

    books[branch].forEach(book => {
        const row = `<tr>
            <td>${book.code}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td><button class="borrow-button" onclick="borrowBook()">Borrow</button></td>
        </tr>`;
        tbody.innerHTML += row;
    });

    // Show the back button
    const backButton = document.getElementById('backButton');
    backButton.style.display = 'inline-block';
}
// Function to show a pop-up message when the Borrow button is clicked
// Function to show a pop-up message when the Borrow button is clicked
function borrowBook() {
    Swal.fire({
        title: "Request Sent!",
        text: "Your request to borrow the book has been sent to the admin. Thank you!",
        icon: "success",
        confirmButtonText: "OK"
    });
}


// Function to filter books based on search input
function searchBooks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('bookTable');
    const tr = table.getElementsByTagName('tr');
    let found = false;

    for (let i = 1; i < tr.length; i++) { // Start from 1 to skip header row
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

    // Handle no result message
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

// Function to go back to the branch selection
function goBack() {
    // Show all branch cards again
    const branchCards = document.querySelectorAll('.branch-card');
    branchCards.forEach(card => {
        card.style.display = 'block';
    });

    // Hide the book section
    const bookSection = document.getElementById('bookSection');
    bookSection.classList.remove('active');

    // Hide the back button
    const backButton = document.getElementById('backButton');
    backButton.style.display = 'none';

    // Clear search input and reset table
    document.getElementById('searchInput').value = '';
    searchBooks();
}

// Event listener for Enter key press inside search input
document.getElementById('searchInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBooks();
    }
});

// Event listener for clicking search button
document.getElementById('searchButton').addEventListener('click', function () {
    searchBooks();
});
function adjustPlaceholder() {
    const input = document.getElementById('searchInput');
    if (window.innerWidth <= 600) {
        input.placeholder = "Search books...";
    } else {
        input.placeholder = "Search by Book Code, Name, or Author";
    }
}

// Adjust placeholder when the page loads
window.addEventListener('load', adjustPlaceholder);

// Adjust placeholder when the user resizes the window
window.addEventListener('resize', adjustPlaceholder);
