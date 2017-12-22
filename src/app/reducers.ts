import * as SurveyActions from "./actions";
import { Survey } from "./models";
import { ActionReducer } from "@ngrx/store/src/models";
import {
  createFeatureSelector,
  createSelector
} from "@ngrx/store/src/selector";

export type Action = SurveyActions.SurveyActions;

const defaultState = {
  like: 0,
  dislike: 0,
  likeMessage: "",
  dislikeMessage: ""
};

const newState = (state, data = null) => {
  return Object.assign({}, state, data);
};

export function SurveyReducer(
  state: Survey = defaultState,
  action: Action
): ActionReducer<Survey> {
  switch (action.type) {
    case SurveyActions.LIKE:
      return newState(state, {
        like: state.like + 1,
        likeMessage: action.message
      });
    case SurveyActions.DISLIKE:
      return newState(state, {
        dislike: state.dislike + 1,
        dislikeMessage: action.message
      });
    default:
      return newState(state);
  }
}

export const getSurveyState = createFeatureSelector<Survey>("survey");

export const getLikes = createSelector(
  getSurveyState,
  (state: Survey) => state.like
);

export const getDisLikes = createSelector(
  getSurveyState,
  (state: Survey) => state.dislike
);

export const getLikeMessage = createSelector(
  getSurveyState,
  (state: Survey) => state.likeMessage
);

export const getDislikeMessage = createSelector(
  getSurveyState,
  (state: Survey) => state.dislikeMessage
);
