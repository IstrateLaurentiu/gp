import { Error } from "../types";

export class ErrorBuilder {
  public readonly errorInstance: Error;

  constructor(error?: Error) {
    this.errorInstance = error || {
      errors: [],
    };
  }

  addError(msg: string) {
    this.errorInstance.errors.push({ msg });
  }
}

export const buildSingleError = (errorMessage: string) => {
  const errorBuilder = new ErrorBuilder();
  errorBuilder.addError(errorMessage);
  return errorBuilder.errorInstance;
};
