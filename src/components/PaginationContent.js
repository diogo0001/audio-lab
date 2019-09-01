import React from "react";
import ItemsList from "./ItemsList";

const styles = {
  containerGrey: {
    backgroundColor: "#dfdfdffa",
    padding: "26px 0px 20px 0px",
    margin: "0px"
  },
  containerWhite: {
    backgroundColor: "#fefefef9",
    padding: "26px 0px 20px 0px",
    margin: "0px"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  }
};

//-----------------------------------------------------------------------------

export function Products() {
  const items = [
    {
      id: 1,
      item: "Banck of Tracks",
      type: "Download",
      image: "imageURL",
      category: "product"
    },
    {
      id: 2,
      item: "Samples",
      type: "Download",
      image: "imageURL",
      category: "product"
    },
    {
      id: 3,
      item: "Courses",
      type: "Subscription",
      image: "imageURL",
      category: "product"
    },
    {
      id: 4,
      item: "Opening stickers",
      type: "Free",
      image: "imageURL",
      category: "product"
    }
  ];
  return (
    <div>
      <div style={styles.containerWhite}>
        <div style={styles.title}>
          <h4>Products</h4>
        </div>
        <ItemsList items={items} orientation={"textLeft"}></ItemsList>
      </div>
    </div>
  );
}

//-----------------------------------------------------------------------------

export function Services() {
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
      <div style={styles.containerGrey}>
        <div style={styles.title}>
          <h4>Services</h4>
        </div>
        <ItemsList items={items} orientation={"textRight"}></ItemsList>
      </div>
    </div>
  );
}

//-----------------------------------------------------------------------------

export function Tutorials() {
  const items = [
    {
      id: 1,
      item: "Mixing",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    },
    {
      id: 2,
      item: "Audio",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    },
    {
      id: 3,
      item: "Electronic Basics",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    },
    {
      id: 4,
      item: "DSP Basics",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    },
    {
      id: 5,
      item: "Software Basics",
      type: "Videos/Articles",
      image: "imageURL",
      category: "tutorial"
    }
  ];
  return (
    <div>
      <div style={styles.containerWhite}>
        <div style={styles.title}>
          <h4>Tutorials</h4>
        </div>
        <ItemsList items={items} orientation={"textLeft"}></ItemsList>
      </div>
    </div>
  );
}
