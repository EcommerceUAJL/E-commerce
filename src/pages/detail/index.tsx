import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';

const HomeExample = () => {
  return (
    <div>
      <h1>Home Example</h1>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<THomeProps> = async (
//   ctx,
// ) => {
//   return { props: {} };
// };

export default HomeExample;
