import React from "react";
import "./styles.css";
import SortingVisualizer from "./components/sortingvisualizer";
export default function App() {
  const resetArray = (setArray) => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(randomArrayBetweenXnY(5, 100));
    }
    setArray(arr);
  };
  return (
    <div className="App">
      <SortingVisualizer resetArray={resetArray} />
    </div>
  );
}
const randomArrayBetweenXnY = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
