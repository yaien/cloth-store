import Head from "../../components/head";
import Content from "../../components/content";
import Error from "next/error";
import axios from "../../core/axios";
import { NextPageContext } from "next";

interface DetailProps {
  item?: API.Item;
}

const Detail = ({ item }: DetailProps) => {
  if (!item) {
    return <Error statusCode={404} />;
  }

  return (
    <div>
      <Head title={item.name} />
      <Content></Content>
    </div>
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
