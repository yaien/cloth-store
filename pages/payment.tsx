import Content from "../components/content";
import Head from "../components/head";
import Card from "../components/card";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Invoice } from "chillhood";
import { useGuest } from "../context/guest";

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
      <Card>
        <p>{JSON.stringify(invoice, null, "    ")}</p>
      </Card>
    </Content>
  );
};

export default Payment;
