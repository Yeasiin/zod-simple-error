"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customErrorMap = void 0;
const zod_1 = require("zod");
const customErrorMap = (error, ctx) => {
    /*
      This is where you override the various error codes
      */
    let message;
    switch (error.code) {
        case zod_1.z.ZodIssueCode.invalid_type:
            if (error.received === zod_1.ZodParsedType.undefined) {
                message = `${error.path} is required field`;
            }
            else {
                message = `filed ${error.path} Expected ${error.expected}, received ${error.received}`;
            }
            break;
        default:
            message = ctx.defaultError;
    }
    // fall back to default message!
    return { message };
};
exports.customErrorMap = customErrorMap;
