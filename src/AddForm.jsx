import React, { useEffect, useState } from "react";
// import List from './List';

const AddForm = () => {
  const [input, setInput] = useState({ name: "", textarea: "", option: "" });
  const [data, setData] = useState(getLocalItems());
  const [edit, setEditData] = useState(null);

  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(data))
  },[data])


  const handleSbumit = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (input.name === "" || input.textarea === "" || input.option === "") {
      alert("please fill all fields");
    } else {
      if (edit !== null) {
        const newData = data.map((item, ind) =>
          ind === edit
            ? {
                name: input.name,
                textarea: input.textarea,
                option: input.option,
              }
            : item
        );
        setData(newData);
        setEditData(null);
      } else {
        setData([...data, input]);
      }
      setInput({ name: "", textarea: "", option: "" });
    }
  };

  const Edit = (index) => {
    setInput(data[index]);
    setEditData(index);
  };

  const del = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
  };

  const AllDelete = () => {
    setData([]);
  };
  
  function getLocalItems () {
    let list = localStorage.getItem("taskList")
    if(list){
      return JSON.parse(list)
    }else{
      return[]
    }
  }
  return (
    <div className="container">
    <div className="form-container">
      <form className="form">
        <input
          type="text"
          value={input.name}
          name="name"
          placeholder="Enter your name"
          onChange={handleSbumit}
        />
        <input
          type="textarea"
          value={input.textarea}
          name="textarea"
          placeholder="Enter your description"
          onChange={handleSbumit}
        />
        <div className="option">
        <select name="option" value={input.option} onChange={handleSbumit}>
          <option value="">Priority Level</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={submit} className="button">{edit === null ? "Add List" : "Edit List"}</button>
        </div>
      </form>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="list-item" >
              <p>{item.name}</p>
              <p>{item.textarea}</p>
              <p>{item.option}</p>
              <div className="btn-list">
              <button onClick={() => Edit(index)} className="btn">Edit</button>
              <button onClick={() => del(index)} className="btn-del">Delete</button>
              </div>
            </div>
          </div>
        );
      })}
      {data.length >= 1 && (<button onClick={AllDelete} className="btn-btn">All Delete</button>)}
      </div>
    </div>
  );
};

export default AddForm;
