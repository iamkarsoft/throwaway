
var xhr = new XMLHttpRequest();

xhr.open('GET','data.json',true);
xhr.responseType= 'text';
// loads when status is called 4
xhr.onload = function(){
  if(xhr.status ===200){
  var myStuff= JSON.parse(xhr.responseText);
  console.log(myStuff);
  }
}
xhr.send();

// xhr.onreadystatechange = function(){
//   console.log(xhr.readyState);
//   console.log(xhr.status);
//   console.log(xhr.statusText);
// }


