var lastX, lastY, table = document.createElement('table'), x = document.getElementById('valX'), y = document.getElementById('valY');
function generateTable(){
	var table = document.createElement('table'), row, cell;
    
	for (var j = 0; j <= y.value; ++j){
		row = table.insertRow();		
	for (var i = 0; i <= x.value; ++i) {
    	cell = row.insertCell();
	if (i != 0 || j != 0){
		cell.innerText=i*j;
	}
	if (i === 0 && j != 0){
		cell.innerText=j;
		cell.style.backgroundColor='cyan';
		cell.style.color='blue';
	}
	if (i != 0 && j === 0){
		cell.innerText=i;
		cell.style.backgroundColor='cyan';
		cell.style.color='blue';
	}
	}
	}
	table.rows[0].cells[0].style.backgroundColor='cyan';
	for (var i = 1; i < table.rows.length; i++) {
  		table.rows[i].cells[i].style.backgroundColor = 'pink';
  		table.rows[i].cells[i].style.color = 'red';
	}
	}
document.getElementById('whereTable').appendChild(table);
}


document.getElementById('ok').onclick = function (){
	if (lastX != x.value || lastY != y.value){
		document.getElementById('whereTable').innerHTML = ('');	
		generateTable();}
	lastX = x.value;
	lastY = y.value;
	
}


	