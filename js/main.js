
// Create Poup with The Image 

let ourGallery = document.querySelectorAll('.row > div > img');

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Create overlay Element
        let overlay = document.createElement('div');

        // Add Class to Overlay 
        overlay.className = 'Popup-overlay';

        // Append Overlay To body 
        document.body.appendChild(overlay);

        // Create The Popup Box 
        let popupBox = document.createElement('div');

        // Add Class To The popup Box
        popupBox.className = 'popup-box';

        // Create The Image
        let popupImage = document.createElement('img');

        // Set Image Src 
        popupImage.src = img.src;

        // Add Image To popup Box 
        popupBox.appendChild(popupImage);

        // Append The popup Box To Body 
        document.body.appendChild(popupBox);

        // Create The Close Span 
        let closeButton = document.createElement('span');

        // Create the Close Button Text 
        let closeButtonText = document.createTextNode('X');

        // Append Text To Close Button 
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button 
        closeButton.className = 'close-button';

        // Add Close Button To The popup Box
        popupBox.appendChild(closeButton);

        // Close Popup To Click Close 
        closeButton.addEventListener('click', function() {
            popupBox.style.display = 'none';
            overlay.style.display = 'none';
        })

    })

})