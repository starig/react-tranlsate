import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const translateRequest = createAsyncThunk(
    'translate/requestStatus',
    async (value) => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", 'Привет, мир!');
        encodedParams.append("target", "ru");
        encodedParams.append("source", "en");

        const options = {
            method: 'POST',
            url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '0e4e8d421amsh1c94abf41627ba8p168f52jsn4b137549c2cf',
                'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            },
            data: `{"q":"${value}","source":"ru","target":"en"}`
        };

        const request = axios.request(options).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
        return request;
    }
)


const initialState = {
    outputValue: '',
    isFetching: false,
}

const translateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(translateRequest.fulfilled, (state, action) => {
            state.isFetching = false;
            state.outputValue = action.payload.data.translations.translatedText;
        });
        builder.addCase(translateRequest.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(translateRequest.rejected, (state) => {
            state.isFetching = false;
            state.outputValue = '';
        });
    }
})

export default translateSlice.reducer