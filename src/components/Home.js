import React from "react";

const styles = {
  container: {
    padding: "60px 0px 0px 0px",
    margin: "160px 0px 0px 0px"
  },
  title: {
    backgroundColor: "#101010cc",
    display: "flex",
    justifyContent: "center",
    padding: "50px",
    marginBottom: "160px",
    color: "#fff"
  },
  text: {
    // margin: "60px 0px 0px 0px ",
    padding: "30px",
    color: "#000",
    backgroundColor: "#efefefef"
  }
};

export default function Home() {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>
          <h3>Everything about Audio Technology.</h3>
        </div>
        {/* <div style={styles.text}>
          <p>Our platform provides .... </p>
          <br />
          <p>Our platform provides .... </p>
          <br />
          <p>Our platform provides .... </p>
          <br />
          <p>Our platform provides .... </p>
          <br />
        </div> */}
      </div>
    </div>
  );
}
