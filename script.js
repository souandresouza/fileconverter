document.getElementById('convertButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
    const format = document.getElementById('formatSelect').value;
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('format', format);

        fetch('http://localhost:3000/convert', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').textContent = data;
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please upload a file first.');
    }
});