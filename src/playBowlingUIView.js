$(document).ready(function(){

  generateTable();


function generateTable(){
  generateTableHeader();
  generateTableBodyData();
  generateTableBodySum();
}

function generateTableHeader(){
  var row = document.getElementById('frameNumbers');
  var cell;
  var text;
  var attr;
  for(var i = 1; i < 10; i++){
    cell = document.createElement("th");
    text = document.createTextNode(i);
    cell.appendChild(text);
    attr = document.createAttribute("colspan")
    attr.value = 2;
    cell.setAttributeNode(attr);
    row.appendChild(cell);
  }
  cell =  document.createElement("th");
  text =  document.createTextNode("10");
  cell.appendChild(text);
  attr = document.createAttribute("colspan")
  attr.value = 3;
  cell.setAttributeNode(attr);
  row.appendChild(cell);

  cell =  document.createElement("th");
  text =  document.createTextNode("Total");
  cell.appendChild(text);
  attr = document.createAttribute("colspan")
  attr.value = 1;
  cell.setAttributeNode(attr);
  row.appendChild(cell);
}

function generateTableBodyData() {
  var row = document.getElementById('rollScore');
  for(var i = 0; i < 21; i++){
    var cell = document.createElement("td");
    var attr = document.createAttribute("id");
    attr.value = `roll${i}`;
    cell.setAttributeNode(attr);
    row.appendChild(cell);
  }
  cell =  document.createElement("td");
  attr = document.createAttribute("rowspan")
  attr.value = 2;
  cell.setAttributeNode(attr);
  var attrId = document.createAttribute("id");
  attrId.value = "total";
  cell.setAttributeNode(attrId);
  row.appendChild(cell);
}

function generateTableBodySum(){
  var row = document.getElementById('sum');
  for(var i = 0; i < 9; i++){
    var cell = document.createElement("td");
    var idAttr = document.createAttribute("id");
    var colspAttr = document.createAttribute("colspan");
    colspAttr.value = 2;
    cell.setAttributeNode(colspAttr);
    idAttr.value = `sum${i}`;
    cell.setAttributeNode(idAttr);
    row.appendChild(cell);

  }
  cell =  document.createElement("td");
  attr = document.createAttribute("colspan")
  attr.value = 3;
  cell.setAttributeNode(attr);
  var attrId = document.createAttribute("id");
  attrId.value = "sum9";
  cell.setAttributeNode(attrId);
  row.appendChild(cell);
}












});
