import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  return (
    <div className="screen">
      <h1>Create your PopX account</h1>
      <label>Full Name*</label>
      <input type="text" placeholder="Marry Doe"/>
      <label>Phone number*</label>
      <input type="text" placeholder="Marry Doe"/>
      <label>Email address*</label>
      <input type="email" placeholder="Marry Doe"/>
      <label>Password*</label>
      <input type="password" placeholder="Marry Doe"/>
      <label>Company name</label>
      <input type="text" placeholder="Marry Doe"/>
      <p style={{fontSize:"12px",margin:"8px 0"}}>Are you an Agency?*</p>
      <div className="radio-group">
        <label><input type="radio" name="agency" defaultChecked/> Yes</label>
        <label><input type="radio" name="agency"/> No</label>
      </div>
      <button className="btn-primary" onClick={()=>nav("/settings")}>Create Account</button>
    </div>
  );
}
