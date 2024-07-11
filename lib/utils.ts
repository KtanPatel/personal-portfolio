const EMAIL_MIN_LENGTH = 5;
const EMAIL_MAX_LENGTH = 50;

export const validateEmail = (str: unknown) => {
  if (typeof str !== "string" && !(str instanceof String)) {
    throw new TypeError(`${str} must be a string`);
  }

  const validation = validateLength(str, EMAIL_MIN_LENGTH, EMAIL_MAX_LENGTH);
  if (validation.error) {
    return validation;
  }

  if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(str as string)) {
    return { error: `${str} is not an email address` };
  }

  return { error: null };
};

export const validateLength = (str: unknown, min: number, max: number) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof str !== "string" && !(str instanceof String)) {
    return { error: `${str} must be a string` };
  }

  if (str.length < min) {
    return { error: `${str} must be at least ${min} chars long` };
  }

  if (str.length > max) {
    return { error: `${str} must contain ${max} chars at most` };
  }

  return { error: null };
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
