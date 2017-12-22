
import { Survey } from './models';
export interface Survey {
  like: number;
  dislike: number;
}

export interface AppState {
  survey: Survey;
}
