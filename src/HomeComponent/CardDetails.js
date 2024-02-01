
import sortingpic from "./images/sortingpic.png";
import comingsoon from "./images/comingsoon.jpg"

export function getDetails(){
   return [
    
       {
           id:1,
           title:"Sorting",
           description:"Explore three types of sorting, bubble sort, selection sort, insertion sort...",
           route:"/sorting",
           img:sortingpic
       },
       {
           id:2,
           title:"Recursion tree, BinarySearch, on the way..",
           description:"Many more algorithms are yet to come...",
           route:"/",
           img:comingsoon
       }       
   ]
}
