// from: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript

const equal = (a: any[], b: any[]) => {
  return !!a && !!b && !(a<b || b<a)
}

export default equal
