"use client"

import { type BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";

const axiosBaseQuery = ({ baseUrl = "" }:
  { baseUrl: string }): BaseQueryFn<any, unknown, unknown> =>
  async ({ url, method, data, params }) =>{
    try{
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params
      });
      return { data: result.data };
    }
    catch(error: unknown){
      if(axios.isAxiosError(error)){
        return{
          error: {
            status: error.response?.status ?? 500,
            data: error.response?.data ?? error.message
          }
        }
      }
      else{
        return{
          error: {
            status: 500,
            data: (error as Error).message ?? "Unknown error occurred"
          }
        }
      }
    }
  };

export default axiosBaseQuery;