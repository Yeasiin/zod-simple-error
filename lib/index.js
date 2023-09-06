"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMap_1 = require("./errorMap");
const zod_1 = require("zod");
zod_1.z.setErrorMap(errorMap_1.customErrorMap);
