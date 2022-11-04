import React,{useState} from "react"
import UserApi from '../API/UserApi'
import { toast } from "react-toastify";

const Create = () => {
  const [user, setUser] = useState({
    name :"", email: "", mobile: ""
  });
  const getInput = (e) =>{
    const {name, value } = e.target;
    setUser({...user, [name]:value})
  };

  const submitHandler =(e) =>{
    e.preventDefault();
    console.log("user =", user);
    UserApi.create(user).then(res =>{
       toast.success("Successfully created");
       window.location.href= "/";
    }).catch(err =>{
      toast.error(err.message);
    })
  };
  const resetHandler =(e) =>{
    e.preventDefault();
    setUser({name:"", email:"", mobile:""})
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-secondary">Create</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={(e)=> submitHandler(e)} onReset={(e) => resetHandler(e)}>
                <div className="form-group mt-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" value  ={user.name} onChange={(e) =>getInput(e)}id="name" className="form-control"
                  required/>
                </div>
                <div className="form-group mt-3">
                <label htmlFor="email">Email</label>
                  <input type="email" name="email"value={user.email} onChange={(e) =>getInput(e)}  id="email" className="form-control"
                  required/>
                </div>
                <div className="form-group mt-3">
                <label htmlFor="mobile">Mobile</label>
                  <input type="number" name="mobile" value={user.mobile} onChange={(e)=>getInput(e)} id="mobile" className="form-control"
                  required/>
                </div>
                <div className="form-group mt-3">
            
                  <input type="submit" value="Create" className="btn btn-success" />
                  <input type="reset" value="Reset" className="btn btn-warning float-end"/>

                </div>
                <div className="form-group mt-3"></div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
