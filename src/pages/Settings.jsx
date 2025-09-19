export default function Settings() {
  return (
    <div className="screen">
      <h1>Account Settings</h1>
      <div stylepopx={{display:"flex",alignItems:"center",margin:"16px 0"}}>
      <img
  src="/mayy.png"        // or import if in src/assets
  alt=""
  style={{
    width: "120px",      // change to the exact size you want
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #000",  // set color/thickness after you tell me the look
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)" // optional shadow
  }}
/>


        <div>
          <strong>Marry Doe</strong><br/>
          Marry@Gmail.Com
        </div>
      </div>
      <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam</p>
    </div>
  );
}
