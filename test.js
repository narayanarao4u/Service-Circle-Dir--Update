const arr = [1, 2, 3];

await Promise.all(arr.map(async (i) => {
	sleep(10 - i);
	console.log(i);
}));

// 3
// 2
// 1

console.log("Finished async");