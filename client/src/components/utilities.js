/**
 * Formats focus data for display
 * @param {Object} focusData - The focus data object
 * @returns {string} Formatted focus string
 */
export const formatFocusForDisplay = (focusData) => {
  if (!focusData) return 'Unknown Focus';
  return `Focus: ${focusData.ability} (${focusData.focus})`;
};

// You can add more utility functions here as needed