import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { SERVER_HOST } from "../../constants";
import type { PostDto } from "../../types/types";

interface PostsProps {
  posts: Array<PostDto>;
}
const Misposts: React.FC<PostsProps> = ({ posts }) => {


  return (
    <>
      <Head>
        <title>NextJS. Posts page</title>
        <meta name="description" content="Posts page description" />
      </Head>
      <h1>Listado Items</h1>
      <div className="container">
     {/* {posts.map((item)=>
    
     <ul key={item.id}>{item.id}
         <li>{item.name}</li>
         <li>{item.price}</li>
         <li>{item.shortText}</li>
         </ul>

     )} */}
     
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('para saberrrrrr', context.query)//acceder a los parametros de la url
  const res = await fetch(`${SERVER_HOST}/products/${context.query.id}`);
  const posts = await res.json();

  return { props: { posts } };
};

export default Misposts;
