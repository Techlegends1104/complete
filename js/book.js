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
      Mechanical: [
        { code: "ME101", name: "Thermodynamics", author: "Cengel" },
        { code: "ME102", name: "Fluid Mechanics", author: "Frank White" },
        { code: "ME103", name: "Manufacturing Technology", author: "R.K. Jain" },
        { code: "ME104", name: "Fluid Mechanics & Machine", author: "S. K. Som" },
        { code: "ME105", name: "Thermal Engineering", author: "P.L. Ballaney" },
        { code: "ME106", name: "Theory of Machine", author: "R.S. Khurmi" },
        { code: "ME107", name: "Theory of Machine", author: "J.S. Brar" },
        { code: "ME108", name: "Adv. Manufacturing Technology", author: "B. S. Raghuwanshi" },
        { code: "ME109", name: "Metrology & Quality Control", author: "R.K. Jain" },
        { code: "ME110", name: "Design of Machine Elements", author: "V.B. Bhandari" },
        { code: "ME111", name: "Engineering Mechanics", author: "S. Timoshenko" },
        { code: "ME112", name: "Machine Design", author: "Norton" },
        { code: "ME113", name: "Heat Transfer", author: "J.P. Holman" },
        { code: "ME114", name: "Manufacturing Processes", author: "H. N. Gupta" },
        { code: "ME115", name: "Mechanical Vibrations", author: "G.K. Grover" },
        { code: "ME116", name: "IC Engine and Gas Turbines", author: "V. Ganesan" },
        { code: "ME117", name: "Refrigeration & Air Conditioning", author: "C.P. Arora" },
        { code: "ME118", name: "Operations Research", author: "J.K. Sharma" },
        { code: "ME119", name: "Strength of Materials", author: "R.K. Bansal" },
        { code: "ME120", name: "Engineering Thermodynamics", author: "K.K. Parasar" },
        { code: "ME121", name: "Finite Element Analysis", author: "S. S. Rao" },
        { code: "ME122", name: "Advanced Heat Transfer", author: "F.P. Incropera" },
        { code: "ME123", name: "Automobile Engineering", author: "R.B. Gupta" },
        { code: "ME124", name: "Manufacturing Processes II", author: "B. L. Juneja" },
        { code: "ME125", name: "Mechanical Engineering Design", author: "J.E. Shigley" },
        { code: "ME126", name: "Theory of Elasticity", author: "Timoshenko" },
        { code: "ME127", name: "Computational Fluid Dynamics", author: "J.D. Anderson" },
        { code: "ME128", name: "Foundry Engineering", author: "P. L. Jain" },
        { code: "ME129", name: "Non-Destructive Testing", author: "B. C. Verma" },
        { code: "ME130", name: "Casting, Forming & Welding", author: "Raghuvanshi" },
        { code: "ME131", name: "Advanced Fluid Mechanics", author: "C.M. Mathur" },
        { code: "ME132", name: "Design of Heat Exchangers", author: "J.K. Kothari" },
        { code: "ME133", name: "Power Plant Engineering", author: "P.K. Nag" },
        { code: "ME134", name: "Manufacturing Engineering", author: "S. K. Hajra" },
        { code: "ME135", name: "Robotics", author: "K.S. Fu" },
        { code: "ME136", name: "Mechatronics", author: "W. Bolton" },
        { code: "ME137", name: "Control Systems Engineering", author: "I.J. Nagrath" },
        { code: "ME138", name: "Applied Thermodynamics", author: "C.P. Arora" },
        { code: "ME139", name: "Mechanical Measurements", author: "A.K. Jain" },
        { code: "ME140", name: "Industrial Engineering", author: "S.K. Sharma" },
        { code: "ME141", name: "Process Planning and Cost Estimation", author: "P. N. Rao" },
        { code: "ME142", name: "Advanced Manufacturing Processes", author: "J.P. Gupta" },
        { code: "ME143", name: "Optimization Techniques", author: "S.S. Rao" },
        { code: "ME144", name: "Engineering Drawing", author: "N.D. Bhatt" },
        { code: "ME145", name: "Fluid Power Engineering", author: "S. R. Majumdar" },
        { code: "ME146", name: "Hydraulics & Pneumatics", author: "A. K. Jain" },
        { code: "ME147", name: "Engineering Metallurgy", author: "R. L. Sah" },
        { code: "ME148", name: "Experimental Stress Analysis", author: "J. W. Dally" },
        { code: "ME149", name: "Material Science", author: "V. Raghavan" },
        { code: "ME150", name: "Advanced Machining Processes", author: "R. K. Jain" }
    ],
    
    Electrical: [
        { code: "EE101", name: "Circuit Theory", author: "Hayt" },
        { code: "EE102", name: "Control Systems", author: "Nagrath" },
        { code: "EE103", name: "Electrical Machines", author: "I.J. Nagrath" },
        { code: "EE104", name: "Power System Engineering", author: "C.L. Wadhwa" },
        { code: "EE105", name: "Power Electronics", author: "M.H. Rashid" },
        { code: "EE106", name: "Electrical Power Generation", author: "S. N. Singh" },
        { code: "EE107", name: "Analog Electronics", author: "J. Millman" },
        { code: "EE108", name: "Digital Electronics", author: "M. Morris Mano" },
        { code: "EE109", name: "Electrical Measurements & Instrumentation", author: "A.K. Sawhney" },
        { code: "EE110", name: "Electromagnetic Fields", author: "Sadiku" },
        { code: "EE111", name: "Electrical Machines II", author: "B.L. Theraja" },
        { code: "EE112", name: "Linear Control Systems", author: "Ogata" },
        { code: "EE113", name: "Signals and Systems", author: "A.V. Oppenheim" },
        { code: "EE114", name: "Power System Analysis", author: "J. Duncan Glover" },
        { code: "EE115", name: "Switchgear and Protection", author: "S.K. Sahdev" },
        { code: "EE116", name: "Microprocessors & Microcontrollers", author: "Ramesh S. Gaonkar" },
        { code: "EE117", name: "Electrical Machines I", author: "P.S. Bimbhra" },
        { code: "EE118", name: "Transmission and Distribution", author: "S. L. Uppal" },
        { code: "EE119", name: "Electrical Engineering Materials", author: "S. K. Bhattacharya" },
        { code: "EE120", name: "Electrical Drives and Control", author: "G.K. Dubey" },
        { code: "EE121", name: "High Voltage Engineering", author: "M.S. Naidu" },
        { code: "EE122", name: "Renewable Energy", author: "G.D. Rai" },
        { code: "EE123", name: "Solid State Devices", author: "Ben G. Streetman" },
        { code: "EE124", name: "Advanced Power Electronics", author: "B. K. Bose" },
        { code: "EE125", name: "Electric Machines: Steady-State Theory", author: "William H. Hayt" },
        { code: "EE126", name: "Industrial Automation", author: "T. J. A. Meijer" },
        { code: "EE127", name: "Advanced Control Systems", author: "B.C. Kuo" },
        { code: "EE128", name: "Electrical Estimating and Costing", author: "S.L. Uppal" },
        { code: "EE129", name: "Power Electronics and Drives", author: "S. B. Soman" },
        { code: "EE130", name: "Digital Signal Processing", author: "John G. Proakis" },
        { code: "EE131", name: "Communication Systems", author: "H.Taub & D.L. Schilling" },
        { code: "EE132", name: "Advanced Digital Communication", author: "Leon W. Couch" },
        { code: "EE133", name: "Microelectronic Circuits", author: "Sedra & Smith" },
        { code: "EE134", name: "Electronics Devices and Circuits", author: "R. L. Boylestad" },
        { code: "EE135", name: "Electromagnetic Field Theory", author: "M. N. O. Sadiku" },
        { code: "EE136", name: "Electrical Power Quality", author: "M.H. Bollen" },
        { code: "EE137", name: "Electrical Transmission Lines", author: "John D. Ryder" },
        { code: "EE138", name: "Switching Theory and Logic Design", author: "M. Morris Mano" },
        { code: "EE139", name: "Electrical Circuit Analysis", author: "W.H. Hayt" },
        { code: "EE140", name: "Electrical System Design", author: "Ned Mohan" },
        { code: "EE141", name: "Electric Vehicles", author: "James Larminie" },
        { code: "EE142", name: "Smart Grid Technology", author: "James Momoh" },
        { code: "EE143", name: "Electrical Transients in Power Systems", author: "M. S. Sarma" },
        { code: "EE144", name: "Instrumentation & Control Systems", author: "A.K. Sawhney" },
        { code: "EE145", name: "Electrical Engineering Fundamentals", author: "Vincent Del Toro" },
        { code: "EE146", name: "Circuit Analysis", author: "J. David Irwin" },
        { code: "EE147", name: "Introduction to Power Systems", author: "A. S. Pabla" },
        { code: "EE148", name: "Power Electronics for Renewable Energy", author: "J. P. Choi" },
        { code: "EE149", name: "Electrical Engineering in Energy Systems", author: "D. R. McDonald" },
        { code: "EE150", name: "Automation and Control Systems", author: "Frank D. Petruzella" }
    ],
    
    Metallurgy: [
        { code: "MT101", name: "Material Science", author: "Callister" },
        { code: "MT102", name: "Physical Metallurgy", author: "Sidney Avner" },
        { code: "MT103", name: "Mechanical Metallurgy", author: "George E. Dieter" },
        { code: "MT104", name: "Introduction to Physical Metallurgy", author: "Baldev Raj" },
        { code: "MT105", name: "Materials Science and Engineering", author: "William D. Callister" },
        { code: "MT106", name: "Heat Treatment of Metals", author: "ASM Handbook" },
        { code: "MT107", name: "Phase Diagrams of Binary Alloys", author: "Massimo L. Santoro" },
        { code: "MT108", name: "Principles of Materials Science and Engineering", author: "William F. Smith" },
        { code: "MT109", name: "Metallurgical Thermodynamics", author: "J.R. Sampath" },
        { code: "MT110", name: "Welding Metallurgy", author: "Sindo Kou" },
        { code: "MT111", name: "Corrosion Engineering", author: "Mars G. Fontana" },
        { code: "MT112", name: "Engineering Alloys", author: "K.R. Pye" },
        { code: "MT113", name: "Physical Metallurgy Principles", author: "R.W. Cahn" },
        { code: "MT114", name: "Ferrous Metallurgy", author: "T. S. P. Murthy" },
        { code: "MT115", name: "Metallurgy of Welding", author: "J. F. Lancaster" },
        { code: "MT116", name: "Materials Selection in Mechanical Design", author: "Michael F. Ashby" },
        { code: "MT117", name: "The Structure of Materials", author: "Vikram R. Varma" },
        { code: "MT118", name: "Ceramics and Composites", author: "W.D. Kingery" },
        { code: "MT119", name: "Physical Metallurgy of Steels", author: "George Krauss" },
        { code: "MT120", name: "Fundamentals of Metallic Corrosion", author: "Philip A. Schweitzer" },
        { code: "MT121", name: "Advanced Metallurgical Process", author: "D. S. K. Nair" },
        { code: "MT122", name: "Foundry Technology", author: "P.L. Jain" },
        { code: "MT123", name: "Materials Science and Engineering: An Introduction", author: "William D. Callister" },
        { code: "MT124", name: "Materials Characterization Techniques", author: "S. Suresh" },
        { code: "MT125", name: "Metal Forming: Mechanics and Metallurgy", author: "William F. Hosford" },
        { code: "MT126", name: "Introduction to Metallurgy", author: "Harry R. Matl" },
        { code: "MT127", name: "Composite Materials", author: "P.K. Mallick" },
        { code: "MT128", name: "Extraction of Non-Ferrous Metals", author: "H.S. Ray" },
        { code: "MT129", name: "Steel Metallurgy", author: "R. L. McMillan" },
        { code: "MT130", name: "Refractories in Metallurgy", author: "K. T. Jacob" },
        { code: "MT131", name: "Metallurgical Thermodynamics and Kinetics", author: "David G. Ricker" },
        { code: "MT132", name: "Materials Science: An Introduction", author: "James F. Shackelford" },
        { code: "MT133", name: "Non-Ferrous Metals", author: "J.C. Jindal" }
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


