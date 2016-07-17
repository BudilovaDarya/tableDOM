var lastX, lastY, x = document.getElementById('valX'), y = document.getElementById('valY');
function generateTable(valx, valy){
	var row, cell;
    document.getElementById('whereTable').innerHTML = '<table id="table"><tbody></tbody></table>'; 
	 for (var j = 0; j <= valy; ++j){
		document.getElementsByTagName('tbody')[0].innerHTML += '<tr></tr>'	;
		row = document.getElementsByTagName('tr')[j];
	 for (var i = 0; i <= valx; ++i) {
    	row.innerHTML += '<td style="background-color:cyan"></td>'
    	cell = document.getElementsByTagName('tr')[j].getElementsByTagName('td')[i];
    	if (i != 0 || j != 0) {
    		cell.style.backgroundColor = "white";
    		cell.innerText = i * j;
    	}
    	if (i === 0 && j != 0){
			cell.innerText = j;
			cell.style.backgroundColor = "cyan";
			cell.style.color = "blue";
		}
		if (i != 0 && j === 0){
			cell.innerText = i;
			cell.style.backgroundColor = "cyan";
			cell.style.color = "blue";
		}
	
    	
		}
	}
	if (valx === valy){
	for (var i = 1; i <= valy; ++i) {
		cell = document.getElementsByTagName('tr')[i].getElementsByTagName('td')[i];
		cell.style.backgroundColor = 'pink';
  		cell.style.color = 'red';
	}
	} 
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
	else 		{
				document.getElementById('whereTable').innerHTML = ('');	
				generateTable(10,10);
			}
	lastX = x.value;
	lastY = y.value;
	
}


	