function generateCertificate() {
    const name = document.getElementById('name').value;
    const college = document.getElementById('myDropdown').value === 'Others' 
        ? document.getElementById('otherText').value 
        : document.getElementById('myDropdown').value;
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    if (!name || !college) {
        alert('Please fill out all fields.');
        return;
    }

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();

    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        // Calculate center point for name placement
        const nameCenterX = (331 + 1687) / 2;
        const nameCenterY = (690 + 825) / 2;

        // Calculate center point for college name placement
        const collegeCenterX = (490 + 1533) / 2;
        const collegeCenterY = (933 + 1037) / 2;

        // Calculate center point for date placement (adjusted more to the left)
        const dateCenterX = (1290 + 1857) / 2 - 100; // Adjusted 100 pixels to the left
        const dateCenterY = (1063 + 1133) / 2;

        // Font styling for name
        context.font = 'bold 40px Arial';
        context.fillStyle = '#000';
        context.textAlign = 'center';

        // Place name at calculated center coordinates
        context.fillText(name, nameCenterX, nameCenterY);

        // Font styling for college name (increased font size)
        context.font = 'bold italic 36px Arial';

        // Place college name at calculated center coordinates
        context.fillText(college, collegeCenterX, collegeCenterY);

        // Font styling for date (increased font size)
        context.font = 'italic 24px Arial';

        // Place date at adjusted center coordinates
        context.fillText(currentDate, dateCenterX, dateCenterY);

        // Create a download link
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificate.png';

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
    };

    // Replace 'certificate-template.png' with your actual certificate image path
    image.src = 'certificate-template.png';
}

function showOtherInput() {
    var dropdown = document.getElementById("myDropdown");
    var otherInput = document.getElementById("otherInput");
    
    if (dropdown.value === "Others") {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
}
