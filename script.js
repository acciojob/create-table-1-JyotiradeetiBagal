function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable");

	//method 1
	// let newRow=document.createElement("tr");
	
	// let newCell1=document.createElement("td");
	// newCell1.innerText="New Cell1";

	// let newCell2=document.createElement("td");
	// newCell2.innerText="New Cell2";

	// newRow.append(newCell1);
	// newRow.append(newCell2);

	// table.prepend(newRow);

	//method2
  const newRow = table.insertRow(0);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
	
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
  
}
