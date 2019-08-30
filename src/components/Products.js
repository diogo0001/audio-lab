import React from "react";
import ItemsList from "./ItemsList";

export default function Products() {
  const items = [
    {
      id: 1,
      item: "Banck of Tracks",
      type: "Download",
      image: "imageURL",
      category: "product"
    },
    {
      id: 2,
      item: "Samples",
      type: "Download",
      image: "imageURL",
      category: "product"
    },
    {
      id: 3,
      item: "Courses",
      type: "Subscription",
      image: "imageURL",
      category: "product"
    },
    {
      id: 4,
      item: "Opening stickers",
      type: "Free",
      image: "imageURL",
      category: "product"
    }
  ];
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>
          <h4>Products</h4>
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
