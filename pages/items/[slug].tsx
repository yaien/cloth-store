import Head from "../../components/head";
import Content from "../../components/content";
import Collapsible from "../../components/collapsible";
import Error from "next/error";
import Carousel from "../../components/carousel";
import ShopForm, { ShopFormData } from "../../components/shop-form";
import Title from "../../components/title";
import Container from "../../components/container";
import Paragraph from "../../components/paragraph";
import SizeMeasures from "../../components/size-measures";
import store from "../../core/store"
import { Row, Col } from "../../components/layout";
import { useRouter } from "next/router";
import { Item } from "chillhood";
import { useGuest } from "../../context/guest";
import { NextPageContext } from "next"

interface DetailProps {
  item?: Item;
}

const Detail = ({ item, ...rest }: DetailProps) => {
  const guest = useGuest();
  const router = useRouter();

  const onSubmit = async (data: ShopFormData) => {
    await guest.cart?.add({
      id: data.item.id,
      quantity: data.quantity,
      size: data.size,
    });
    await router.push("/cart");
  };

  if (!item) {
    return <Error statusCode={404} />;
  }

  return (
    <Content>
      <Head title={item.name} description={item.description} />
      <Container>
        <Container>
          <Row>
            <Col md={2} lg={2} xl={2.5}>
              {item.pictures && <Carousel pictures={item.pictures} />}
            </Col>
            <Col md={2.5} lg={2.5} xl={2.5}>
              <Title left>{item.name}</Title>
                <ShopForm item={item} onSubmit={onSubmit} />
                <Collapsible label="DESCRIPCIÓN">
                  <Paragraph>{item.description}</Paragraph>
                </Collapsible>
                <Collapsible label="GUÍA DE TALLAS">
                  <SizeMeasures sizes={item.sizes} />
                </Collapsible>
            </Col>
          </Row>
        </Container>
      </Container>
    </Content>
  );
};

Detail.getInitialProps = async (ctx: NextPageContext): Promise<DetailProps> => {
  try {
    let item = await store.items.get(ctx.query.slug as string);
    return { item };
  } catch {
    return {};
  }
};

export default Detail;
