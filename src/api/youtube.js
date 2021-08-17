import axios from 'axios';

const KEY = 'AIzaSyBVkUP5IF6Qlw91HMY8LsgvcyLXwt7Sdio';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});