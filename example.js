// Example usage of the aretheylegal package
const { 
  getAgeOfConsent, 
  listStates, 
  isLegalAge, 
  hasCloseInAgeExemption,
  getAuthorityRestrictions,
  getLegalNotes
} = require('./src/index');

// List all available states
console.log("Available states:");
console.log(listStates());
console.log("\n");

// Get complete information for Texas
console.log("Complete information for Texas:");
console.log(getAgeOfConsent("Texas"));
console.log("\n");

// Check if someone is of legal age in different states
console.log("Is 17 years old legal in California?", isLegalAge("California", 17));
console.log("Is 17 years old legal in Texas?", isLegalAge("Texas", 17));
console.log("\n");

// Check close-in-age exemption information
console.log("Close-in-age exemption for Florida:");
console.log(hasCloseInAgeExemption("Florida"));
console.log("\n");

// Get authority figure restrictions
console.log("Authority figure restrictions for New York:");
console.log(getAuthorityRestrictions("New York"));
console.log("\n");

// Get legal notes for a state
console.log("Legal notes for Alabama:");
console.log(getLegalNotes("Alabama"));
