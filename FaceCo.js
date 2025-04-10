const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const captureButton = document.getElementById("capture");
const resultText = document.getElementById("result");

// Start Webcam Stream
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error("Error accessing the webcam: ", err);
    });

// Capture Image from Webcam
captureButton.addEventListener("click", () => {
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
});

// Send Captured Image for AI Analysis
function analyzeImage() {
    const canvasData = canvas.toDataURL("image/png");

    fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: JSON.stringify({ image: canvasData }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        resultText.innerText = "Skin Type: " + data.skin_type;
    })
    .catch(error => console.error("Error:", error));
}