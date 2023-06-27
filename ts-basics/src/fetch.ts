// TypeScript adds the ability to pass types as arguments
// This is a TypeScript Generics, ie you pass a Type as an argument
function add<ParameterType>(a: ParameterType, b: ParameterType) {
  if( typeof a === "number" && typeof b === "number") {
    return a + b
  } else if ( typeof a === "string" && typeof b === "string") {
    return a + b
  }
}

const test = add<string>("hell", "world")
