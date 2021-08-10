import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: 
    {
        Authorization: 'Client-ID tACPZF0LenUiQsMtlkzebzg7dtJydYPRkv2_rQjPEc4'
    }
});