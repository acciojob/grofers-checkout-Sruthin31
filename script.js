const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll('.price');

	let total = 0;
	prices.forEach((p)=>{
		total += parseFloat(p.textContent)
	});
	const table = document.querySelector('table');
	const newRow = document.createElement("tr");

	const labelCell = document.createElement("td");
	const totalCell = document.createElement("td");

	totalCell.textContent = total;
	labelCell.textContent = 'Total Price: ';

	newRow.append(labelCell,totalCell);
	table.appendChild(newRow)
};

getSumBtn.addEventListener("click", getSum);

