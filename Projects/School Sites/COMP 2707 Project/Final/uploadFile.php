<?php

if ($_SERVER["REQUEST_METHOD"] === "post" && isset($_FILES['fileToUpload'])) {
    // Email settings
    $to = "karty@uwindsor.ca";
    $from = "sender@example.com";
    $subject = "File Attachment";
    $message = "This is a message with an attachment.";

    // File details
    $file = $_FILES['fileToUpload']['tmp_name'];
    $filename = $_FILES['fileToUpload']['name'];
    $fileType = $_FILES['fileToUpload']['type'];
    $fileSize = $_FILES['fileToUpload']['size'];

    // Read the file content
    $fileContent = file_get_contents($file);
    $encodedContent = chunk_split(base64_encode($fileContent));

    // Boundary 
    $boundary = md5(time());

    // Headers
    $headers = "From: " . $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n\r\n";

    // Message body
    $body = "--" . $boundary . "\r\n";
    $body .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $message . "\r\n\r\n";
    $body .= "--" . $boundary . "\r\n";
    $body .= "Content-Type: " . $fileType . "; name=\"" . $filename . "\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"" . $filename . "\"\r\n\r\n";
    $body .= $encodedContent . "\r\n\r\n";
    $body .= "--" . $boundary . "--";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully with attachment";
    } else {
        echo "Email sending failed.";
    }
}
?>
