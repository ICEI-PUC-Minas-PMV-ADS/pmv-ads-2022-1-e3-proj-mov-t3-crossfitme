import API from '../services/Webapi.services'
import { BASE_URL } from '../services/Urls';


export const register = async (param) => {
    try{
      return await API.post(`${BASE_URL}/register`, param).then( 
        response => {
          return response.data;
        },
        error =>{
          console.log(error);
          return  null;
        }
      );
    }catch(error){
      console.log(error);
      return null;
    }
  }

  export const login = async (param) => {
    try{
      return await API.post(`${BASE_URL}/login`, param).then( 
        response => {
          return response.data;
          console.log(response.data);
        },
        error =>{
          console.log(error);
          return  null;
        }
      );
    }catch(error){
      console.log(error);
      return null;
    }
  }