
const daysTable = document.getElementsByTagName("table")[0];

// console.log(daysTable.innerHTML)

const rows= daysTable.rows


const days = []

console.log(rows.item(0).children) //Header 


console.log("number of rows(including header) " + rows.length)
let cellcount = 0

for(var i = 1; i <= rows.length-1; i++){

    for(var j = 0 ; j < 7 ; j++ ){
    if(cellcount < 4 || cellcount >= 60+4){

    }
    else {
        rows.item(i).children.item(j).firstElementChild.textContent = cellcount -3
        rows.item(i).children.item(j).addEventListener("dblclick",function (e){
            console.log(this.textContent);
        })
    }
           
        
        
        console.log(cellcount)
        // console.log(rows.length)
        cellcount += 1
    }
  
    console.log("row" + i)
  
}
// console.log(days)



// document.getElementsByClassName("dates").item(0).innerHTML = 1
