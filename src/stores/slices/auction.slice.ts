import { createSlice } from "@reduxjs/toolkit"

// userState type
interface auctionState {
    auctionId : string
}

// initial value for auctionState
const initialState : auctionState = {
    auctionId : ''
}

// auctionSlice for store reducer
const auctionSlice = createSlice({
    name : 'auction',
    initialState,
    reducers : {}
})

const auctionReducer = auctionSlice.reducer;

export default auctionReducer