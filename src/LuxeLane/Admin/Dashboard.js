import React, { useContext, useEffect, useState } from 'react'

import Welcome from './Welcome'



import { loginStatus } from '../../App'

import AddMen from '../AddMen'
import ViewMen from './ViewMen'
import AddWomen from '../AddWomen'
import ViewWomen from './ViewWomen'
import AddKids from '../AddKids'
import ViewKids from './ViewKids'
import AddFA from '../AddFA'
import ViewFA from './ViewFA'
import AddBlog from '../AddBlog'

import ViewEnquiries from './ViewEnquiries'
import ViewBlogs from './ViewBlogs'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ViewUserSignup from './ViewUsersignup'


const Dashboard = () => {
    const [view,setView] = useState("")
    const [token,setToken] = useContext(loginStatus)
    const[user,setUser] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
    if (token === "") {
      navigate("/admin");
    } else {
      axios
        .get("https://luxelane-server-zyhb.onrender.com/dashboard", {
          headers: {
            "x-token": token,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, navigate]);
    const dashboardView = ()=>{
      if(view ===""){
        return <Welcome/>
      }
      else if(view === "addMen"){ 
        return <AddMen/>
      }
      else if(view ==="viewMen"){
        return <ViewMen/>
      }
      else if(view ==="addWomen"){
        return <AddWomen/>
      }
      else if(view ==="viewWomen"){
        return <ViewWomen/>
      }
      else if(view ==="addKids"){
        return <AddKids/>
      }
      else if(view ==="viewKids"){
        return <ViewKids/>
      }
      else if(view ==="addFA"){
        return <AddFA/>
      }
      else if(view ==="viewFA"){
        return <ViewFA/>
      }
      
      
      else if(view ==="viewEnquiries"){
        return <ViewEnquiries/>
      }
      else if(view ==="addBlog"){
        return <AddBlog/>
      }
      else if(view ==="viewBlogs"){
        return <ViewBlogs/>
      }
       else if(view ==="viewUsersignups"){
        return <ViewUserSignup/>
      }
      else{
        return <h1>Invalid View</h1>
      }
    }
    
      return (
        <div className='container-fluid'>
            <div className='row dashboard'>
                <aside className='col-lg-3  main'>
                   <h2 className='fs-4 ' style={{color:"#392467"}}>Welcome {user.name}</h2>
                    <h2 onClick={()=>setView("")}>Admin Dashboard</h2>
                    <button onClick={()=>setView("addMen")}>Add Men</button>
                    <button onClick={()=>setView("viewMen")}>View Men</button>
                    <button onClick={()=>setView("addWomen")}>Add Women</button>
                    <button onClick={()=>setView("viewWomen")}>View Women</button>
                    <button onClick={()=>setView("addKids")}>Add Kids</button>
                    <button onClick={()=>setView("viewKids")}>View Kids</button>
                    <button onClick={()=>setView("addFA")}>Add FA</button>
                    <button onClick={()=>setView("viewFA")}>View FA</button>
                     
                    <button onClick={()=>setView("addBlog")}>Add Blog</button>
                    <button onClick={()=>setView("viewBlogs")}>View BlogS</button>
                    <button onClick={()=>setView("viewUsersignups")}>View Users</button>
                    <button onClick={()=>setView("viewEnquiries")}>View Enquiries</button>
                    
                    <button onClick={()=>setToken("")}>Logout</button>
                </aside>
                <div className="col-lg-9 overflow-x-auto">
                  {dashboardView()}
                </div>
            </div>
        </div>
      )
   
  
}

export default Dashboard