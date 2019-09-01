import React from "react";
import Card from "./Card";

export default function ItemsList(props) {
  const item = props.items[2].item;

  return (
    <div style={styles.container}>
      <Card name={item} text={text} orientation={props.orientation}></Card>
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

const text = [
  "Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible. In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old.  "
];
