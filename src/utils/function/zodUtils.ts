import { type Dispatch, type SetStateAction } from "react";
import { type ZodError } from "zod";

export const handleErrorValidation = <T,>(err: ZodError, setError: Dispatch<SetStateAction<T>>) => {
    if (err.errors.length > 0) {
        err.errors.forEach((error) => {
            if (error.path[0]) {
                setError((prev) => ({
                    ...prev,
                    [error?.path[0] as string as keyof T]: true,
                }));
            }
        });
    }
};