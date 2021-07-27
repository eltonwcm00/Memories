import * as api from '../api';

// Create Redux actions

// function return another function (redux-thunk)
// aysnc process, ease by using redux-thunk

export const getPosts = () => async (dispatch) => {
    
    try {
        
        const { data } = await api.fetchPosts();
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        });

    } catch (err) {
        console.log(err.message);
    }
    
    // const action = {
    //     type: 'FETCH_ALL',
    //     payload: []
    // }

    // dispatch(action);
}