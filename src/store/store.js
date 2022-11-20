import { configureStore } from "@reduxjs/toolkit";
import ApiData from "./Slicers/ApiData";

export default configureStore({
      reducer :{
            Data : ApiData,
      }
})