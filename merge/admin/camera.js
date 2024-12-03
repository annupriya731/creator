document.getElementById('start-camera').addEventListener('click', async function() {
  const video = document.getElementById('camera-stream');

  try {
    // Access the user's camera
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Set the video source to the camera stream
    video.srcObject = stream;
  } catch (error) {
    console.error('Error accessing the camera:', error);
    alert('Could not access the camera. Please allow camera permissions.');
  }
});
