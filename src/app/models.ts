
import { Survey } from './models';
export interface Survey {
  like: number;
  dislike: number;
  likeMessage: string;
  dislikeMessage: string;
}

export interface AppState {
  survey: Survey;
}
