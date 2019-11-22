var in;
var out;
var entry;
function init(){
//add your javascrip between these two lines of code

in = document.getElementById('entryinput');
out = document.getElementById('textoutput');
entry = document.getElementById('entrybutton');
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