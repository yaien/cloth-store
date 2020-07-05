import { FC, useState, useEffect } from "react";
import Content from "../components/content";
import Head from "../components/head";
import Container from "../components/container";
import Card from "../components/card";
import Title from "../components/title";
import InvoiceDetail from "../components/invoice-detail";
import InvoiceSearcher from "../components/invoice-searcher";
import { Row, Col } from "../components/layout";
import { useGuest } from "../context/guest";
import { Invoice } from "chillhood";
import { useRouter } from "next/router";

const InvoiceBrowser: FC = () => {
  const router = useRouter();
  const guest = useGuest();
  const [invoice, setInvoice] = useState<Invoice>();
  const [message, setMessage] = useState<string>();
  const [reference, setReference] = useState<string>();

  async function onQuery(ref: string) {
    try {
      setInvoice(await guest.invoice.get(ref));
      setMessage("");
    } catch (err) {
      setInvoice(undefined);
      setMessage("no se encontro la orden consultada");
    }
  }

  useEffect(() => {
    const ref = router.query.ref;
    if (typeof ref == "string") {
      setReference(ref);
      onQuery(ref);
    }
  }, [router.query.ref]);

  return (
    <Content>
      <Head title="Consulta de orden"></Head>
      <Container>
        <Row>
          <Col md={1} lg={2} xl={3}>
            <Card>
              <Title>Consulta de orden</Title>
              <Card.Body>
                <InvoiceSearcher
                  onQuery={onQuery}
                  reference={reference}
                ></InvoiceSearcher>
                {message && <div className="message">{message}</div>}
                {invoice && <InvoiceDetail invoice={invoice} />}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .message {
          margin: 0.5rem;
          width: 100%;
          text-align: center;
        }
      `}</style>
    </Content>
  );
};

export default InvoiceBrowser;
