import { useState } from "react";

// updateCategory is prop, will be passed to parent as equivalent to categoryChange function
function Form({ updateCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("General");
  // setter function updates selectedCategory to e.target.value, the value user selects
  // e = event object containing info that just happened
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    // updateCategory is parent's categoryChange function
    updateCategory(selectedCategory);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label>Choose a category: </label>
        {/* select element becomes a controlled component storing selectedCategory */}
        {/* when category changes, function handleChange will run */}
        <select value={selectedCategory} onChange={handleChange}>
          <option value="General">General</option>
          <option value="World">World</option>
          <option value="Nation">Nation</option>
          <option value="Business">Business</option>
          <option value="Technology">Technology</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
          <option value="Science">Science</option>
          <option value="Health">Health</option>
        </select>
        <button type="submit">Get News</button>
      </form>
    </>
  );
}
export default Form;
