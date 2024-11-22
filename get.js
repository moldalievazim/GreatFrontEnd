/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */

export default function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let index = 0;
  let length = path.length;
  let obj = objectParam;

  while (obj != null && index < length) {
    obj = obj[String(path[index])];
    index++;
  }

  const value = index && index === length ? obj : undefined;
  return value !== undefined ? value : defaultValue;
}

const person = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Chicago",
  },
};

// Get the city name
const city = get(person, "address.city");
console.log(city); // Output: 'Anytown'

// Get a non-existent property with a default value
const age = get(person, "age", 30);
console.log(age); // Output: 30
