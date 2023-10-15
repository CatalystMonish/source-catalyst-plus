// Import React and useEffect, useState hooks
import React, { useEffect, useState } from 'react';

// Import the storage object from your firebase.js file
import { storage } from '../firebase.js';

// Import the ref and getDownloadURL functions from 'firebase/storage'
import { ref, getDownloadURL } from 'firebase/storage';

function ImageDisplay() {
    // State to hold the image URL
    const [imageUrl, setImageUrl] = useState(null);

    // Effect hook to run once on component mount
    useEffect(() => {
        // Define an async function
        const fetchImage = async () => {
            try {
                // Create a reference to the file we want to download using the ref function
                var storageRef = ref(storage, '/projects/thumbnails/17hzo_Picture1.png');

                // Get the download URL using the getDownloadURL function
                var url = await getDownloadURL(storageRef);

                // Update the state with the new URL
                setImageUrl(url);
            } catch (error) {
                // Handle any errors
                console.error('Error fetching image: ', error);
            }
        };

        // Call the async function
        fetchImage();
    }, []);  // Empty dependency array means this useEffect runs once, similar to componentDidMount

    // Render
    return (
        <div>
            { imageUrl ? <img src={imageUrl} alt="Fetched from Firebase Storage" /> : 'Loading...' }
        </div>
    );
}

export default ImageDisplay;
