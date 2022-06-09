import API from '../services/Webapi.services';
import {BASE_URL} from '../services/Urls';

export const PegarTodosAlunos = async () => {
        return await API.get(`${BASE_URL}/660/users`).then(
            (response) => {
                var array = new Array();
                  response.data.forEach(obj => {   
                        array.push( obj.id + " - " + obj.name)
                    }
                )
                return array;
            }
        );
  
};