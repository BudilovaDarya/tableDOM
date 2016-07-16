var table = document.createElement('table'), x = document.getElementById('valX'), y = document.getElementById('valY');
function generateTable(){
	var table = document.createElement('table'), row, cell;
    
	for (j = 0; j < y.value; ++j){
		row = table.insertRow();		
	for (i = 0; i < x.value; i++) {
    	cell = row.insertCell();
	
	}
	}
document.getElementById('whereTable').appendChild(table);
}
document.getElementById('ok').onclick = function (){
	document.getElementById('whereTable').innerHTML=('');	
	generateTable();
}
