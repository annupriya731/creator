const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function applyTryOn() {
  const fileInput = document.getElementById('uploadImage');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please upload an image to try on!');
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.onload = function (e) {
    img.src = e.target.result;

    img.onload = function () {
      // Draw user image on the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Simulate overlay (e.g., clothing or makeup overlay)
      simulateClothingOverlay();
    };
  };

  reader.readAsDataURL(file);
}

function simulateClothingOverlay() {
  const overlay = new Image();
  overlay.src = 'clothing_overlay.png'; // Placeholder image for clothing

  overlay.onload = function () {
    // Overlay example: Draw on top of user image
    ctx.globalAlpha = 0.7; // Make overlay semi-transparent
    ctx.drawImage(overlay, 50, 50, 200, 300);
    ctx.globalAlpha = 1.0; // Reset transparency
  };
}
