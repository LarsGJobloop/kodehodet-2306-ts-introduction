/**
 * 
 */
type customType = number | string

// Dette er JSDoc strenger
function sumTs(a: customType, b: any) {
 return a + b
}

sumTs(32, 23)