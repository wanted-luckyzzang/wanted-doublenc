import { useRouter } from 'next/router';

const Categories = () => {
  const router = useRouter();
  const { data } = router.query;
  if (JSON.stringify(data)) {
    console.log(JSON.parse(data as string));
  }

  //   console.log(JSON.parse(undefined));
  return <div>카테고리 페이지 입니다!</div>;
};

export default Categories;
