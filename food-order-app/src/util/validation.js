export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function validatePostalCode(postalCode) {
  const pattern = /^\d{5}(-\d{4})?$/;
  if (!pattern) return false;
  return pattern.test(postalCode.trim());
}
