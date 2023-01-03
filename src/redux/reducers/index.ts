import { oauthSlice, oauthState } from '@/redux/reducers/oauth.slice'
import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

type ReducerState = {
  oauth: oauthState
}

const rootReducers = (state: any, action: AnyAction): CombinedState<ReducerState> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return combineReducers({
        oauth: oauthSlice.reducer
      })(state, action)
  }
}

export default rootReducers
