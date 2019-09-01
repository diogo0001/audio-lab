import React from "react";

export default function Card(props) {
  if (props.orientation === "textLeft") {
    return (
      <div style={styles.box}>
        <div>
          <div style={styles.title}>{props.name}</div>
          <div style={styles.text}>{props.text}</div>
        </div>
        <div style={styles.image}></div>
      </div>
    );
  } else if (props.orientation === "textRight") {
    return (
      <div style={styles.box}>
        <div style={styles.image}></div>
        <div>
          <div style={styles.title}>{props.name}</div>
          <div style={styles.text}>{props.text}</div>
        </div>
      </div>
    );
  }
}

const styles = {
  box: {
    backgroundColor: "#ffffff00",
    height: "420px",
    width: "90%",
    boxShadow: "0 0 4px 2px #88888810",
    display: "flex"
    // alignItems: "stretch"
  },
  title: {
    margin: "30px"
  },

  text: {
    display: "flex",
    margin: "30px"
  },
  image: {
    backgroundColor: "#123459cc",
    height: "70%",
    width: "1900px",
    margin: "auto 100px auto 100px"
  }
};
