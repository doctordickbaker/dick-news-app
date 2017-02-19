var weekday = ["sun","mon","tues","wed","thurs", "fri", "sat"];
var month = ["jan", "Feb", "March", "Apr", "May", "June", "july", "aug", "sept", "oct","nov"];

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
    case 0:
      let activemonth = month[timeinfo[1]];
      console.log(activemonth);
      break;
    case 1:
      let activewd = weekday[timeinfo[0]];
      console.log(activewd);
  }
}
