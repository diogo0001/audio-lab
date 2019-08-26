import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>
          <h4>About Us</h4>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#dfdfdffa",
    padding: "26px 0px 400px 0px",
    margin: "0px"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  }
};
