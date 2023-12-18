var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["STUDENT"] = 100] = "STUDENT";
    Role[Role["AUTHORITY"] = 120] = "AUTHORITY";
})(Role || (Role = {}));
var person1 = { name: 'jp',
    age: 40,
    hobbies: ['cookie', 'bubbt'],
    role: Role.ADMIN
};
console.log('Jp name ', person1.name);
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log('hobby : ', hobby);
}
function combine(input1, input2, resultconversation) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultconversation === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    console.log('result : ', result);
}
combine(6, 7, 'as-number');
combine('6', '7', 'as-string');
var u1 = { name: 'jeyaprakash', age: 40 };
console.log(u1.name);
var u11 = { name: 'Max' };
console.log(u11);
u11 = 'Michael';
console.log(u11);
function add(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
add(6, 5, function (result) {
    console.log('result fun : ', result);
});
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', function (response) {
    console.log(response);
    return true;
});
var userInput;
var userValue;
userInput = 'jp';
if (typeof userInput === 'string')
    userValue = userInput;
function neverMethod() {
    console.log('JPp');
    throw new Error("this is erro");
}
neverMethod();
// let combinedValues = (a:number,b:number) => number <any>;
// combinedValues = add;
// console.log(combinedValues(8,8))
// selection sort
// const arr = [8, 3, 9, 11, 2,1];
// const arr = [8, 3, 9,2];
// function swap(pos1:number,pos2:number,array:number[]){
//     const temp = array[pos1];
//     array[pos1] = array[pos2]
//     array[pos2] = temp;
// }
// function selectionSory() {
//     let selection:number = 0;
//     for(let i=0;i<arr.length-1;i++){
//         selection = i;
//         for(let j=i+1;j<arr.length;j++){
//             console.log(arr[j]+' < '+ arr[selection]);
//             if(arr[j] < arr[selection] ){
//                 selection = j;
//                 console.log("selection :::::: ",selection)
//             }
//         }
//         console.log("final selection :::::: ",selection)
//         swap(i,selection,arr)
//     }
// }
// // // selectionSory();
// function bubbleSort(arr: number[], n: number)
// {
//     var swapped: boolean;
//     for (let i = 0; i < n - 1; i++) 
//     {
//         swapped = false;
//         for (let j = 0; j < n - i - 1; j++) 
//         {
//             if (arr[j] > arr[j + 1]) 
//             {                
//                 swap(j,j+1,arr)
//                 swapped = true;
//             }
//         }
//         // IF no two elements were 
//         // swapped by inner loop, then break
//         if (swapped == false)
//         break;
//     }
// }
// bubbleSort(arr,arr.length)
// console.log(arr)
// // Function to partition the array and return the partition index
// function partition(arr: number[], low: number, high: number) {
// 	// Choosing the pivot
// 	let pivot = arr[high];
// 	// Index of smaller element and indicates the right position of pivot found so far
// 	let i = low - 1;
// 	for (let j = low; j <= high - 1; j++) {
// 		// If current element is smaller than the pivot
// 		if (arr[j] < pivot) {
// 			// Increment index of smaller element
// 			i++;
// 			swap(i,j,arr) // Swap elements
// 		}
// 	}
//     swap(i+1,high,arr)// Swap pivot to its correct position
// 	return i + 1; // Return the partition index
// }
// // The main function that implements QuickSort
// function quickSort(arr: number[], low: number, high: number) {
// 	if (low < high) {
// 		// pi is the partitioning index, arr[pi] is now at the right place
// 		let pi = partition(arr, low, high);
// 		// Separately sort elements before partition and after partition
// 		quickSort(arr, low, pi - 1);
// 		quickSort(arr, pi + 1, high);
// 	}
// }
// // Driver code
// let arr1 = [4,10, 7, 8, 9, 1, 5];
// let N = arr1.length;
// // Function call
// quickSort(arr1, 0, N - 1);
// console.log("Sorted array:");
// console.log(arr1.join(" "));
// function removeChar(s, c)
// {
//     let j, count = 0, n = s.length;
//     let t = s.split("");
//     for(let i = j = 0; i < n; i++)
//     {
//         if (t[i] != c)
//             t[j++] = t[i];
//         else
//             count++;
//     }
//     while (count > 0)
//     {
//         t[j++] = '\0';
//         count--;
//     }
//     document.write(t.join(""));
// }
// // Driver Code
// let s = "geeksforgeeks";
// removeChar(s, 'g');
// function newPartition(arr: number[],low: number,high: number){
//    // Choosing the pivot
// 	let pivot = arr[high];
// 	// Index of smaller element and indicates the right position of pivot found so far
// 	let i = low - 1;
//     for(let j=low;j<= high-1;j++){
//         if(arr[j] < pivot){
//             i++;
//             swap(i,j,arr)
//         }
//     }
//     swap(i+1,high,arr)
//     return i+1;
// }
// function newQuickSort(arr: any, low: number, high: number){
//     if(low < high){
//         const pi = newPartition(arr,low,high)
//         newQuickSort(arr,low,pi-1);
//         newQuickSort(arr,pi+1,high)
//     }
// }
// // Driver code
// let arr2 = [40,100, 70, 80, 90, 10, 50,5];
// let N1 = arr2.length;
// // Function call
// newQuickSort(arr2, 0, N1 - 1);
// console.log("new Sorted array:");
// console.log(arr2.join(" "));
// let heapArr = [15,5,20,1,17,10,30]
// //              15
// //        5              20
// //    1      17       10     30
// /* find floor value n/2 + 1 to n 
//     7/2 = 3.5 is floor value 3 + 1 = 4;
//     4 to 7 left node
//     heap method start with n/2 
// */
