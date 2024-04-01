document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var fileInput = document.getElementById('fileToUpload');
        var file = fileInput.files[0]; 

        if (file.size > 16777216) { // 16 MB in bytes
            alert('File size must not exceed 16 MB.');
            return;
        }

        submitFile(file);
    });

    function submitFile(file) {
        var formData = new FormData();
        formData.append('file', file);

        fetch('uploadFile.php', {
            method: 'POST',
            body: formData
        })
            .then(function(response) {
                if (response.ok) {
                    throw new Error('Failed to upload file.');
                }
                alert('File uploaded successfully!');
                form.reset();
            })
            .catch(function(error) {
                alert(error.message);
            });
    }
});

