import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>
          <h4>About Us</h4>
        </div>
        <div style={styles.text}>
          <p>
            We are audio passionate and tech enthusiasts. As electronic
            engineers, we study and develop some audio content and would like to
            share our knowledge.
            <br />
            <br />
            With years of experience in music market, playing, producing,
            recording, we found in technology a way to push the boundaries and
            find more ways to make the difference in this world.
            <br />
            <br />
            This platform was conceived to provide the best of audio technology:
            content, services, online tools and more...
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#dfdfdffa",
    padding: "26px 0px 26px 0px",
    margin: "0px"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  },
  text: {
    padding: "30px 300px 0px 300px",
    display: "flex",
    justifyContent: "center"
  }
};
