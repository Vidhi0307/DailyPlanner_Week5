var today = $(currentDay);

console.log(today);
console.log(moment().format('LLL'));
today.append(moment().format('LLLL'));
today.append(Date());
