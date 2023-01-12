function App() {
  return (
    <div className="mainContainer">
      <div className="imgContainer">
        <img src="/Vector1.png" className="mtnLogo" alt="mtnLogo" />
        <h1>E-Test</h1>
        <h2>Application</h2>
      </div>
      <div className="formContainer">
        <h1>Y'ello</h1>
        <p>Please enter your correct login details</p>
        <form className="forms">
          <div className="formInp">
            <label>User ID</label>
            <input type="email" />
          </div>
          <div className="formInp">
            <label>Passcode</label>
            <input type="password" />
          </div>
          <div className="btn">
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
