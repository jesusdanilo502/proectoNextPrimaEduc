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
     {posts.map((item)=>
    
     <ul key={item.id}>{item.id}
         <li>{item.name}</li>
         <li>{item.price}</li>
         <li>{item.shortText}</li>
         </ul>

     )}
     
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context)
  const res = await fetch(`${SERVER_HOST}/products/`);
  const posts = await res.json();

  return { props: { posts } };
};

export default Misposts;

/**
 * 
 NOTA: La obtención de datos dentro del enlace useEffect, o de cualquier otra manera fuera getStaticProps, getStaticPaths o getServerSideProps las funciones funcionarán exactamente de la misma manera que en la representación del lado del cliente, lo que significa que los datos se obtendrán en el lado del cliente, después de que se carguen los scripts js, no en el servidor.
 */
