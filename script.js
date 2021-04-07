console.log("script.js 시작");
var now = new Date();
var start = new Date('2021-03-01');
var timeDiff = now.getTime() - start.getTime();
var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1); // 사귄 첫날은 0일이 아니라 1일이니까.
$('#love').text(day + '일째');
console.log(day);