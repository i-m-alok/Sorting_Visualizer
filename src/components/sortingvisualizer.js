import React, { useEffect, useState } from "react";
import insertionSort from "../algorithms/insertion_sort_recursive";
export default function SortingVisualizer(props) {
  const [array, setArray] = useState([]);
  const resetArray = () => {
    props.resetArray(setArray);
  };

  const insertion_sort = (arr) => {
    return insertionSort(arr);
  };
  useEffect(() => {
    resetArray();
  }, []);
  return (
    <div className="main-container-bars">
      <div className="array-bars-container">
        {array.map((val, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${val * 1.5}px` }}
          ></div>
        ))}
      </div>
      <div className="btns-container">
        <button data-test="generate-new-array-btn" onClick={() => resetArray()}>
          Generate
        </button>
        <button onClick={() => insertion_sort()}>Insertion Sort</button>
      </div>
      {console.log("array", array)}
      {/* {console.log("Sortedarray", insertionSort(array))} */}
    </div>
  );
}
