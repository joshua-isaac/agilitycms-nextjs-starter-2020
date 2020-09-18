import React from "react";
import { Image } from "react-bootstrap";
import { renderHTML } from "../../agility/utils";

const NewsModule = (props) => {
  const {
    authorBio,
    authorImage,
    authorName,
    date,
    featuredImage,
    text,
    title,
  } = props.fields;
  return (
    <div>
      <h1
        style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "25px" }}
      >
        {title}
      </h1>
      <Image src={featuredImage.url} alt={featuredImage.label} fluid rounded />
      <div
        className="author"
        style={{ margin: "25px 0", display: "flex", alignItems: "center" }}
      >
        <Image
          src={authorImage.url}
          alt={authorImage.label}
          roundedCircle
          style={{ width: "50px", height: "50px" }}
        />
        <div className="authorInfo" style={{ marginLeft: "15px" }}>
          <p>{authorName}</p>
        </div>
      </div>
      <div className="content" style={{ marginBottom: "25px" }}>
        <div dangerouslySetInnerHTML={renderHTML(text)} />
      </div>
    </div>
  );
};

export default NewsModule;
