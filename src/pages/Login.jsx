import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  return (
    <div className="screen">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <label>Email Address</label>
      <input type="email" placeholder="Enter email address"/>
      <label>Password</label>
      <input type="password" placeholder="Enter password"/>
      <button style={{background:"#c4c4c4", color:"#fff"}} onClick={()=>nav("/settings")}>Login</button>
    </div>
  );
}
