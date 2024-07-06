
/* ALL OF THESE MEHODS TAKE A FUNCTION AS AN ARGUMENT  */


/* ARRAY MAP METHOD */

// let arr = [ 20 , 45 , 23 ];
// let  a = arr.map((value , index ,array ) => {        // map creates a new array | for-each is used to perform specific tasks
//   console.log(value , index , array);
//   // return value+1;
// });

/* ARRAY FILTER METHOD */ 

/*- they not modify the array---- it used to create a new array*/
// let arr2 = [45,23,21,0,3,5];
// let a2 = arr2.filter((value)=>{      // it adds the value in the array when the function returns true
//   return value<10;
// });
// console.log(a2);

/* ARRAY REDUCE METHOD */

// let arr3 = [1,2,3,5,2,1];
// let newArr = arr3.reduce( ( a1 , a2 ) => {
//   return a1 + a2 ;
// });
// console.log(newArr);

/* ANOTHER WAY */
// let arr3 = [ 1 , 2 , 3 , 5 , 2 , 1 ];
// const reduce_func = ( a1 , a2 ) => {
//   return a1 + a2 ;
// };
// let newArr = arr3.reduce(reduce_func);
// console.log(newArr);