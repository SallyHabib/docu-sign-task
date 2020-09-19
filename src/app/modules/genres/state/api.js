import axios from 'axios'
const baseUrl = 'http://localhost:8000/'
const resource = 'tasks'
export async function getTasks(payload) {
    return axios.get(`${baseUrl + resource}?search=${payload}`).then(function (response) {
            return response
        }
    ).catch(function (error) {
        return error
    });
}
export  async  function  addTask(payload) {
    return  axios.post(`${baseUrl+resource}`,payload).then((response)=>{
        return response
    }).catch((error)=>{
        return error.response.data.map(item=> item.msg)
    })
}
export  async  function  deleteTask(payload) {
    return  axios.delete(`${baseUrl+resource}\\${payload}`,payload).then((response)=>{
        return response
    }).catch((error)=>{
        return error.response.data.map(item=> item.msg)
    })
}
export  async  function  editTask(payload) {
    return  axios.put(`${baseUrl+resource}\\${payload.id}`,payload).then((response)=>{
        return response
    }).catch((error)=>{
        return error.response.data.map(item=> item.msg)
    })
}

