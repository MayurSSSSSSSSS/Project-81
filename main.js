canvas = document.getElementById("mycanvas");
cntx = canvas.getContext("2d");
cntx.beginPath();
cntx.strokeStyle = "blue";
cntx.lineWidth = 5;
cntx.arc(250, 210, 40, 0, 2 * Math.PI);
cntx.stroke();


cntx.beginPath();
cntx.strokeStyle = "black";
cntx.lineWidth = 5;
cntx.arc(350, 210, 40, 0, 2 * Math.PI);
cntx.stroke();

cntx.beginPath();
cntx.strokeStyle = "red";
cntx.lineWidth = 5;
cntx.arc(450, 210, 40, 0, 2 * Math.PI);
cntx.stroke();

cntx.beginPath();
cntx.strokeStyle = "yellow";
cntx.lineWidth = 5;
cntx.arc(300, 250, 40, 0, 2 * Math.PI);
cntx.stroke();

cntx.beginPath();
cntx.strokeStyle = "green";
cntx.lineWidth = 5;
cntx.arc(400, 250, 40, 0, 2 * Math.PI);
cntx.stroke();




