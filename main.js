var data = [
  {
    quantity: 1.5,
    description: 'Stock Item Example 0001',
    unitPrice: 1000.0,
    amount: 1500.0
  },
  {
    quantity: 1,
    description: 'Stock Item Example 0002',
    unitPrice: 2000.0,
    amount: 2000.0
  },
  {
    quantity: 1,
    description: 'Service Charge Invoicing Item 001',
    unitPrice: 100.0,
    amount: 200.0
  },
  {
    quantity: 1,
    description: `Service Charge Invoicing Item 002<br/>
  Additional line 1 for this item<br/>
  Additional line 2 for this item`,
    unitPrice: 200.0,
    amount: 600.0
  }
];

function formatDate(date) {
  const currentDate = $('#current-date');
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  const result = [year, month, day].join('/');
  currentDate.text(result);
}

function renderDataTable() {
  const dataTable = $('#data-table');
  let subTotal = 0;
  dataTable.html('');
  data.forEach(function (item) {
    subTotal += item.amount;
    let dataRow = `<tr>
      <td class="data r">${item.quantity}</td>
      <td class="data">${item.description}</td>
      <td class="data r">${item.unitPrice}</td>
      <td class="data r">${item.amount}</td>
      </tr>`;
    console.log({ dataRow });
    dataTable.append(dataRow);
  });
  let saleTax = subTotal * 0.1;
  let totalDue = subTotal + saleTax;
  $('#subTotal').html(subTotal);
  $('#saleTax').html(saleTax);
  $('#totalDue').html(totalDue);
}

$(document).ready(function () {
  const btnAdd = $('#button-add');
  console.log(`What's up by Lex`);
  let count = 0;
  let d = new Date();
  formatDate(d);
  renderDataTable();

  btnAdd.click(function () {
    count++;
    let qty = prompt('Quantity');
    let d = prompt('Description');
    let p = prompt('Unit Price');
    let amt = parseFloat(qty) * parseFloat(p);
    let item = {
      quantity: qty,
      description: d,
      unitPrice: p,
      amount: amt
    };
    data.push(item);
    renderDataTable();
  });
});
