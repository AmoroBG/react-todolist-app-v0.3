import React, { useRef } from "react";

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  const inputRef = useRef();
  return (
    <form className="add-item" onSubmit={handleSubmit}>
      <label htmlFor="add-item">Add Item</label>
      <input
        type="text"
        placeholder="Add Item..."
        required
        autoFocus
        ref={inputRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        className="add"
        onClick={() => inputRef.current.focus()}
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
