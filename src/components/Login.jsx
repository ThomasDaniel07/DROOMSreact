import React, { useRef } from "react";
import InstaLogo from '../assets/instagram.png';
import FacebookLogo from '../assets/facebook.png';
import Gmail from '../assets/gmail.png';
import Logo from '../assets/LogoDrooms.png';
import Footer from "./Footer";
import { BsPeopleFill } from "react-icons/bs"
import { FaSchool } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { useState } from "react";

const EnviarData = async(urlP,data)=>{
  const peticion = await fetch (urlP,{
    method:'POST',
    body: JSON.stringify(data),
    headers:{'Content-Type':'appiclation/json'}
  })
  const result = await peticion.json();

  return result
}
export default function Login(props){

  const [espera,setEspera] = useState(false)

  const refUsuario = useRef()
  const refEntidad = useRef()
  const refContrasena = useRef()


  const btnLogin = async ()=>{

    setEspera(true);

    const data = {
      'usuario' : refUsuario.current.value,
      'entidad' : refEntidad.current.value,
      'contrasena' : refContrasena.current.value
    }
    
    let resultado = await EnviarData('http://localhost/drooms_query/funciones.php',data);


    const box = document.querySelector('.box');
    const element = document.createElement('p');
    const btn = document.querySelector('#btnSubmit')
    if (resultado.error) {
      element.classList.add('error');
      element.textContent = resultado.error;
      box.appendChild(element);
      btn.addEventListener('click',()=>{
        box.removeChild(element);
      })
    }else{
      props.acceder(resultado.conectado);
    }


    setEspera(false)

    

  }
  

  return (
    // CONTAINER de Todo

    <div className="min-w-max w-screen h-screen flex bg-white" name="login"> 
      
      {/* NAV CONTAINER */}

      <div className="hidden bg-[#477BFF] h-screen flex-wrap flex-col justify-around items-center lg:flex w-3/12">

        <img src={Logo} alt="logo de Drooms" width={200}/>

        <ul className="flex items-center justify-evenly w-full">

          <li className="flex flex-col items-center rounded-full hover:shadow-2xl hover:scale-110 duration-500"><a href="/"><img src={InstaLogo} alt="pagina de drooms en instagram"  width={50}/></a></li>

          <li className="flex flex-col items-center rounded-full hover:shadow-2xl hover:scale-110 duration-500"><a href="/"><img src={FacebookLogo} alt="pagina de drooms en Facebook" width={50} /></a></li>

          <li className="flex flex-col items-center rounded-full hover:shadow-2xl hover:scale-110 duration-500"><a href="/"><img src={Gmail} alt="pagina de drooms en instagram" width={50} /></a></li>

        </ul>

      </div>  

      {/* FORM AND TITLE CONTAINER */}


      <div className="w-full flex flex-col items-center justify-center lg:w-9/12 font-['SF Pro Text'] font-semibold">

        <img src={Logo} alt="" width={120}/>


        <h2 className="text-6xl font-extrabold mt-6 mb-6 relative top-[0px]  sm:top-[0px]">DROOMS</h2>

        <div className="box  text-center flex flex-col w-80 text-white justify-evenly" id="formulario" method="post">

          <div className="flex items-center">
            <BsPeopleFill fill="#477BFF" />
            <span className="text-black ml-2">USUARIO</span>
          </div>

          <input type="text" required ref={refUsuario} placeholder='IED TEST' className=" bg-gray-800 mt-2 p-2 hover:border-1 hover:border-blue-500 placeholder-slate-300 hover:shadow" name="usuario"/>
 
          <div className="flex items-center mt-4">
            <FaSchool  fill="#477BFF" />
            <span className="text-black ml-2">ENTIDAD</span>
          </div>

          <select name="entidad"  required ref={refEntidad} className="bg-gray-800 mt-2 p-2 focus:border-2 focus:border-blue-500 placeholder-slate-300">

            <option value="" className="placeholder-slate-300" disabled selected><FaSchool /> IED Test</option>

            <option value="sanjose" className="placeholder-slate-300"><FaSchool /> I.E.D San Jose</option>

            <option value="luzdelca" className="placeholder-slate-300"><FaSchool /> I.E.D Luz del Caribe</option>

          </select>

          <div className="flex items-center mt-4">
            <RiLockPasswordFill fill="#477BFF" />
            <span className="text-black ml-2">CONTRASEÑA</span>
          </div>

          <input type="password"   required placeholder="PasswordTest" name="contrasena" ref={refContrasena} className=" bg-gray-800 mt-2 p-2 hover:border-1 hover:border-blue-500 placeholder-slate-300 hover:shadow"/>


          <button type="button" id="btnSubmit" disabled={espera} className=" bg-[#477BFF] text-white font-bold p-2 text-2xl mt-7 m-auto rounded-sm w-64 hover:bg-[#3359b9]" onClick={btnLogin}>Login</button>

          

        </div>

        {/* IMPORTACION DEL COMPONENTE FOOTER */}
        
        <Footer />

      </div>  

  </div>
  )
}
