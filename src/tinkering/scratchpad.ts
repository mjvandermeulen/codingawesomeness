const emptyObject = {}


if (emptyObject) {
    console.log("emptyObject evaluates to true")
}
if (emptyObject == true) {
    console.log("emptyObject == true")
}

if (emptyObject === true) {
    console.log("emptyObject === true")
}

// INTERESTING: uncomment and see what typescript says:
// if (0 == false) {
    // console.log("bla bla")
// }