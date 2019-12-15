import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Content from "../components/content";
import Banner from "../components/banner";

const Home = () => {
  return (
    <div>
      <Head title="Fashion Shop" />
      <Nav />
      <Content>
        <Banner />
      </Content>
    </div>
  );
};

export default Home;
