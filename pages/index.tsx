import { GetStaticProps } from 'next';
// import Link from 'next/link';
import { Meta } from '../containers/layout/Meta';
import { Main } from '../containers/templates/Main';
import { getAllPosts, getShowcaseProjects } from '../utils/Content';

// const Twitter = () => (<i className='cursor-pointer bx bxl-twitter'></i>)
const Github = () => (<i className='cursor-pointer bx bxl-github'></i>)
// const Gitlab = () => (<i className='cursor-pointer bx bxl-gitlab'></i>)

const goto = (url: string) => window.open(url, '_blank');

// const BlogPost = (props: any) => {
//   const { post } = props;

//   return (
//     <div className="w-full mx-auto lg:mx-0 z-10 py-3">
//       <a className='no-underline' href={`/articles/${props.post.slug}`}>
//         <div className='text-xl text-slate-700 hover:text-sky-600 decoration-sky-600 hover:underline'>{post.title}</div>
//       </a>
//       {/* <div className='text-sm'> {post.date} </div> */}
//       <div className='text-slate-400 font-semibold uppercase text-xs pt-1'>
//         {post.tags.join(', ')}
//       </div>
//     </div>
//   );
// }

// const LatestBlogPosts = ({ posts }: { posts: any[] }) => {
//   return (
//     <div className='w-full md:w-1/2'>
//       <h1 className='font-bold text-3xl'>
//         <span className='tracking-wide underline decoration-sky-500 decoration-4 underline-offset-2'>Latest Articles</span>
//       </h1>
//       <div className='flex-col divide-y my-5'>
//         {posts
//           .slice(0, 5)
//           .map((post: any) => <BlogPost key={post.slug} post={post} />)}
//       </div>
//       <div className='mt-5'>
//         <button className='bg-sky-600 hover:bg-sky-800 py-1 px-2 rounded'>
//           <Link href="/articles">
//             <a className="px-1 text-sky-100 hover:text-sky-100 no-underline">Read all posts</a>
//           </Link>
//         </button>
//       </div>
//     </div>
//   );
// }

// const Project = (props: any) => {
//   return (
//     <div className='py-3'>
//       <div>
//         <a className='no-underline' href={props.project.repoUrl} target="_blank" rel="noreferrer">
//           <div className='text-xl text-slate-700 hover:text-sky-600 decoration-sky-600 hover:underline'>{props.project.title}</div>
//         </a>
//       </div>
//       <div className='text-slate-600 text pt-1'>
//         {props.project.summary}
//       </div>
//     </div>
//   );
// }

// const ProjectShowcase = ({ projects }: { projects: any[] }) => {
//   return (
//     <div className='w-full md:w-1/2'>
//       <h1 className='font-bold text-3xl tracking-wide underline decoration-sky-500 decoration-4 underline-offset-2'>
//         Project Showcase
//       </h1>
//       <div className='flex-col divide-y my-5'>
//         {projects
//           .map((project: any) => <Project key={project.repoUrl} project={project} />)}
//       </div>
//       <div className='mt-5'>
//         <button className='bg-sky-600 hover:bg-sky-800 py-1 px-2 rounded'>
//           <Link href="/projects">
//             <a className="px-1 text-sky-100 hover:text-sky-100 no-underline">See all</a>
//           </Link>
//         </button>
//       </div>
//     </div>
//   );
// }

// const Home = (props: any) => {
const Home = () => {
  return (
    <Main
      currentPage='Home'
      meta={(
        <Meta
          title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
          description="Description"
        />
      )}>
      <div className='bg-white'>
        <div className='flex flex-col h-full'>
          {/* Banner */}
          <header className='bg-sky-50'>
            <div className='mt-10 mb-5 self-center container mx-auto w-100 lg:w-2/3 2xl:w-1/2'>
              <div className='flex justify-center items-center'>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/147314648" alt='profile picture' />
                  </div>
                </div>
                <div className='ml-5'>
                  <p className='text-xl'>Sharmila Vijayakumar</p>
                  <div className='flex mt-2 w-full space-x-4'>
                    {/* <div className="avatar" onClick={_ => goto('https://twitter.com/ganesshkumar')}>
                      <div className="text-3xl">
                        <Twitter />
                      </div>
                    </div> */}
                    <div className="avatar" onClick={_ => goto('https://github.com/sharmivijay23')}>
                      <div className="text-3xl">
                        <Github />
                      </div>
                    </div>
                    {/* <div className="avatar" onClick={_ => goto('https://gitlab.com/ganesshkumar')}>
                      <div className="text-3xl">
                        <Gitlab />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="pt-2 text-base text-center">
                {/* <div>I am a Full-Stack Software Engineer, currently building Microsoft Teams at Microsoft. I build and maintain Obsidian Plugins.</div> */}
              </div>
            </div>
          </header>
          <main className='my-10 container mx-auto w-100 lg:w-2/3 2xl:w-1/2 '>
            {/* <div className='flex space-x-8 mx-5'> */}
            {/* Latest blog posts*/}
            {/* <LatestBlogPosts posts={props.posts} /> */}
            {/* Latest projects */}
            {/* <ProjectShowcase projects={props.projects} /> */}
            {/* </div> */}
          </main>
        </div>
      </div>
      {/* #9C9C9C */}
    </Main>
  );
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'image', 'tags']);
  const projects = getShowcaseProjects(['title', 'tools', 'summary', 'repoUrl', 'iconUrl']);

  return {
    props: {
      posts, projects
    },
  };
};

export default Home;