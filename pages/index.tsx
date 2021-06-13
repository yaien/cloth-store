import React from "react";
import Head from "../components/head";
import Content from "../components/content";
import Banner from "../components/banner";
import ItemList from "../components/items";
import store from "../core/store";
import { Item } from "chillhood";
import Mindset from "../components/mindset";

interface HomeProps {
  items: Item[];
}

const Home = ({ items }: HomeProps) => {
  return (
    <Content>
      <Head title="Inicio" />
      <Banner />
      <Mindset/>
      <div id="items">
        <ItemList items={items} />
      </div>
    </Content>
  );
};

Home.getInitialProps = async (): Promise<HomeProps> => {
  const items = await store.items.list();
  return { items: items };
};

export default Home;
