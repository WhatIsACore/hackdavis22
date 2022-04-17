'use strict';

let now = new Date();

function $(e) {
  return document.querySelector(e);
}

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function formatMonth(month) {
  return months[month];
}

$('.calendar .title').innerText = formatMonth(now.getMonth());

let d = new Date();
d.setDate(1);
let firstDayOfWeek = d.getDay();
d.setDate(1-firstDayOfWeek);

let dtContents = ``;
let currentMonth = now.getMonth();
for (let i = 0; i < 5; i++) {
  dtContents += "<div class='row'>";
  for (let j = 0; j < 7; j++) {
    dtContents += `
      <div class='day ${d.getMonth() !== currentMonth ? 'darkened' : ''}'>
        ${d.getDate()}
      </div>
    `;
    d.setDate(d.getDate() + 1);
  }
  dtContents += "</div>";
}
$('.date-table').innerHTML = dtContents;
