import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css'
import AdminPage from './pages/admin/Adminpage';
import HomePage from './pages/home/homePage';
import Testing from './components/testing';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import RegisterPage from '../register/register';
import BookingPage from './pages/home/bookingPage';



function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-right"></Toaster>
      <Routes path="/*">
        <Route path="/testing" element={<Testing/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path ="/admin/*" element={<AdminPage/>}/>
        {/*'admin/*' මෙසේ යොදා ඇත්තෙ admin ලෙස url එකේ සදහන් කර එතනින් පස්සෙ ගහන
        ඔනෑම අදාල නැති url වලින් එන අයට මුලින්ම admin page එක පෙන්නීම */}
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/cart" element={<BookingPage/>}/>
        
        <Route path = "/*" element={<HomePage/>}/> {/* home එකේ url එකෙන් පස්සෙ ගහන අනිත් ඕනෑම අදාල නැති url වලින් එන අයට මුලින්ම home page එක පෙන්නීම*/}

      </Routes>
  </BrowserRouter>
  )

}

export default App
