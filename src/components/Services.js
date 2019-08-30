import React from "react";
import ItemsList from "./ItemsList";

export default function Services() {
  const items = [
    {
      id: 1,
      item: "Studio Online",
      type: "Trial/Subscription",
      image: "imageURL",
      category: "service"
    },
    {
      id: 2,
      item: "Personal ix",
      type: "By request",
      image: "imageURL",
      category: "service"
    },
    {
      id: 3,
      item: "Audio for Advertising",
      type: "Trial/Subscription",
      image: "imageURL",
      category: "service"
    },
    ,
    {
      id: 4,
      item: "Formats Converter",
      type: "Free",
      image: "imageURL",
      category: "service"
    }
  ];
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>
          <h4>Services</h4>
        </div>
        <ItemsList items={items}></ItemsList>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#dfdfdffa",
    padding: "26px 0px 20px 0px", // 480px 0px",
    margin: "0px"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  }
};
