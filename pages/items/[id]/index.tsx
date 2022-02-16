import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Col } from 'src/components/common';
import { Button, Card, Faq, Header, Modal } from 'src/components/items';
import { Root2 } from 'src/types';

const Items = () => {
  const [productData, setProductData] = useState<Root2>();
  const router = useRouter();
  const getData = async (itemId: string) => {
    const {
      data: { conItem: data },
    } = await axios.get(`https://api2.ncnc.app/con-items/${itemId}`);
    setProductData(data);
  };

  useEffect(() => {
    const { data: itemId } = router.query;
    if (itemId) {
      getData(itemId as string);
    } else {
      router.push('/');
    }
  }, []);
  console.log('dddd', productData);
  return (
    <Col>
      <Header imageUrl="/images/Back.svg" />
      {productData && (
        <>
          <Card data={productData} />
          <Faq data={productData} />
          <Modal data={productData} />
          <Button data={productData} />
        </>
      )}
    </Col>
  );
};

export default Items;
