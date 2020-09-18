import React from "react";
import truncate from "truncate-html";
import Link from "next/link";
import { Image } from "react-bootstrap";

const SidebarModule = ({ customData }) => {
  console.log(customData);
  const { posts } = customData;
  return (
    <div>
      <h3 style={{ fontSize: "24px", marginBottom: "25px" }}>
        Sidebar Content
      </h3>
      <div className="posts">
        {posts.map((post, i) => (
          <article key={i} style={{ marginBottom: "25px" }}>
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.image.url}
                alt={post.image.label}
                fluid
                rounded
                style={{
                  maxHeight: "200px",
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link href={`/blog/${post.slug}`}>
              <h5 style={{ marginTop: "10px" }}>{post.title}</h5>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SidebarModule;

SidebarModule.getCustomInitialProps = async function ({
  agility,
  channelName,
  languageCode,
}) {
  const api = agility;

  console.log(api);

  try {
    //then get our posts
    let rawPosts = await api.getContentList({
      referenceName: "posts",
      languageCode,
    });

    let posts = rawPosts.map((post) => {
      const title = post.fields.title;
      const slug = post.fields.slug;
      const date = Date.parse(post.fields.date);
      const content = post.fields.content;
      const image = post.fields.image;
      return {
        title,
        slug,
        date,
        content,
        image,
      };
    });
    return {
      posts,
    };
  } catch (err) {
    console.log(err);
  }
};
