// Handle image upload and virtual try-on
document.getElementById('photo-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      // Set the uploaded image as the user's photo
      document.getElementById('user-photo').src = e.target.result;
      document.getElementById('user-photo').style.display = 'block';
      document.getElementById('clothes-overlay').style.display = 'block';
    };
    
    reader.readAsDataURL(file);
  }
});

// Function to reset the virtual try-on
function resetTryOn() {
  document.getElementById('user-photo').style.display = 'none';
  document.getElementById('clothes-overlay').style.display = 'none';
  document.getElementById('photo-upload').value = ''; // Clear the file input
}
