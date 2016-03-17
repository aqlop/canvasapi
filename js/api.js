window.onload= function () {
	var canvas = document.getElementById('canvas');

	canvas.width = 800;
	canvas.height = 800;

	 var context = canvas.getContext('2d');

	 context.beginPath();
	 context.moveTo(100,100);
	 context.lineTo(700,700);
	 context.lineTo(500,700);
	 context.lineWidth = 30;
	 context.strokeStyle = "red";
	 context.closePath();
	 context.fillStyle="yellow";
	 context.fill();
	 context.stroke();
	 
	 context.beginPath();
	 context.moveTo(200,200)
	 context.lineTo(100,700);
	 context.lineTo(200,700);
	 context.lineWidth = 10;
	 context.strokeStyle = "#058";
	 context.closePath();
	 context.fillStyle="yellow";
	 context.fill();

	 context.stroke();


}