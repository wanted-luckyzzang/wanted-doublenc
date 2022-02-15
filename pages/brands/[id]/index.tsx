import { useRouter } from 'next/router';

const Brands = () => {
  const router = useRouter();
  const { data } = router.query;
  console.log('Brands', data);
  return <div>Brands 페이지 입니다!!</div>;
};

export default Brands;
