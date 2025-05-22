# aretheylegal

Get age of consent laws and related legal advisements per U.S. state.

> **Disclaimer**: This is NOT legal advice and is for informational purposes only.

## Installation
```bash
npm install aretheylegal
```

## Usage

```javascript
const { 
  getAgeOfConsent, 
  listStates, 
  isLegalAge, 
  hasCloseInAgeExemption,
  getAuthorityRestrictions,
  getLegalNotes
} = require('aretheylegal');

// Get complete information for a state
console.log(getAgeOfConsent("Texas"));

// Get a list of all available states
console.log(listStates());

// Check if someone is of legal age in a state
console.log(isLegalAge("California", 17)); // false
console.log(isLegalAge("Texas", 17)); // true

// Check close-in-age exemption information
console.log(hasCloseInAgeExemption("Florida"));

// Get authority figure restrictions
console.log(getAuthorityRestrictions("New York"));

// Get legal notes for a state
console.log(getLegalNotes("Alabama"));
```

## API

### getAgeOfConsent(stateName)
Returns complete consent data for the specified state.

### listStates()
Returns an array of all available state names.

### isLegalAge(stateName, age)
Returns a boolean indicating whether the specified age is at or above the age of consent for the specified state.

### hasCloseInAgeExemption(stateName)
Returns information about close-in-age exemptions for the specified state.

### getAuthorityRestrictions(stateName)
Returns information about authority figure restrictions for the specified state.

### getLegalNotes(stateName)
Returns legal notes for the specified state.

## Data Structure

Each state's data follows this structure:

```javascript
{
  "state": "State Name",
  "age_of_consent": 16, // Age of consent in years
  "close_in_age_exemption": {
    "exists": true, // Whether close-in-age exemptions exist
    "details": "Description of exemptions"
  },
  "authority_figure_restrictions": {
    "exists": true, // Whether authority figure restrictions exist
    "details": "Description of restrictions"
  },
  "legal_notes": "Additional legal information"
}
```

## License

MIT
