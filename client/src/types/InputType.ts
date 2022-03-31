import { ChangeEvent, KeyboardEvent } from "react";
export type InputEventType =
  | ChangeEvent<HTMLInputElement>
  | KeyboardEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>
  | ChangeEvent<HTMLTextAreaElement>;
