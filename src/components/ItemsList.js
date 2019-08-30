import React from "react";
import Card from "./Card";

export default function ItemsList(props) {
  return (
    <div style={styles.container}>
      {}
      <Card name={"Item 1"} type={"Under test"}></Card>
      <Card name={"Item 2"} type={"Under test"}></Card>
      <Card name={"Item 3"} type={"Under test"}></Card>
    </div>
  );
}

const styles = {
  container: {
    margin: "30px 100px 60px 100px",
    display: "flex",
    justifyContent: "space-around"
  }
};
