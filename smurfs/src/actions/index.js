
import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/


export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED';
export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILED = 'POST_SMURFS_FAILED';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
	dispatch({type: GET_SMURFS_START})
  
 	axios.get('http://localhost:3333/smurfs')
	.then((res) => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
	.catch((err)=> dispatch({type: GET_SMURFS_FAILED, payload: err.response.data }));
  
}

export function postSmurf(newSumurf) {
	return (dispatch) => {
		dispatch({ type: POST_SMURFS_START })

		return axios.post('http://localhost:3333/smurfs',  newSumurf )
			.then((res) => {
				dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data })
			})
			.catch((err) => {
				const payload = err.response ? err.response.data : err
				dispatch({ type: POST_SMURFS_FAILED, payload })
			})
	}
}