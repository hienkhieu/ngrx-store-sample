
import { Action } from '@ngrx/store';

export const LIKE = '[SURVEY] LIKE';
export const DISLIKE = '[SURVEY] DISLIKE';

export class LikeAction implements Action {
  readonly type: string = LIKE;
}

export class DislikeAction implements Action {
  readonly type: string = DISLIKE;
}

export type ALL = LikeAction | DislikeAction;

