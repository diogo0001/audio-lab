import React from "react";

export default function Contact() {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>
          <h4>Contact</h4>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#fefefef9",
    padding: "26px 0px 360px 0px",
    margin: "0px"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  }
};
