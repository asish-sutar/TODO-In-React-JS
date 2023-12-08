import React, { useState } from "react";
import "./Todo.css";

export default function Todo() {
  // State to manage input value
  const [inputList, setInputList] = useState("");
  // State to store the list of items
  const [items, setItems] = useState([]);

  // Function to handle input change
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  // Function to add items to the list
  const listOfItems = () => {
    setItems((oldItems) => {
      // Add the new input value to the beginning of the array
      return [inputList, ...oldItems];
    });
    // Clear the input after adding the item
    setInputList("");
  };

  // Function to remove an item from the list
  const removeItem = (index) => {
    setItems((oldItems) => {
      // Create a copy of the array and remove the item at the specified index
      const updatedItems = [...oldItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <br />
          {/* Input for adding items */}
          <input
            type="text"
            placeholder="add items"
            onChange={itemEvent}
            value={inputList}
          />
          {/* Button to add items */}
          <button onClick={listOfItems}>+</button>

          {/* Display the list of items */}
          <ol>
            {items.map((itemValue, index) => (
              <div className="cross" key={index}>
                {/* Delete icon to remove the item */}
                <i
                  className="fa-solid fa-delete-left"
                  aria-hidden="true"
                  onClick={() => removeItem(index)}
                />
                {/* Display the item value */}
                <li>{itemValue}</li>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
