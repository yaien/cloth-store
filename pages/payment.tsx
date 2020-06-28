import Content from "../components/content";
import Head from "../components/head";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Invoice } from "chillhood";
import { useGuest } from "../context/guest";
import InvoiceDetail from "../components/invoice-detail";
import Container from "../components/container";
import Title from "../components/title";
import Card from "../components/card";
import { Row, Col } from "../components/layout";

const Payment: FC = () => {
  const router = useRouter();
  const guest = useGuest();
  const [invoice, setInvoice] = useState<Invoice>();

  useEffect(() => {
    const ref = router.query.ref_payco as string;
    if (!ref) return;
    guest.invoice
      .check(ref)
      .then((invoice) => {
        console.log(invoice);
        setInvoice(invoice);
      })
      .catch((err) => console.error(err));
  }, [router.query]);

  if (!invoice) return null;

  return (
    <Content>
      <Head title="Comprobante de pago"></Head>
      <Container>
        <Row>
          <Col md={1} lg={2} xl={3}>
            <Card>
              <Title>Estado de factura</Title>
              <Card.Body>
                <InvoiceDetail invoice={invoice} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default Payment;
