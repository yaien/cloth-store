import axios from "../../core/axios";
import Head from "../../components/head";
import Content from "../../components/content";
import Error from "next/error";
import Carousel from "../../components/carousel";
import ShopForm from "../../components/shop-form";
import Title from "../../components/title";
import Container from "../../components/container";
import Paragraph from "../../components/paragraph";
import { Row, Col } from "../../components/layout";
import { NextPageContext } from "next";

interface DetailProps {
  item?: API.Item;
}

const Detail = ({ item, ...rest }: DetailProps) => {
  console.log(rest);
  if (!item) {
    return <Error statusCode={404} />;
  }

  return (
    <Content>
      <Head title={item.name} description={item.description} />
      <Container>
        <Title>{item.name}</Title>
        <Container>
          <Row>
            <Col md={2}>
              <Carousel />
            </Col>
            <Col md={2}>
              <Paragraph>{item.description}</Paragraph>
              <ShopForm item={item}></ShopForm>
            </Col>
          </Row>
        </Container>
      </Container>
    </Content>
  );
};

Detail.getInitialProps = async (ctx: NextPageContext): Promise<DetailProps> => {
  try {
    let res = await axios.get("/api/v1/public/items/" + ctx.query.slug);
    return { item: res.data };
  } catch {
    return {};
  }
};

export default Detail;
