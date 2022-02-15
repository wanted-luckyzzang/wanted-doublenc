import { useRouter } from 'next/router';

const Items = () => {
  const router = useRouter();
  const { data } = router.query;
  if (JSON.stringify(data)) {
    console.log(JSON.parse(data as string));
  }
  return <div>Items 페이지 입니다!!</div>;
};

export default Items;
