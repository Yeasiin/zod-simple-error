import { z, ZodParsedType } from "zod";

export const customErrorMap: z.ZodErrorMap = (error, ctx) => {
  /*
    This is where you override the various error codes
    */
  let message: string;
  switch (error.code) {
    case z.ZodIssueCode.invalid_type:
      if (error.received === ZodParsedType.undefined) {
        message = `${error.path} is required field`;
      } else {
        message = `filed ${error.path} Expected ${error.expected}, received ${error.received}`;
      }
      break;

    default:
      message = ctx.defaultError;
  }

  // fall back to default message!
  return { message };
};
