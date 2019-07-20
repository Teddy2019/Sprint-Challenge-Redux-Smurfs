/*
  Be sure to import in all of the action types from `../actions`
*/
import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILED} from '../actions'
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
const rootReducer = (state = initialState, action) => {
  switch(action.type){
      case GET_SMURFS_START:
          return {
              ...state,
              isLoading: true,
          }
 
      case GET_SMURFS_SUCCESS:
          return {
              ...state,
              smurfs: action.payload,
              isLoading: false,
          }
 
      case GET_SMURFS_FAILED:
          return {
              ...state,
              isLoading: false,
              error: action.payload.error,
          }
 
      case  POST_SMURFS_START: {
          return {
              ...state,
              addingSmurf: true,
          }
      }
      case  POST_SMURFS_SUCCESS: {
          return {
              ...state,
              smurfs: action.payload,,
              error: null,
          }
      }
      case POST_SMURFS_FAILED: {
          return {
              ...state,
              addingSmurf: false,
              error: action.payload.error,
          }
      }
 
    default:
      return state
  }
 };
 
 export default rootReducer;