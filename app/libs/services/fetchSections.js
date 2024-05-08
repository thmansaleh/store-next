
import axios from 'axios';

 const url ="https://dull-plum-antelope-tutu.cyclic.cloud/sections"
 export const fetchSections= async () => {
   const response = await axios.get(url);

   return response.data;
 };


