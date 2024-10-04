
const daysTable = document.getElementsByClassName("daysTable");

for(var i = 0; i <= daysTable.length; i++){
    // console.log(daysTable.item(i).innerHTML)

    const d = daysTable.item(i).getAttributeNames()
    console.log(d)
   if(d.innerHTML == "td"){
    console.log("got a row")
   }
   else{
    continue;
   }
 
}



// document.getElementsByClassName("dates").item(0).innerHTML = 1
