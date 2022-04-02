// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:4000
import React, { useState } from "react";
const { PrismaClient } = require("@prisma/client");



const prisma = new PrismaClient();



export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:4000");
    const data = await res.json();
    return {
      props:{
        data
      }
    }
  } catch (error) {
    console.log(error);
  }
}
