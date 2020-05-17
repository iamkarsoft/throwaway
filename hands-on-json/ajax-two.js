// var xhr = new XMLHttpRequest();
// xhr.open('GET',"array.json",true);
// xhr.responseType='text';
// xhr.onload = function(){
//   if(xhr.status===200){
//     var myObj = JSON.parse(xhr.responseText);
//     console.log(myObj);
//     console.log(myObj[0].first);
//   }else{
//     console.log(xhr.status);
//   }
// };
// xhr.send();

//loading data from array two
var xhr =  new XMLHttpRequest();
xhr.open('GET',"array-two.json",true);
xhr.responseType = 'text';
xhr.onload = function(){
  if(xhr.status ===200){
    var myStuff = JSON.parse(xhr.responseText);
    console.log(myStuff);
    console.log(myStuff.president[1]);
    console.log(myStuff.vicepresident[0]);

    for(i=0;i<myStuff.president.length;i++){
      console.log(myStuff.president[i].first);
    };

    for(i=0;i<myStuff.vicepresident.length;i++){
      console.log(myStuff.vicepresident[i].first);
    };


  }
}

xhr.send();