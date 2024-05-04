import React, { useState } from "react";

function FilterData({ bots }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Function to handle checkbox change
  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevState) => {
      if (checked) {
        return [...prevState, value];
      } else {
        return prevState.filter((filter) => filter !== value);
      }
    });
  };

  // Filter bots based on selected filters
  const filteredBots = bots.filter((bot) => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.includes(bot.bot_class);
  });

  // Get unique class options
  const classOptions = [...new Set(bots.map((bot) => bot.bot_class))];

  return (
    <div>
      {/* Render checkboxes for each class option */}
      {classOptions.map((botClass) => (
        <label key={botClass} style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            value={botClass}
            checked={selectedFilters.includes(botClass)}
            onChange={handleFilterChange}
          />
          {botClass}
        </label>
      ))}
      <div>
        <h4>Filtered Bots:</h4>
        <ul>
          {filteredBots.map((bot) => (
            <li key={bot.id}>ID: {bot.id} Name: {bot.name} Class: {bot.bot_class}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterData;
