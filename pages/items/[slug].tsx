import Head from "../../components/head";
import Content from "../../components/content";
import Error from "next/error";
import Carousel from "../../components/carousel";
import ShopForm, { ShopFormData } from "../../components/shop-form";
import Title from "../../components/title";
import Container from "../../components/container";
import Paragraph from "../../components/paragraph";
import store from "../../core/store";
import { Row, Col } from "../../components/layout";
import { NextPageContext } from "next";
import { useRouter } from "next/router"
import { Item } from "chillhood";
import { useGuest } from "../../context/guest";

interface DetailProps {
  item?: Item;
}

const Detail = ({ item, ...rest }: DetailProps) => {
  const guest = useGuest()
  const router = useRouter()

  const onSubmit = async (data: ShopFormData) => {
    await guest.cart?.add({
      id: data.item.id,
      quantity: data.quantity,
      size: data.size
    })
    await router.push("/cart")
  }
  
  
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
              <ShopForm item={item} onSubmit={onSubmit}></ShopForm>
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
