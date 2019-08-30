import React from "react";

export default function Card(props) {
  return (
    <div style={styles.box}>
      <div style={styles.title}>{props.name}</div>
      <div style={styles.image}></div>
      <div style={styles.type}>Type: {props.type}</div>
    </div>
  );
}

const styles = {
  box: {
    backgroundColor: "#ccccccaa",
    height: "340px",
    width: "260px",
    boxShadow: "0 0 4px 2px #88888866",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-around"
  },
  title: {
    margin: "22px",
    display: "flex",
    justifyContent: "center"
  },
  image: {
    backgroundColor: "#123459cc",
    height: "200px",
    width: "200px",
    margin: "auto"
  },
  type: {
    display: "flex",
    // justifyContent: "center",
    margin: "auto"
  }
};
