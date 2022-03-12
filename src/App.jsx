import React from "react";
import Table from "./Components/Table";
import style from "./App.module.css";
function App() {
  const [value, setValue] = React.useState({
    name: "",
    code: "",
    flag: "",
  });
  const handelChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const dum = [
    {
      name: "India",
      code: "+91",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png?20111003033457",
    },
    {
      name: "India",
      code: "+1",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20151118161041",
    },
    {
      name: "Russia",
      code: "+98",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png",
    },
  ];
  const [data, setData] = React.useState(
    JSON.parse(localStorage.getItem("value"))
      ? JSON.parse(localStorage.getItem("value")).length
        ? JSON.parse(localStorage.getItem("value"))
        : dum
      : dum
  );
  React.useEffect(() => {
    localStorage.setItem("value", JSON.stringify(data));
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setData(data.concat(value));
    setValue({ name: "", code: "", flag: "" });
  };
  const itemDelete = (item) => {
    console.log(item);
    const arr = data.map((i, pos) => (pos !== item ? i : null));
    arr.filter((n) => n);
    const temp = [];
    for (let i of arr) i && temp.push(i);
    console.log(temp);
    setData(temp);
  };
  return (
    <div
      style={{
        display: "flex",
        margin: "30px auto",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      <form className={style.form} onSubmit={onSubmit}>
        <label>
          <p>Enter Country Name</p>
          <input
            name="name"
            onChange={handelChange}
            value={value.name}
            type={"text"}
            autoComplete="off"
            placeholder="Enter Country Name"
            required
          />
        </label>
        <label>
          <p>Enter Country Code</p>
          <input
            name="code"
            onChange={handelChange}
            value={value.code}
            type={"number"}
            autoComplete="off"
            placeholder="Enter Country Code"
            required
          />
        </label>
        <label>
          <p>Enter Country Flag Url</p>
          <input
            name="flag"
            onChange={handelChange}
            value={value.flag}
            type={"text"}
            required
            autoComplete="off"
            placeholder="Enter Country Flag"
          />
        </label>
        <button type="submit">+ Add</button>
      </form>

      <Table tableData={data} itemDelete={itemDelete} />
    </div>
  );
}

export default App;
