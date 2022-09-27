import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPlayLists = createAsyncThunk('data/fetchPlayLists', async () => {
    let dataFile = require('./data.json');
    let stringData = JSON.stringify(dataFile);
    return stringData;
})

