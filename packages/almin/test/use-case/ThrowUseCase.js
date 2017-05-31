// LICENSE : MIT
"use strict";
import { UseCase } from "../../lib/UseCase";
export class ThrowUseCase extends UseCase {
    execute() {
        // throw Error insteadof returing rejected promise
        throw new Error("error");
    }
}
