function init(){
//add your javascrip between these two lines of code
	var input = document.getElementById('entryinput');
	var out = document.getElementById('textoutput');
	var entry = document.getElementById('entrybutton');
	function AlertMe(){
		alert('Asim Hyder: ' + input.value);
	}
	function ShowResultsHere(){
		out.innerHTML = input.value;
	}
	entry.addEventListener('click', AlertMe);
	entry.addEventListener('click', ShowResultsHere);
}

window.addEventListener('load', init);