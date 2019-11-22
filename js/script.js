function init(){
//add your javascrip between these two lines of code

var input = document.getElementById('entryinput');
var out = document.getElementById('textoutput');
var entry = document.getElementById('entrybutton');
entry.addEventListener('click', AlertMe);
entry.addEventListener('click', ShowResultsHere);
}

function AlertMe(){
	alert('Asim Hyder: ' + input.value)
}
function ShowResultsHere(){
	out.innerHTML = input.value;
}

window.addEventListener('load', init);