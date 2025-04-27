<?php
    $con=mysqli_connect("localhost","root","","library");
    if(!$con)
    {
        die("Connection Error");
    }
    $query="select * from books";
    $run=mysqli_query($con,$query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Management System</title>
    <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
    <script src="T.JS"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="css/book.css">
    <style>

    </style>
</head>
<body>
    <main>
        <section class="book-section">
            <div class="col-12" style="text-align: center;">
                <img src="images/left-arrow.png" alt="">
                <h2>Available Books</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Book Code</th>
                        <th>Book Name</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <?php
                            while($row=mysqli_fetch_assoc($run))
                            {
                        ?>            
                            <td><?php echo $row['book_code']?></td>
                            <td><?php echo $row['book_name']?></td>
                            <td><?php echo $row['author_name']?></td>
                    </tr>

                        <?php

                            }
                        ?>
                </tbody>
            </table>
        </section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>
</html>
