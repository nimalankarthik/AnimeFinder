import { useState } from 'react';
import './App.css';

function App() {
  const [description, setDescription] = useState('');
  const [results, setResults] = useState('');

  const handleSearch = async () => {

    const apiURL = `http://54.226.92.134/query?description=${encodeURIComponent(description)}`;
    const response = await fetch(apiURL);

    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div className="app">
      <header>
        <h1>Anime Finder</h1>
        <p>A simple tool to find anime based on plot descriptions.</p>
      </header>
      <main>
        <div className="images">
          <img src="/left-image.jpg" alt="Left Image" />
          {/* <img src="/right-image.jpg" alt="Right Image" /> */}
        </div>
        <div className="content">
          <input
            type="text"
            placeholder="Enter anime description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <textarea
            placeholder="Results will appear here..."
            value={results['llmResponse']}
            readOnly
          />
        </div>
      </main>
    </div>
  );
}

export default App;
