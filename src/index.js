const fs = require('fs');
const path = require('path');

// Load the state index
const stateIndex = require('../stateIndex.json');

/**
 * Get consent data for a specific state
 * @param {string} stateName - The name of the state to get data for
 * @returns {Object} The consent data for the specified state
 */
function getAgeOfConsent(stateName) {
  try {
    // Normalize state name for case-insensitive comparison
    const normalizedStateName = stateName.trim();
    
    // Find the exact state name from the index (case-insensitive)
    const exactStateName = stateIndex.states.find(
      state => state.toLowerCase() === normalizedStateName.toLowerCase()
    );
    
    if (!exactStateName) {
      throw new Error(`No data found for state: ${stateName}`);
    }
    
    // Load the state data from the individual file
    const stateData = require(`../states/${exactStateName}.json`);
    return stateData;
  } catch (error) {
    throw new Error(`Error retrieving data for ${stateName}: ${error.message}`);
  }
}

/**
 * List all available states
 * @returns {Array} Array of state names
 */
function listStates() {
  return stateIndex.states;
}

/**
 * Check if a person is of legal age of consent in a specific state
 * @param {string} stateName - The name of the state to check
 * @param {number} age - The age of the person
 * @returns {boolean} Whether the person is of legal age of consent
 */
function isLegalAge(stateName, age) {
  const stateData = getAgeOfConsent(stateName);
  return age >= stateData.age_of_consent;
}

/**
 * Check if close-in-age exemptions apply in a specific state
 * @param {string} stateName - The name of the state to check
 * @returns {Object} Information about close-in-age exemptions
 */
function hasCloseInAgeExemption(stateName) {
  const stateData = getAgeOfConsent(stateName);
  return stateData.close_in_age_exemption;
}

/**
 * Get authority figure restrictions for a specific state
 * @param {string} stateName - The name of the state to check
 * @returns {Object} Information about authority figure restrictions
 */
function getAuthorityRestrictions(stateName) {
  const stateData = getAgeOfConsent(stateName);
  return stateData.authority_figure_restrictions;
}

/**
 * Get legal notes for a specific state
 * @param {string} stateName - The name of the state to check
 * @returns {string} Legal notes for the specified state
 */
function getLegalNotes(stateName) {
  const stateData = getAgeOfConsent(stateName);
  return stateData.legal_notes;
}

module.exports = {
  getAgeOfConsent,
  listStates,
  isLegalAge,
  hasCloseInAgeExemption,
  getAuthorityRestrictions,
  getLegalNotes
};
