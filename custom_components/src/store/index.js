import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        // 'song' + '/' + 'addSong'
        addSong(state, action) {
            // state is not the big state object in the store , it is the  piece of state managed by this reducer
            state.push(action.payload)
        },
        
        // 'song' + '/' + 'removeSong'
        removeSong(state, action) {
            //
        }   
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

console.log(store); 


console.log(songsSlice.actions)

const startingState = store.getState();
console.log(startingState) // o/p = {songs: []}

// changing state  
// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New Song!!!'
// });
store.dispatch(songsSlice.actions.addSong("Some other song"));

const finalState = store.getState();
console.log(JSON.stringify(finalState)); // o/p = {songs: ["New Song!!!"]}

