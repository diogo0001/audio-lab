import React from "react";

export default function Products() {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>
          <h4>Products</h4>
        </div>
        <div></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#fefefef9",
    padding: "26px 0px 480px 0px",
    margin: "0px"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  }
};
