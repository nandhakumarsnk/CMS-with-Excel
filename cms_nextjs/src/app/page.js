import Food from "@/components/Food/Food";
import React from "react";
import { getSheetsData } from "../_lib/readSheet";

const page = async () => {
  const data = await getSheetsData();
  console.log("data", data);
  const { product, header, footer } = data;

  return (
    <Food products={{ product }} headers={{ header }} footers={{ footer }} />
  );
};

export default page;
