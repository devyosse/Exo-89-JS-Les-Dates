//timestamp
let myDate = Date.now();
document.getElementById('timestamp').innerHTML = myDate;

// local version date
let myDate2 = document.getElementById('localDate');
let aujourdhui = new Date();
myDate2.innerHTML = aujourdhui.toLocaleDateString();

// hours version local
let myDate3 = document.getElementById('localTime');
let aujoudhuii = new Date();
myDate3.innerHTML = aujoudhuii.toLocaleTimeString();

// create a date with 2 more days and 6 more hours
let create = new Date();
create.setDate(31);
create.setHours(21);

document.getElementById('newDate').innerHTML = create;
