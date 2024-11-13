export const formatFocusForDisplay = (focusName, focusDetails) => {
  if (!focusDetails) return focusName;
  return `${focusDetails.ability} (${focusName})`;
};

// You can add more utility functions here as needed