import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
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
    <div>
      <Head title="Fashion Shop" />
      <Nav />
      <Content>
        <Banner />
        <Search />
        <Items items={items} />
      </Content>
    </div>
  );
};

Home.getInitialProps = async (): Promise<HomeProps> => {
  const res = await axios.get("/api/v1/items");
  return { items: res.data };
};

export default Home;
