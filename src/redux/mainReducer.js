import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2145562Reducer from '../features/SignIn2145562/redux/reducers'
import SignIn2145548Reducer from '../features/SignIn2145548/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2145562: SignIn2145562Reducer,
SignIn2145548: SignIn2145548Reducer,

});