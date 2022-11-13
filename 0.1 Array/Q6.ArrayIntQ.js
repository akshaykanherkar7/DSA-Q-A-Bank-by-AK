// // Q7
// function manipulateStudentRecord(obj, operation, prop, newValue) {
//   if (operation === "delete") {
//     if (obj && obj.hasOwnProperty(prop)) {
//       delete obj[prop];
//     }
//     return obj;
//   } else if (operation === "edit") {
//     if (obj && obj.hasOwnProperty(prop)) {
//       obj[prop] = newValue;
//       return obj;
//     } else {
//       return obj;
//     }
//   }
// }

// const obj = {
//   name: "John",
//   lastName: "Bliss",
//   city: "Florida",
// };

// console.log(manipulateStudentRecord(obj, "edit", "city", "Seattle"));
// console.log(manipulateStudentRecord(obj, "edit", "abc", "Seattle"));
// console.log(manipulateStudentRecord(obj, "delete", "city", "Seattle"));

// // // Q8
// "use strict";

// function inventoryList() {
//   let items = [
//     {
//       name: "Vladimir",
//     },
//     {
//       name: "Andjela",
//     },
//     {
//       name: "Filip",
//     },
//   ];

//   const add = (name) => {
//     const names = items.filter((item) => item.name === name);
//     if (names.length === 0) {
//       items.push({ name: name });
//     }
//   };

//   const remove = (name) => {
//     items = items.filter((item) => item.name !== name);
//   };

//   const getList = () => {
//     // console.log(items)
//     return items;
//   };

//   // getList();
//   // add("Vladimir");
//   // getList();
//   // add('Goran')
//   // getList()
//   // remove('Vladimir')
//   // getList()
//   // add('Gordana')
//   // getList()
//   // add('Vladimir')
//   // getList()

//   return { add, remove, getList };
// }

// let obj = inventoryList();
// obj.add("Manish");
// obj.remove("Manish");
// console.log(obj.getList());

// // Q10
let find = (n,at,dt) => {
 
    at.sort((a,b) => a-b);
    dt.sort((a,b) => a-b);
    
    let p = 1;
    let i = 1;
    let ans = 1;
    let j = 0;
    while(i<n && j<n)
    {
        if(at[i] >= dt[j])
        {
            p++;
            i++;
            j++;
        }
        else
        {
            // p--;
            i++;
        }
        ans = Math.max(ans,p);
    }
    console.log(ans);
  };
  
  let AT = [1,1,2,3];
  let DT = [2,3,3,4];
  let n = 4;
  find(n,AT,DT);
  