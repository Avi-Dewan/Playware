import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../helpers/AuthContext";


const NavBar = () => {

  // const [loggedin, setLoggedin] = useState(false);

  // useEffect(()=>{
  //   console.log("asdas");
   
  // }, []);

 
  // useEffect(()=> {
  //   console.log(localStorage.getItem("userToken"));

  //   axios.get("http://localhost:3001/users/auth",{
  //     headers: {
  //         userToken: localStorage.getItem("userToken"),
  //     }
  //   }).then((res)=>{
  //       console.log(res.data);
  //   });

  // }, []);

  const {authState, setAuthState} = useContext(AuthContext);
  let navigate = useNavigate();
  
  const logout = ()=> {
    console.log(authState.user_name, authState.user_id);
    localStorage.removeItem("userToken");
    setAuthState({ ...authState, user_name: "", user_id: null, user_is_logged: false, });

    toast.success("Logged Out !");

    navigate('/User_Login');

  }

  return (
    <div className="container-fluid">

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/Home">Playware</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"             aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item mx-2">
                        <Link className="btn btn-outline-success mr-3" to="/Home">Home</Link>
                  </li>

                  {
                     authState.user_is_logged ?
                    <li className="nav-item "  >
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={logout}>LOG OUT</button>
                    </li> :
                    <li className="nav-item mx-2">
                    <Link className="btn btn-outline-success mr-3" to="/User_Login">Log in</Link>
                    </li>
                  }
                  

                  <li className="nav-item ">
                    <Link className="btn btn-outline-secondary" to="/Admin_Options">Admin Options</Link>
                  </li>
                 
                  
                </ul>

                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                
                
                  
      
            </div>
        </div>
      </nav>

    </div>

  );
};

export default NavBar;