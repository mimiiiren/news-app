import { useState } from 'react';

// handleCategorySubmit passes submitted category from user. it is equivalent to categoryChange function
function Form({updateCategory}) {
   const [selectedCategory, setSelectedCategory] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };
  function handleSubmit(e) {
      e.preventDefault();
    // updateCategory is App.jsx categoryChange function
    updateCategory(selectedCategory);
  }
    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                {/* hard coded value attribute to match data.category */}
                                    <label>Choose a category: </label>
                <select value={selectedCategory} onChange={handleChange}>
                    {/* hardcoded calue gets stored in selectedCategory */}
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
    )
}
export default Form;