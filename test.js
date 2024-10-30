async function getData() {
    const url = "https://wakatime.com/share/@natitek/d3ddd938-fc86-41a4-82cc-2eb1bf639220.json";
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      let jsonArray = Object.values(json);
      let today = Object.values(jsonArray[0][6])[0];
  
      //[0][6] --- 6 means day of the week starting from 0, 
      // [1] --- grandtotal
  
      
     
  
      let t = Object.values(today)[4];
  
      // .values(today)   ,[6] -- decimal
      var outsidevar = today.date;
     
           return outsidevar
      
    } catch (error) {
      console.error(error.messsage);
    }
  }


  getData();

  const arrayofstuff = [
    {amount: "5.6" , date: "2024-10-04"},
    {amount: "2.3" , date: "2024-10-05"},
    {amount: "1.2" , date: "2024-10-06"},
    {amount: "45" , date: "2024-10-30"},

]

  async function compareDate(){
   let current = await getData();

  

  arrayofstuff.forEach((e,f)=>{
    current==e.date ? console.log(`${e.date} , ${arrayofstuff[f].amount}`):console.log("not found")
  })
   

  }

  compareDate()
  

   




arrayofstuff.forEach((e)=> {
    console.log(`amount: ${e.amount} date:  ${e.date.split("-",3)[2]}`)
})
