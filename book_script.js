function myFunction(button_id) {
    location.href = button_id + ".html";
}

function searchBar() {
  
  var input = document.getElementById("userInput").value;
  alert(input);

}

function getFantasy() {

  let text = '{ "books" : [' +
  '{ "name":"The Poppy War" , "image":"images/poppy-war.jpg" },' +
  '{ "name":"Babel" , "image":"images/babel.jpg" },';

  const obj = JSON.parse(text);

}