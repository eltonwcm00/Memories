// Reducer logics
// parameter = state, action

export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload; //action.payload is from ../actions/posts

        case 'CREATE':
            // return posts;
            return [...posts, action.payload];

        default:
            return posts;
    }
}