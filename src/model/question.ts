import { Response } from "./response";

export interface Question {
  id: number;
  text: string;
  image: string;
  responses: Response[];
  correctResponses: string;
}