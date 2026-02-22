import React, { useState } from "react";
// import AddList from './addList';

const Crud = (props) => {
  const List = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
  ];

  const [list, setList] = useState(List);
  const [updateState, setUpdateState] = useState(-1);


  
function handleDelete(id) {
  setList((prevList) => prevList.filter((item) => item.id !== id));
}

  return (
    <div className="flex flex-col space-y-6 items-center justify-center h-screen">
      <AddList setList={setList} />
      {/* <AddList setList={setList} name='name' price='price' id='id' /> */}
      
      <table className="w-1/2">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {list.map((item) =>
            updateState === item.id ? (
              <EditList
                key={item.id}
                item={item}
                setList={setList}
                setUpdateState={setUpdateState}
              />
            ) : (
              <tr key={item.id}>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="flex space-x-2 px-4 py-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleClick(item.id)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );

  function handleClick(id) {
    setUpdateState(id);
  }
};


function EditList({ item, setList, setUpdateState }) {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);

  const handleSave = () => {
    setList((prevList) =>
      prevList.map((i) => (i.id === item.id ? { ...i, name, price } : i)),
    );
    setUpdateState(-1);
  };

  return (
    <table className="w-full">
      <tbody className="bg-white divide-y divide-gray-200">
        <tr className="text-left">
          <td className="px-4 py-2">
            <input
              className="border border-gray-300 rounded px-4 py-2"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td className="px-4 py-2">
            <input
              className="border border-gray-300 rounded px-4 py-2"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </td>
          <td className="px-4 py-2">
            <button onClick={handleSave} className="cursor-pointer text-blue-500 hover:underline">Save</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function AddList({ setList }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const price = parseFloat(e.target.price.value);

    if (!name || isNaN(price)) return;

    const newList = { id: Date.now(), name, price };
    setList((prevList) => [...prevList, newList]);

    e.target.reset(); // Clear form after submit
  };

  //   Your AddList component logic is mostly correct 👍 — it:

  // Prevents default form submission

  // Extracts values from the form

  // Creates a new object with a unique id

  // Updates state immutably using a functional update

  // Here are a few improvements and a complete example.

  // ✅ Improved Version
  // import { useState } from "react";

  // function AddList({ setList }) {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const name = e.target.name.value.trim();
  //     const price = parseFloat(e.target.price.value);

  //     if (!name || isNaN(price)) return;

  //     const newList = {
  //       id: Date.now(),
  //       name,
  //       price,
  //     };

  //     setList((prevList) => [...prevList, newList]);

  //     e.target.reset(); // Clear form after submit
  //   };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" name="name" placeholder="Item name" required />
  //       <input type="number" name="price" placeholder="Price" required />
  //       <button type="submit">Add</button>
  //     </form>
  //   );
  // }

  // export default AddList;

  // 🔎 Why These Changes Help
  // 1. trim()

  // Removes accidental spaces from the name.

  // 2. parseFloat()

  // Ensures price is stored as a number, not a string.

  // 3. Validation

  // Prevents adding empty or invalid items.

  // 4. e.target.reset()

  // Clears the form after submission.

  return (
    <div className="w-1/2">
      <form onSubmit={handleSubmit} className="w-full flex space-x-2">
        <input
          className="border border-gray-300 px-2 py-2 rounded w-full outline-none"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="border border-gray-300 px-2 py-2 rounded w-full outline-none"
          type="number"
          name="price"
          required
          placeholder="Price"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Crud;