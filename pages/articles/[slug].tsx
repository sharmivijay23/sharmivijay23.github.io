import React from 'react';

import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../content/Content';
import { Meta } from '../../containers/layout/Meta';
import { Main } from '../../containers/templates/Main';
import { getAllPosts, getPostBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
  tags: string[];
};

const DisplayPost = (props: IPostProps) => (
  <Main
    meta={(
      <Meta
        title={props.title}
        description={props.description}
        post={{
          image: props.image,
          date: props.date,
          modified_date: props.modified_date,
        }}
      />
    )}
    currentPage="Articles"
  >
    <div className="container mx-auto w-100 px-5">
      <h1 className="font-bold text-4xl cursor-default tracking-wide container mx-auto w-100 lg:w-2/3 pb-2 border-b border-sky-600">{props.title}</h1>
      <div className="flex flex-row justify-between container mx-auto w-100 lg:w-2/3 mt-2 mb-10">
        <div className="text-slate-500 uppercase text-sm">{format(new Date(props.date), 'LLLL d, yyyy')}</div>
        <div className="text-slate-500 uppercase text-sm">{props.tags.join(', ')}</div>
      </div>

      <Content className=''>
        <div className='markdown'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </Content>
    </div>
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({ params }) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
    'tags'
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: Object.assign({}, post, { content })
  };
};

export default DisplayPost;
