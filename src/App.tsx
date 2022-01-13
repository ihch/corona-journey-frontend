import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

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
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
