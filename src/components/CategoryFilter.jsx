import React from 'react';

const CategoryFilter = ({ category, setCategory }) => (
  <div className="flex">
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border rounded p-2"
    >
      <option value="general">General</option>
      <option value="business">Business</option>
      <option value="technology">Technology</option>
      <option value="entertainment">Entertainment</option>
      <option value="health">Health</option>
      <option value="science">Science</option>
      <option value="sports">Sports</option>
    </select>
  </div>
);

export default CategoryFilter;
