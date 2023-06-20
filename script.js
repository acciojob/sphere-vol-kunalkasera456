function volume_sphere() {
    //Write your code here
	let radiusInput = document.getElementById("radius");
	const radius = parseFloat(radiusInput.value);
	
	let volumeInput = document.getElementById("volume");

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

	volumeInput.value = volume.toFixed(2);

	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
