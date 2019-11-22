function init(){
//add your javascrip between these two lines of code
var entry = document.getElementById('entrybutton');
entry.addEventListener('click', AlertMe);
entry.addEventListener('click', ShowResultsHere);
}

function AlertMe(){
	var input = document.getElementById('entryinput');
	alert('Asim Hyder: ' + input.value);
}
function ShowResultsHere(){
	var input = document.getElementById('entryinput');
	var out = document.getElementById('textoutput');
	out.innerHTML = input.value;
}

window.addEventListener('load', init);