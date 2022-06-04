import API from '../services/Webapi.services';
import {BASE_URL} from '../services/Urls';

export const PegarTodosAlunos = async () => {
    var array = new Array();
        return await API.get(`${BASE_URL}/660/users`).then(
            (response) => {
                  response.data.forEach(obj => {   
                        array.push( obj.id + " - " + obj.name)
                    }
                )
                console.log(array)
                return array;
            
            }
        );
  
};