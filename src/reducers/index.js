import { combineReducers } from "redux";

const songsReducer = () =>
{
    return [
        {title: 'I Don\'t Mind', duration: '4:20'},
        {title: 'Take My Head', duration: '6:23'},
        {title: 'RIT', duration: '2:45'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) =>
{
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }

    return selectedSong;

};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});