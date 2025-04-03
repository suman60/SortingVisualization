import React, { useEffect, useState } from "react";
import "./Header.css";

function SortingTitle() {
  const title = "Sorting Algorithm Visualization";
  const color = "#3498db"; // Elegant blue

  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < title.length) {
        setVisibleText(title.slice(0, index + 1)); 
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return <div className="sorting-title" style={{ color }}>{visibleText}</div>;
}

export default SortingTitle;
