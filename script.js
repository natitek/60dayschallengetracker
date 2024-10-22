const daysTable = document.getElementsByTagName("table")[0];

const rows = daysTable.rows;

let cellcount = 0;


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
  history[1] = [ 0.58,3.22,1.18,0, 0 , 0 , 0 ];
  history[2][0] = 0.65
  history[2][1] = 2.68



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
 

  
  

  let startdate = new Date("2024-10-04");

  let today = new Date(new Date().toISOString().split("T",1)[0]);

  let dayNumber = (today - startdate)/86400000 // convert millie seconds to days


;


  // when time reaches 23 
  //  first check if the array of the day is empty or undefined
  // if its undefined add from wakatime using getData(); ex 18

  //18 % 7 = column  add to the 4th the element  column
  // 18 / 7  = row
  // if cell != undefined continue;
  





//Makes the Table
for (var i = 1; i <= rows.length-1; i++) {
  for (var j = 0; j < 7; j++) {
    

      // rows.item(i).children.item(j).addEventListener("click",function(e){
      //  console.log("test")
      //  rows.item(i).children.item(j).classList.add("passed")
      // });

      rows.item(i).children.item(j).firstElementChild.textContent = cellcount+1;
      cellcount += 1;
      rows.item(i).children.item(j).addEventListener("pointerover", function (e) {
         
        if(this.children[0].textContent % 7 == 0){

          console.log(history[this.parentElement.rowIndex - 1][6]);

            
          this.parentElement.children[6].children[1].textContent = history[this.parentElement.rowIndex - 1][6]

          // this.parentElement.children[6].children[1].classList.add("seen");
  

        }
        else if(this.children[0].textContent % 7 != 0){

          this.parentElement.children[this.children[0].textContent % 7-1].children[1].textContent = history[this.parentElement.rowIndex -1][this.children[0].textContent % 7-1]


          console.log(((history[this.parentElement.rowIndex -1][this.children[0].textContent % 7-1])));
          // this.parentElement.children[this.children[0].textContent % 7-1].children[1].classList.add("seen");

          // console.log(` ${this.parentElement.rowIndex -1} ${this.children[0].textContent % 7-1} ` );
        }
        
         
        });
        rows.item(i).children.item(j).addEventListener("pointerout", function (e) {
          if(this.children[0].textContent % 7 == 0){

           
            this.parentElement.children[6].children[1].innerHTML = " "
  
              
  
          }
          else if(this.children[0].textContent % 7 != 0){


            this.parentElement.children[this.children[0].textContent % 7-1].children[1].innerHTML = " "
  
            // this.parentElement.children[this.children[0].textContent % 7-1].children[1].classList.add("invisible");
  
  
           
          }

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

setInterval(check(), 60000); //Check every Minute if coding is complete befor day is over


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
