import React, { useState } from "react";
// import List from './List';

const AddForm = () => {
  const [input, setInput] = useState({ name: "", textarea: "", option: "" });
  const [data, setData] = useState([]);
  const [edit, setEditData] = useState(null);

  const handleSbumit = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (input.name === "" || input.textarea === "" || input.option === "") {
      alert("plese fill all field");
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
        console.log(data);
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
  return (
    <div>
      <form>
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
        <select name="option" value={input.option} onChange={handleSbumit}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={submit}>{edit === null ? "Add" : "Edit"}</button>
      </form>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h3 >
              {item.name}
              {item.textarea}
              {item.option}
              <button onClick={() => Edit(index)}>Edit</button>
              <button onClick={() => del(index)}>Del</button>
            </h3>
          </div>
        );
      })}
      {data.length >= 1 && <button onClick={AllDelete}>All Delete</button>}
    </div>
  );
};

export default AddForm;
