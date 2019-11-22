var in;
var out;
var entry;
function init(){
//add your javascrip between these two lines of code

in = document.getElementById('entryinput');
out = document.getElementById('textoutput');
entry = document.getElementById('entrybutton');
function AlertMe(){
	alert('Asim Hyder: ' + in.value)
}
function ShowResultsHere(){
	out.innerHTML = in.value;
}
entry.addEventListener('click', AlertMe);
entry.addEventListener('click', ShowResultsHere);

window.addEventListener('load', init);