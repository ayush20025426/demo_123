// const sum = (...args) => {
//     console.log(args);
//     args.forEach(
//         (ele)=>{
//             console.log(ele);
//             sum+=ele;
//         } // logs an array of numbers
//     );

// }
// const output =sum(1,2,3,4,5,6,7,8,89,90,12);
// console.log(output); // logs 45
// const sum = (...args) => {
//     console.log(args);
//     args.forEach(
//         (ele)=>{
//             console.log(ele);
//             sum+=ele;
//         } // logs an array of numbers
//     );

// }
const output =sum(1,2,3,4,5,6,7,8,89,90,12);
console.log(output);
// const output =sum(1,2,3,4,5,6,7,8,89,90,12);
// console.log(output); // logs 45
const isDiv=(...args)=>{
    let arr=[];
    args.forEach((ele)=>{
        if(ele%2===0){
            arr.push(ele);
        }
    });
    return arr;
}
const divisibleByTwo=isDiv(1,2,3,4,5,6,7,8,89,90,12);
console.log(divisibleByTwo); // logs 45
















































