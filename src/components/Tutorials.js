import React from "react";
import ItemsList from "./ItemsList";

export default function Tutorials() {
  const items = [
    {
      id: 1,
      item: "Mixing",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    },
    {
      id: 2,
      item: "Audio",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    },
    {
      id: 3,
      item: "Electronic Basics",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    },
    {
      id: 4,
      item: "DSP Basics",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    },
    {
      id: 5,
      item: "Software Basics",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    }
  ];
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>
          <h4>Tutorials</h4>
        </div>
        <ItemsList items={items}></ItemsList>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#fefefef9",
    padding: "26px 0px 20px 0px", // 480px 0px",
    margin: "0px"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  }
};
