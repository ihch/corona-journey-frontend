import React, { useEffect, useState } from "react";

function App() {
  const [prefectures, setPrefectures] = useState([]);

  useEffect(() => {
    const f = () => {
      fetch("/prefectures")
        .then((response) => {
          return response.json();
        })
        .then((value) => setPrefectures(value));
    };

    f();
  }, []);

  useEffect(() => {
    console.log(prefectures);
  }, [prefectures]);

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
