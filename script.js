const daysTable = document.getElementsByTagName("table")[0];

const rows = daysTable.rows;

let cellcount = 0;

//                0    1    2    3   4  5        6  7       8     9   10  11  12  13



let history = new Array(11);
let sizeofarray = 11;


for(let i = 0 ; i < sizeofarray; i ++){
  let x = new Array(7)
  for(let j = 0 ; j < 7; j++){
    x[j] = undefined;
}
    history[i] = x;
    
  }

  history[0] = [4.80,6.02,0.65,0.43,0.65, 4.97 , 4];
  history[1] = [ 0.58,3.22,1.18, 0 , 0 , 0 , 0 ];


history.forEach(element => {
  console.log(element)
});



// async function getDateFromJSON(){
// const url =
//     "./date.json";

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
    
//     let jsonArray = Object.values(json)[0];

//     return jsonArray
   
//   } catch (error) {
//     console.error(error.messsage);
//   }}
 

  let dayNumber = 16;
  



// getData().then(
//   x => {
//     console.log(x)
  
// });



//Makes the Table
for (var i = 1; i <= rows.length-1; i++) {
  for (var j = 0; j < 7; j++) {
    

      // rows.item(i).children.item(j).addEventListener("click",function(e){
      //  console.log("test")
      //  rows.item(i).children.item(j).classList.add("passed")
      // });

      rows.item(i).children.item(j).firstElementChild.textContent = cellcount+1;
      cellcount += 1;
      rows.item(i).children.item(j).addEventListener("dblclick", function (e) {
          console.log(this.textContent);
        });
    }

   
  }


//Update time
setInterval(function () {
  document.getElementsByClassName("timex").item(0).textContent = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
}, 1000);

function timex(){

}


async function getData() {
  const url = "https://wakatime.com/share/@natitek/d3ddd938-fc86-41a4-82cc-2eb1bf639220.json";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json);
    let jsonArray = Object.values(json);
    let today = Object.values(jsonArray[0][6])[1];

    //[0][6] --- 6 means day of the week starting from 0, 
    // [1] --- grandtotal
 
    let t = Object.values(today)[4];

    // .values(today)   ,[6] -- decimal

   gpthelped = t;

    // console.log(t);
    // return t
  } catch (error) {
    console.error(error.messsage);
  }
}


function isdayover() {
  if (new Date().getHours() >= 23) {
// let todaysdate = getDateFromJSON();

    todaysdate += 1;
  

    //TODO : POST to the JSON the new Day
    
    return true;
  }
  else{
    return false;
  }
}
// console.log(getDateFromJSON()) 

// setInterval(isdayover(), 60000); //every Minute check if its a new day

setInterval(check(), 1000); //Check every Minute if coding is complete befor day is over


function check() {

  for (var i = 1; i <= rows.length - 1; i++) {
    for (var j = 0; j < 7; j++) {
      let thecell = rows.item(i).children.item(j).firstElementChild.textContent  // the p inside the cell
      let thefirstelement = rows.item(i).children.item(j).classList // the td holding text  

   
      
     if ((thecell <= dayNumber) && (history[i-1][j] > 2 )) {
        thefirstelement.add("passed");
        // console.log(history[i-1][j] + " is the value")
        // console.log("i :" + i + " j :" + j + " cell value: " + thecell);

        // console.log(history[i-1][j] + "is greater than 2")
      } 
      else if ((thecell <= dayNumber) && ((history[i-1][j] < 2 ))) {
        thefirstelement.add("failed");
        // console.log(history[i-1][j] + "is less than 2")
        
      }
      else if((thecell <= dayNumber) && ((history[i-1][j] === undefined))){
        thefirstelement.add("default_style")
        // console.log("reached the end")
        // break;
      }
    }
    }
  }
 






//1440 minutes in a date

// console.log(rows.item(0).children.item(2).firstElementChild.textContent)

// getData(); //returns today amount of code time in decimals
