document.addEventListener("DOMContentLoaded", function () {
    console.log("Student Dashboard loaded successfully.");

    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('collapsed');
        document.getElementById('content').classList.toggle('expanded');
    });
});
