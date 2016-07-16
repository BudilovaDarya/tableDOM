function generateTable(){
	var table = document.createElement('table'), row, cell;
    
	for (j = 0; j < 10; ++j){
		row = table.insertRow();		
	for (i = 0; i < 10; i++) {
    	cell = row.insertCell();
	
	}
	}
document.body.appendChild(table);
}
document.getElementById('ok').onclick = function (){
generateTable();
}
