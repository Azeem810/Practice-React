import React, { useState } from "react";


const Search = () => {
  const data = [
    { name: "azeem", age: 21, bio: "He is a frontend developer in Quixgo infotech" },
    { name: "dp", age: 27, bio: "He is a backend developer in webnyxa noida" },
    { name: "sazzad", age: 18, bio: "He is a doctor in baheri bareilly" },
    { name: "javed", age: 25, bio: "He is pursuing MCA from Uttarakhand" },
    { name: "Nadeem", age: 20, bio: "He is a Physician and a knowledgeable doctor" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (e) => {
    const term = e.target.value.trim();
    setSearchTerm(term);
    

    // Filter data based on search term
   if(term !== ''){
    const filteredResults = data.filter((item) =>
    item.name.toLowerCase().includes(term.toLowerCase()) ||
    item.age.toString().includes(term) ||
    item.bio.toLowerCase().includes(term.toLowerCase())
  );
 
  setSearchResults(filteredResults);
   }else{
    setSearchResults(data);
   }
  };

  return (
    <div className="register">
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={handleSearch}
    />

    <ul>
      {searchResults.length > 0 ? searchResults.map((item, index) => (
        <li key={index}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Bio: {item.bio}</p>
        </li>
      )):<p>No Data Available</p>}
    </ul>
  </div>
  );
};

export default Search;
