import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export default createSlice({
    
})

export const fetchDatas = createAsyncThunk('data/fetchDatas', async () => {
    let dataFile = require('./data.json');
    let stringData = JSON.stringify(dataFile);
    return stringData;
})