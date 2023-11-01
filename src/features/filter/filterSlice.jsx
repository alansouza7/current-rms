import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";


const apiKey = "1m26tGiFj2AQmePwPR3r";
const subdomain = "alan";
const url = `https://api.current-rms.com/api/v1/products`;


const headers = {
  "X-SUBDOMAIN": subdomain,
  "X-AUTH-TOKEN": apiKey,
};



export const getFilterItems = createAsyncThunk('filter/getFilterItems', 
async (thunkAPI)=>{
  try {
    const response = await axios.get(url, { 
      headers,
     },);
    return response.data.products;
  } catch (error) {
    return thunkAPI.rejectWithValue("error")
  }
})


const initialState = {
  filterItems: [],
  name: "", 
  group: "",
  isLoading: true,
}


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      getName: (state, { payload }) => {
        const name = payload
        state.name = name;
      },

      getGroup: (state, { payload }) => {
        const group = payload
        if(group === "all"){
          state.group = ""
        }else {
          state.group = group;
        }
      },
      clearFilters: (state) =>{
        state.name = ""
        state.group =""
      }
    },
    
    extraReducers: (builder)=> {
      builder.addCase(getFilterItems.pending,(state)=>{
        state.isLoading = true
      } )
      .addCase(getFilterItems.fulfilled, (state, action)=>{
        state.isLoading = false
        state.filterItems = action.payload
      })
      .addCase(getFilterItems.rejected,(state)=>{
        state.isLoading = false
      } )
  
    }, 
  
  });


export const {getName, getGroup,clearFilters} = filterSlice.actions

export default filterSlice.reducer