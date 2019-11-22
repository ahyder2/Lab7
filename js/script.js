function init(){
//add your javascrip between these two lines of code

var in = document.getElementById('entryinput');
var out = document.getElementById('textoutput');
var entry = document.getElementById('entrybutton');
entry.addEventListener('click', AlertMe);
entry.addEventListener('click', ShowResultsHere);
}

function AlertMe(){
	alert('Asim Hyder: ' + in.value)
}
function ShowResultsHere(){
	out.innerHTML = in.value;
}

window.addEventListener('load', init);