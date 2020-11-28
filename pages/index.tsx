import React from "react";
import Head from "../components/head";
import Content from "../components/content";
import Banner from "../components/banner";
import Search from "../components/search";
import ItemList from "../components/items";
import store from "../core/store";
import { Item } from "chillhood";

interface HomeProps {
  items: Item[];
}

const Home = ({ items }: HomeProps) => {
  return (
    <Content>
      <Head />
      <Banner />
      <Search />
      <ItemList items={items} />
    </Content>
  );
};

Home.getInitialProps = async (): Promise<HomeProps> => {
  const items = await store.items.list();
  return { items: items };
};

export default Home;
