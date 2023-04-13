import axios from "axios";

//start json server -> json-server --watch -d 180 --host 192.168.1.112 db.json
//start json server -> npx json-server --watch -d 180 --host 192.168.1.112 db.json

const api = axios.create({
  baseURL: 'http://192.168.1.112:3000' 
  //baseURL: 'http://172.20.10.3:3000'
});
export default api;
