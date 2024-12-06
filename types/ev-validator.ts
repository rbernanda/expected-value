import type { EvInputKey } from "./ev-input-key.ts";

export type EvValidator = (value: number, key: EvInputKey) => number;

export type Validator = (value: number) => number;
