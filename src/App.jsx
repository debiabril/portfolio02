import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import axios from 'axios';
import { useEffect } from 'react';


function App() {
  /* useEffect(() => {
    const skills = async () =>{
        try {
            const res = await axios.get('https://backenddab.onrender.com/skill/lista');
            console.log(res);
        } catch (error) {
            console.error(err)
        }
    }
    skills();
},[]); */
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
