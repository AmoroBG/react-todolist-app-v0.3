import React from "react";

const AddItem = ({ handleSubmit }) => {
  return (
    <form className="add-item" onSubmit={handleSubmit}>
      <label htmlFor="add-item">Add Item</label>
      <input type="text" placeholder="Add Item..." />
      <button type="submit" className="add">
        Add
      </button>
    </form>
  );
};

export default AddItem;
