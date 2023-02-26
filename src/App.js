import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Overlayfile from "./Overlayfile";
function App() {
  const [users, setUeser] = useState([
    { name: "amr", Age: 23, phone: "01021798849" },
    { name: "mohomed", Age: 25, phone: "01021798849" },
    { name: "ali", Age: 23, phone: "01021798849" },
  ]);
  const [Filter, setFilter] = useState(users);
  const [visable, setVisable] = useState(false);
  const [Overlay, setOverlay] = useState(false);
  const addUser = (date) => {
    setUeser([...users,{...date}]);

  };
  const deleteItems = (e, idx) => {
    // const deleteItem = users.filter((el, clickIdx) => idx !== clickIdx);
    // setUeser(deleteItem);
    /// الطرقيتين ينفعوا
    setUeser((prev) => {
      return prev.filter((el, clickIdx) => idx !== clickIdx);
    });
  };
  const searchFun = (e) => {
    const inputValue = e.target.value;
    // console.log(overlayState);
    if (inputValue.length !== 0) {
      console.log(users);
      const search = users.filter((el) => el.name.includes(inputValue));
      setUeser(search);
    } else {
      return setUeser(Filter);
    }
  };
  const overlayFun = () => {
    setOverlay(!Overlay);
  };

  return (
    <>
      <div className="App">
        <h1>users Data</h1>
        <div className="Button">
          <button onClick={() => setVisable(!visable)}>
            {visable ? "Show" : "Hide"}
          </button>
          <button onClick={overlayFun}> New Data</button>
        </div>
        <input
          className="appInput"
          type="text"
          placeholder="Search By Name"
          onChange={searchFun}
        />
        <div className={visable ? "Hide" : "Show"}>
          <div className="card-content">
            <Overlayfile
              show={Overlay}
              showhFun={overlayFun}
              overState={addUser}
            />
            <Card users={users} deletFunc={deleteItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
