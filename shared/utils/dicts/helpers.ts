// https://coderwall.com/p/urxpsa/remove-falsy-values-or-empty-strings-from-javascript-objects

const removeFalsy = (obj: { [key: string]: any }) => {
  let newObj: { [key: string]: any } = {};
  Object.keys(obj).forEach((prop: string) => {
    if (obj[prop]) { newObj[prop] = obj[prop]; }
  });
  return newObj;
};

export default removeFalsy;
