<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data["name"];
    $email = $data["email"];
    $message = $data["message"];

    $to = "brosefftw@gmail.com";
    $subject = "Feedback from Computer Science Hub";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        http_response_code(200);
        echo json_encode(array("message" => "Message sent successfully!"));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Failed to send message."));
    }
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Method Not Allowed"));
}
