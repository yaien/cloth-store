import Head from "../../components/head";
import Content from "../../components/content";
import Error from "next/error";
import Carousel from "../../components/carousel";
import ShopForm from "../../components/shop-form";
import Title from "../../components/title";
import Container from "../../components/container";
import Paragraph from "../../components/paragraph";
import store from "../../core/store";
import { Row, Col } from "../../components/layout";
import { NextPageContext } from "next";
import { Item } from "chillhood";

interface DetailProps {
  item?: Item;
}

const Detail = ({ item, ...rest }: DetailProps) => {
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
              {item.pictures && <Carousel pictures={item.pictures}/>}
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
    let item = await store.items.get(ctx.query.slug as string)
    return { item };
  } catch {
    return {};
  }
};

export default Detail;
