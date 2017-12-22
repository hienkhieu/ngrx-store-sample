import * as SurveyActions from './actions';
import { Survey } from './models';

export type Action = SurveyActions.ALL;

const defaultState: Survey = {
  like: 0,
  dislike: 0
};

const newState = (state, data) => {
  return Object.assign({}, state, data);
};

export function SurveyReducer(state: Survey = defaultState, action: Action) {
  switch (action.type) {
    case SurveyActions.LIKE:
      return newState(state, {like: state.like + 1});
    case SurveyActions.DISLIKE:
      return newState(state, {dislike: state.dislike + 1});
    default:
      return state;
  }
}
