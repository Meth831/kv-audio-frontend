import { useState } from "react";
import "./login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){


    const [email,setEmail] = useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    function login(){
        console.log(email,password)

        axios.post("http://localhost:3000/api/users/login",
            {
                email:email,
                password:password
            }
        ).then((res)=>{
            console.log(res)
            toast.success('Login Successfully!')

            const user = res.data.user
            if(user.role === "admin"){
                navigate("/admin/")
            }else{
                navigate("/")
            }

        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.error)
        })
    }
    return(
    <div className="bg-picture w-full h-screen flex justify-center items-center">
        <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
            <img src="/logo.png" alt="logo" className="w-[100px] h-[150px] absolute top-1 object-cover"/>

            <input type="email" placeholder="Email" className="mt-11 w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
            onChange={(e) =>{
                setEmail(e.target.value)
            }}/>
            <input type="password" placeholder="Password" className="mt-4 w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={password}
            onChange={(e) =>{
                setPassword(e.target.value)
            }}/>

            <button className="my-8 w-[300px] h-[50px] bg-[#efac38] text-xl text-white rounded-lg"onClick={login}>Login</button>

        </div>
    </div>
    )
}