import { BsGraphDown } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { LuSpeaker } from "react-icons/lu";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { Link, Routes, Route } from 'react-router-dom';
import AdminItemsPage from "./adminItemsPage";
import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItmPage";
import AdminUsersPage from "./adminUsersPage";

import AdminOrdersPage from "./adminBookingPage";
import { useEffect, useState } from "react";
import axios from "axios";



export default function AdminPage() {
  const[userValidated,setUserValidated]=useState(false);

  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(!token){
      window.location.href="/login";
    }

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{
      console.log(res.data);
      const user=res.data;
      if(user.role!=="admin"){
        setUserValidated(true);
        
      }else{
        window.location.href="/";
      }
      
    }).catch((err)=>{
      console.error(err);
      setUserValidated(false);
    })


  },[])
  return (
    <div className='w-full h-screen flex'>
      <div className='w-[200px] h-full bg-gray-200'>
        <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
          <BsGraphDown />
          Dashboard
        </button>
        <Link to="/admin/orders" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
          <PiBookmarkSimpleBold />
          Orders
        </Link>
        <Link to="/admin/items" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
          <LuSpeaker />
          Items
        </Link>
        <Link to="/admin/users" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
          <FaRegUser />
          Users
        </Link>

      </div>
      <div className='w-[calc(100vw-200px)] h-screen'>
        {/* මෙයද ස්තීර නැති ප්‍රදේශයක් නිසා මෙයත් Routes වලින් wrap කරගන්න ඕනෙ */}
        {userValidated && <Routes path="/*">
          <Route path="/orders" element={<AdminOrdersPage/>} />
          <Route path="/users" element={<AdminUsersPage/>}/>
          <Route path="/items" element={<AdminItemsPage/>}/>
          <Route path="/items/add" element={<AddItemPage/>}/>
          <Route path="/items/edit" element={<UpdateItemPage/>}/>
        </Routes>}

      </div>

    </div>
  )
}