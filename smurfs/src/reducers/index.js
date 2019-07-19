/*
  Be sure to import in all of the action types from `../actions`
*/
import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILED} from './actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this */
 
 
 const initialState = {
   smurfs: [],
   isLoading: false,
   addingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
