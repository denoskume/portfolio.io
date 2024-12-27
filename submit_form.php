<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $data = "Name: $name\nEmail: $email\nAddress: $address\nSubject: $subject\nMessage: $message\n";

    // Save data to a TXT file
    $file = fopen("form_data.txt", "a");
    fwrite($file, $data);
    fclose($file);

    // Send email
    $to = "denoskume77@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $data, $headers);

    echo "Thank you for your message!";
}
?>
