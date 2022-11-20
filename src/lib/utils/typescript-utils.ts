export type valueOf<T extends Record<string, unknown>> = T[keyof T];
