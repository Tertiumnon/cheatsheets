interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;    // ok, length is a number
  name: string;      // ok, name is a string
}

let myDict: NumberOrStringDictionary;

myDict = {
  id: 1,
  length: 12,
  name: 'Prancing Pony'
};

myDict = {
  id: 'one',
  length: 12,
  name: 'Prancing Pony'
};
