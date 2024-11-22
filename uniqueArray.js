// However, this solution is O(n2) because Array.prototype.includes() is an O(n) operation and we do it once for every element in the input array.
export default function uniqueArray(array) {
  const result = [];

  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
}


// we can use Set.prototype.has() to query in O(1) time for the existence of an element. The structure is similar to the brute force approach above. The time complexity of this solution is O(n).
export default function uniqueArray(array) {
   const result = [];
   const seen = new Set();
 
   array.forEach((item) => {
     if (!seen.has(item)) {
       result.push(item);
       seen.add(item);
     }
   });
 
   return result;
 }
 

//  The simplest one-liner answer is to convert the array into a Set, then back into an array. The time complexity of this solution is also O(n).
export default function uniqueArray(array) {
   return Array.from(new Set(array));
 }
 