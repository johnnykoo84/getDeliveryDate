// var d = new Date();
// var y = d.getFullYear();
// var n = d.getDate();
// var m = d.getMonth();
// var date_UTC = d.getUTCDate();
// var day_UTC = d.getUTCDay();
// var year_UTC = d.getUTCFullYear();
// var month_UTC = d.getUTCMonth();
// var now = Date.now();
// var day_1 = 1000*60*60*24;
// console.log('now date: ', d);
// console.log('add 1 day: ', d);

// console.log('set Date: ', d.setDate(15));
// console.log('returns the day of this month as 1~31: ', n);
// console.log('returns the year: ', y);
// console.log('returns the month 0~11: ', m);
// console.log('returns the UTC date: ', date_UTC);
// console.log('returns the UTC day(e.g. Monday): ', day_UTC);
// console.log('returns the UTC year: ', year_UTC);
// console.log('returns the UTC month: ', month_UTC);
// console.log('returns nowin milliseconds: ', now);
// d.setTime(1000*60*60*24);
// console.log('returns nowin milliseconds: ', d);
// console.log('returns the month 0~11: ', m);
// console.log('returns the month 0~11: ', m.toDateString());


// goal: receive the lead time, e.g. 16 weeks. 
//		and add the weeks from today, and calculate the expected delivery date both int. and ext.
// e.g.
// user input, lead time: (  ) weeks
// user input, order received date: today or specific date
// result: Year and Calendar week, or 2017-11-17 format. 

// receive the desired received date as milliseconds from 1970-01-01
// find the starting date e.g. if received on Thursday, then add to go to Monday next week
// and add  the lead time
// convert the milliseconds date to readable date

// make this happen, not in the cmd line, but also in the calendar on the webpage

var d = new Date();
var leadTime = 4*7;
console.log('today is: ', d);
d.setDate(d.getDate() + leadTime);

while(true) {
	console.log(d.getUTCDay());

	if(d.getUTCDay() === 0) {
		break;
	}
	d.setDate(d.getDate() - 1);
};
d.setDate(d.getDate() + 8);
console.log('expected delivery date is: ', d.toString());