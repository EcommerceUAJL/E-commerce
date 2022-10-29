import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';

type THomeProps = {
  blogPosts: BlogPost[];
};

const HomeExample: FC<THomeProps> = ({ blogPosts = [] }) => {
  return (
    <div>
      <h1>Home Example</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<THomeProps> = async (
//   ctx,
// ) => {
//   return { props: {} };
// };

export default HomeExample;
