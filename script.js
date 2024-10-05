const daysTable = document.getElementsByTagName("table")[0];

const rows = daysTable.rows;

let cellcount = 0;


let daycounter;

async function getDateFromJSON(){
    const url = "./date.json"

    let fetchRes = fetch(url);

    fetchRes.then(res => res.json()).then(d => {
        console.log(d)
    })
} 




// var dayss = 0;



for (var i = 1; i <= rows.length - 1; i++) {
  for (var j = 0; j < 7; j++) {
    if (cellcount < 4 || cellcount >= 60 + 4) {
    } else {
      rows.item(i).children.item(j).firstElementChild.textContent = cellcount - 3;
      rows.item(i).children.item(j).addEventListener("dblclick", function (e) {
          console.log(this.textContent);
        });
    }

    cellcount += 1;
  }
}

//Update time
setInterval(function () {
  document.getElementsByClassName("timex").item(0).textContent = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
}, 1000);

//The XHTML method
function askWaka() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText)
      console.log(this.responseText);
    }
  };
  xhttp.open(
    "GET",
    "https://wakatime.com/share/@natitek/d3ddd938-fc86-41a4-82cc-2eb1bf639220.json",
    true
  );
  xhttp.send();
}

async function getData() {
  const url =
    "https://wakatime.com/share/@natitek/d3ddd938-fc86-41a4-82cc-2eb1bf639220.json";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json);
    let jsonArray = Object.values(json);
    let today = Object.values(jsonArray[0][6])[1];

    let t = Object.values(today)[4];

    console.log(t);
  } catch (error) {
    console.error(error.messsage);
  }
}


// let d = new Date().getMinutes();
// console.log(d);




function isdayover() {
  if (new Date().getHours() >= 23) {
let todaysdate = getDateFromJSON();

    todaysdate += 1;
  

    //todo : POST to the JSON the new Day
    return true;
  }
}

setInterval(isdayover(), 60000); //every Minute check if its a new day

setInterval(check(), 60000); //Check every Minute if coding is complete befor day is over

function iscodingcomplete() {
  if (getData() >= 2) {
    return true;
  } else {
    return false;
  }
}

function check() {
  for (var i = 1; i <= rows.length - 1; i++) {
    for (var j = 0; j < 7; j++) {
      if (
        rows.item(i).children.item(j).firstElementChild.textContent == daycounter && !iscodingcomplete() && isdayover()
      ) {
        rows.item(i).children.item(j).classList.add("failed");
      } else if (
        rows.item(i).children.item(j).firstElementChild.textContent == daycounter && !iscodingcomplete() &&!isdayover()
      ) {
        rows.item(i).children.item(j).classList.add("failed");
      } // if the day isnt over dont do anything
      else if((rows.item(i).children.item(j).firstElementChild.textContent == daycounter) && iscodingcomplete()){
        rows.item(i).children.item(j).classList.add("passed");
      }
      else if (
        rows.item(i).children.item(j).firstElementChild.textContent == daycounter &&iscodingcomplete() &&!isdayover()
      ) {
        rows.item(i).children.item(j).classList.add("passed");
      } // if the day isnt over dont do anything
    }
  }
}



let codingDaysArray = [];
codingDaysArray[0] = 4.8;


function addToCodingDaysJSON(){

    
}

let da = 0;

// async function getDateFromJSON(){
 
//         const url =
//           "./date.json";
//           const promise = new Promise(await fetch(url))
//                   .then(response => response.json())
//         .then(x => Object.values(x)[0])
          

// } 







      



//1440 minutes in a date

// console.log(rows.item(0).children.item(2).firstElementChild.textContent)

// getData(); //returns today amount of code time in decimals
