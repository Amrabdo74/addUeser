import { useState } from "react";
import "./App.css";
function Overlayfile(props) {
  const [state, setState] = useState([{ name: "", Age: "", phone: "" }]);
  const submitFun = (e) => {
     // console.log(state);
      e.preventDefault();
      props.overState(state)
  };
  return (
    // props.show &&
    <>
      <div
        className={`overlay ${props.show ? "show-overlay" : "overlay"}`}
        onClick={props.showhFun}
      ></div>
      <div className={`content ${props.show ? "show-content" : "overlay"}`}>
        <form onSubmit={submitFun}>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              placeholder="Enter Name"
              id="name"
              onChange={(e) => setState({ ...state, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="Age">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              id="Age"
              onChange={(e) => setState({ ...state, Age: e.target.value })}
              required 
            />
          </div>
          <div>
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              placeholder="Enter phone"
              id="phone"
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <input type="submit" />
            <input type="reset" />
          </div>
        </form>
      </div>
    </>
  );
}
export default Overlayfile;
