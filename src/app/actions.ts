
import { Action } from '@ngrx/store';

export const LIKE = '[SURVEY] LIKE';
export const DISLIKE = '[SURVEY] DISLIKE';

export class LikeAction implements Action {
  readonly type: string = LIKE;
  constructor(public message: string = '') {}
}

export class DislikeAction implements Action {
  readonly type: string = DISLIKE;
  constructor(public message: string = '') {}
}

export type ALL = LikeAction | DislikeAction;

