import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
  className: string
};

const Content = (props: IContentProps) => (
  <div className={`content ${props.className} container mx-auto w-100 lg:w-2/3`}>
    {props.children}

    <style jsx>
      {`
        .content :global(p) {
          @apply my-6;
        }

        .content :global(ul) {
          @apply my-6;
        }

        .content :global(h2) {
          @apply text-2xl font-semibold text-gray-700 my-4;
        }

        .content :global(h3) {
          @apply text-xl font-semibold text-gray-700 my-4;
        }
      `}
    </style>
  </div>
);

export { Content };
