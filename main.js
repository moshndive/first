function showModal() {
	var opt = "dialogwidth=400px; dialogheight=100px";
	var md = window.showModalDialog("dialog.html", "test", opt);
}
function doFirst() {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	canvas.fillStyle="blue";
	canvas.fillRect(10,10,100,200);
	canvas.clearRect(20,20,50,90);
	var enter = document.getElementById('enter');
	enter.addEventListener('click', showModal, false);
}
window.addEventListener("load", doFirst, false);
