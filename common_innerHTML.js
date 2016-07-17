var lastX, lastY, x = document.getElementById('valX'), y = document.getElementById('valY');
function generateTable(){
	var row, cell;
    document.getElementById('whereTable').innerHTML = '<table id="table" width="400" border="1"><tbody></tbody></table>'; 
	 for (var j = 0; j <= y.value; ++j){
		document.getElementsByTagName('tbody')[0].innerHTML += '<tr></tr>'	;
		row = document.getElementsByTagName('tr')[j];
	 for (var i = 0; i <= x.value; ++i) {
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
	if (x.value === y.value){
	for (var i = 1; i <= y.value; ++i) {
		cell = document.getElementsByTagName('tr')[i].getElementsByTagName('td')[i];
		cell.style.backgroundColor = 'pink';
  		cell.style.color = 'red';
	}
	} 
}



document.getElementById('ok').onclick = function (){
	if (lastX != x.value || lastY != y.value){
		document.getElementById('whereTable').innerHTML = ('');	
		generateTable();}
	lastX = x.value;
	lastY = y.value;
	
}


	