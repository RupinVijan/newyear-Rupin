const days = document.getElementById('days');
const hours =document.getElementById('hours');
const mins =document.getElementById('mins');
const sec =document.getElementById('sec');
const newyear="1 Jan 2022";

function countdown(){
    const newyeardate = new Date(newyear);
    const currentdate = new Date();
    const totalsec = (newyeardate-currentdate)/1000;

    const daysel= Math.floor(totalsec/3600/24);
    const hoursel= Math.floor(totalsec/3600)%24;
    const minsel= Math.floor(totalsec/60)%60;
    const secel= Math.floor(totalsec)%60;

    // document.getElementById('days').innerHTML = 'hi';
    days.innerHTML= daysel;
    hours.innerHTML= hoursel;
    mins.innerHTML= minsel;
    sec.innerHTML= secel;
    console.log(daysel,hoursel,minsel,secel)

}
countdown()
setInterval(countdown,1000)