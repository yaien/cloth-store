import React from "react";
import Head from "../components/head";
import Content from "../components/content";
import Banner from "../components/banner";
import Search from "../components/search";
import axios from "../core/axios";
import Items from "../components/items";

interface HomeProps {
  items: API.Item[];
}

const Home = ({ items }: HomeProps) => {
  return (
    <Content>
      <Head title="Fashion Shop" />
      <Banner />
      <Search />
      <Items items={items} />
    </Content>
  );
};

Home.getInitialProps = async (): Promise<HomeProps> => {
  const res = await axios.get("/api/v1/public/items");
  return { items: res.data };
};

export default Home;
