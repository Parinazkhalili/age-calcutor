
let result= document.getElementById('result')



function calculate_age() { 
   
    let birthday =document.getElementById("year").value;
    let date1=new Date(birthday);
    let date2= new Date()
    let diffTime=date2 - date1 ;
    let diffDate=new Date(diffTime);
    const years=diffDate.getUTCFullYear() - 1970;
    const months=diffDate.getUTCMonth();
    const days=diffDate.getUTCDate() - 1;
    result.innerHTML=`years : ${years} months : ${months} days : ${days} ` ;
    return{years,months,days}
}