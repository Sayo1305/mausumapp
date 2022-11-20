const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
      Data: [],
      clicked: false,
      lat: 28.612894,
      long: 77.229446,
      start: false,
      hourlydata: [],
      threedaydata: [],
}

const ApiData = createSlice({
  name: 'Data',
  initialState,
  reducers: {
      SetApiData : (state , actions)=>{
            state.Data = actions.payload;
      },
      Setclicked : (state , action) =>{
            state.clicked = action.payload;
      },
      SetLongitude :(state , action) =>{
            state.long  = action.payload;
      },
      SetLatitude : (state , action) => {
            state.lat = action.payload;
      },
      Setstart : (state , action) =>{
            state.start = action.payload;
      },
      SetHourdata : (state, action)=>{
            state.hourlydata = action.payload;
      },
      SetThreedaydata : (state , action)=>{
            state.threedaydata = action.payload;
      }
  }
});

export const {SetApiData , Setclicked , SetLatitude , SetLongitude , Setstart , SetHourdata ,SetThreedaydata} = ApiData.actions

export default ApiData.reducer