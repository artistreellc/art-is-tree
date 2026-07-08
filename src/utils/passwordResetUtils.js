
import bcrypt from 'bcryptjs';

/**
 * Utility functions for password reset flow
 */

/**
 * Hashes a password using bcryptjs.
 * Note: While hashing on the frontend is provided for this specific architecture, 
 * standard practice normally hashes on the server.
 * @param {string} password - The plain text password
 * @returns {string} The hashed password
 */
export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

/**
 * Validates password strength (minimum 8 characters, at least one uppercase, one lowercase, one number, one special char)
 * @param {string} password - The password to validate
 * @returns {boolean} True if password meets strength requirements
 */
export const validatePasswordStrength = (password) => {
  if (!password || password.length < 8) return false;
  
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  
  return hasUppercase && hasLowercase && hasNumber && hasSpecial;
};

/**
 * Generates a secure random 32-character token.
 * Provides client-side generation capability if needed.
 * @returns {string} Secure random token
 */
export const generateSecureToken = () => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};
