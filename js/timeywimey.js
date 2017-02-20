var weekday  =  ["Sun","Mon","Tues","Wed","Thurs", "Fri", "Sat"];
var month    =  ["jan", "Feb", "March", "Apr", "May", "June", "july", "aug", "sept", "oct","nov"];
var dis_day  =  document.getElementById("dis_day");
var dis_date =  document.getElementById("dis_date");
var dis_temp =  document.getElementById("dis_temp");

var d = new Date();

function timeConv(wd,m){
  wd = d.getDay();
  m = d.getMonth();
  wdm = [wd, m];
  return wdm;
}

for(let x= 0; x < 2; x++){
  let timeinfo = timeConv();
  switch(x){
    case 1:
      let activemonth = month[timeinfo[1]];
      console.log(activemonth);
      dis_date.innerHTML = activemonth + " " + d.getDate();
      break;
    case 0:
      let activewd = weekday[timeinfo[0]];
      console.log(activewd);
      dis_day.innerHTML = activewd;
  }
}

/////  My overcomplicated method of fetching time info and displaying it.  Still working on weather...
