// UnitTesting.js

/**
 * Populates the character form with test data
 * @param {Object} testData - The test data object containing character information
 * @param {Function} setCharacter - The state setter function for the character object
 */
export const populateTestData = (testData, setCharacter) => {
    if (!testData.character) {
      console.error('Invalid test data format: missing character property');
      return;
    }
  
    setCharacter(prevState => ({
      ...prevState,
      ...testData.character
    }));
  };
  
  /**
   * Simulates user input for a given field
   * @param {string} fieldName - The name of the field to update
   * @param {any} value - The value to set for the field
   * @param {Function} handleInputChange - The input change handler function
   */
  export const simulateUserInput = (fieldName, value, handleInputChange) => {
    const event = {
      target: {
        name: fieldName,
        value: value
      }
    };
    handleInputChange(event);
  };
  
  /**
   * Runs a test case by populating form fields and simulating user input
   * @param {Object} testCase - The test case object containing character information
   * @param {Function} setCharacter - The state setter function for the character object
   * @param {Function} handleInputChange - The input change handler function
   */
  export const runTestCase = (testCase, setCharacter, handleInputChange) => {
    populateTestData(testCase, setCharacter);
  
    Object.entries(testCase.character).forEach(([fieldName, value]) => {
      simulateUserInput(fieldName, value, handleInputChange);
    });
  };