import { customErrorMap } from "./errorMap";
import { z } from "zod";

z.setErrorMap(customErrorMap);
