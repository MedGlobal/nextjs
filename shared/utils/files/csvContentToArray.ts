function csvContentToArray(str: string, delimiter: string = ",", rowsLimit: number = 0) {
  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers: string[] = str
    .slice(0, str.indexOf("\n"))
    .split(delimiter);

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  let rows: string[] = str
    .replace(/\r/g, "")
    .slice(str.indexOf("\n") + 1)
    .split("\n");

  if (rowsLimit) {
    rows.splice(rowsLimit);
  }

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map((row) => {
    const values = row.split(delimiter);
    const el: { [key: string]: any } = {};
    headers.forEach((header, index) => {
      el[header] = values[index];
    }, {});
    return el;
  });

  // return the array
  return arr;
}

export default csvContentToArray;
