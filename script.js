// // Boolean logic = is a branch of computer science,
//                    which uses true and false values,to solve complex logical problems.

// AND, OR, NOT

const hasDriverLicense = true; // A
const hasGoodVision = true; //  B

console.log(hasDriverLicense && hasGoodVision);

console.log(hasDriverLicense || hasGoodVision);

console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive.");
// }

const isTired = false; // C

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive.");
}

const country = "Romania";
const language = "english";
const population = 19;
const isIsland = false;

if (language === "english" && population < 50 && !isIsland) {
  console.log("You should live in " + country + ".");
} else {
  console.log(country + " does not meet your criteria :(. ");
}
