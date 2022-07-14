// https://howchoo.com/javascript/how-to-turn-an-object-into-query-string-parameters-in-javascript

export const JSONtoQueryString = (data: { [key: string]: any }): string => {
  return Object.keys(data).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');
};
