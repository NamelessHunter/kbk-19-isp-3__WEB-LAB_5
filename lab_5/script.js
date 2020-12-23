var b = document.getElementById("button");

var canvas = document.getElementById("myCanvas"), 
context = canvas.getContext("2d");
context.fillRect(0, 0, 500, 500);

b.onclick = function() {
	
	var x1 = document.getElementById("x1").value;
	var y1 = document.getElementById("y1").value;
	var r1 = document.getElementById("r1").value;
	var x2 = document.getElementById("x2").value;
	var y2 = document.getElementById("y2").value;
	var r2 = document.getElementById("r2").value;
	var tip = document.getElementById("res");
	
	context.fillStyle = "black";
	context.fillRect(0, 0, 500, 500);
	
	context.fillStyle = "red";
	context.beginPath();
	context.arc(x1, y1, r1, 0, 2 * Math.PI);
	context.fill();

	context.fillStyle = "blue";
	context.beginPath();
	context.arc(x2, y2, r2, 0, 2 * Math.PI);
	context.fill();
	
	var dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	
	if (dist <= Math.abs(r1-r2)) tip.textContent ='один круг лежит внутри другого';
	else if (dist > parseInt(r1)+parseInt(r2)) tip.textContent ='круги не имеют общих точек';
	else if (dist > Math.abs(r1-r2) && dist < parseInt(r1)+parseInt(r2)) tip.textContent ='круги пересекаются';
	else tip.textContent ='круги имеют точку касани';
}