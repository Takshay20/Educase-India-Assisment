import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();
  return (
    <div className="screen">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button className="btn-primary" onClick={()=>nav("/register")}>Create Account</button>
      <button className="btn-secondary" onClick={()=>nav("/login")}>Already Registered? Login</button>
    </div>
  );
}
