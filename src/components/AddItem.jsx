import React from "react";

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  return (
    <form className="add-item" onSubmit={handleSubmit}>
      <label htmlFor="add-item">Add Item</label>
      <input
        type="text"
        placeholder="Add Item..."
        required
        autoFocus
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" className="add">
        Add
      </button>
    </form>
  );
};

export default AddItem;
