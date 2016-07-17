var lastX, lastY, table = document.createElement('table'), x = document.getElementById('valX'), y = document.getElementById('valY');
function generateTable(valx, valy){
	var table = document.createElement('table'), row, cell;
    
	for (var j = 0; j <= valy; ++j){
		row = table.insertRow();		
	for (var i = 0; i <= valx; ++i) {
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
	if (valx === valy){
	for (var i = 1; i < table.rows.length; ++i) {
  		table.rows[i].cells[i].style.backgroundColor = 'pink';
  		table.rows[i].cells[i].style.color = 'red';
	}
	}
document.getElementById('whereTable').appendChild(table);
}


document.getElementById('ok').onclick = function (){
	if ((lastX != x.value || lastY != y.value) && (x.value <= 25 && y.value <= 25) && (x.value > 0 && y.value > 0)){
		document.getElementById('whereTable').innerHTML = ('');	
		generateTable(x.value, y.value);}
	if(x.value > 25  || y.value > 25){
		alert('Попробуй ввести значение меньше 25 ;)');
	}
	if (x.value < 0 || y.value <0) {
		alert('Попробуй ввести значение больше 0');
	}
	/*else 		{
				document.getElementById('whereTable').innerHTML = ('');	
				generateTable(10,10);
			} Не работает нормально пока что, где-то накосячила*/
	lastX = x.value;
	lastY = y.value;
	
}



	