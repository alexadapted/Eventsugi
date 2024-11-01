import { NextPage } from 'next'
import Head from 'next/head'
import { useSearchParams } from 'next/navigation'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { ContactUsFormSection } from '~/components/ContactUsForm'
import MarkdownRenderer  from '~/components/MarkdownRenderer'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Landing } from '~/components/Landing-blog'
import { getMetaData } from '~/utils/meta'
import { api } from '~/utils/trpc'
import { useRouter } from 'next/router';


const BlogPage: NextPage = () => {

  const defaultImageSrc = '/Images/event-management-company/Images _ 12 Blogs/Eventsugi.png';


  const { get } = useSearchParams();
  const slug = get('slug'); // Assuming slug is passed as a query parameter

  const { data: blog, isLoading } = api.blogs.getOne.useQuery(slug as string);

  const router = useRouter();

  // Redirect to the home page if the blog isn't found or loading fails
  if (!isLoading && !blog) {
    router.push('/');
    return null; // Prevent rendering the rest of the component
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }
  // Determine the image source based on blog.slug
  const imageSrc = blog.slug === 'Corporate-Events-EventSugi' || blog.slug ===  'UAE-National-Day-Event' || blog.slug === 'Eventsugi'
    ? `/Images/event-management-company/Images _ 12 Blogs/${blog.slug}.png`
    : defaultImageSrc;

  return (
    <div>
      <Head>
        <title>{blog.pageTitle}</title>
        {getMetaData(
          blog.pageTitle,
          blog.metaDescription,
          `/${blog.slug}`,
          ['Blogs', blog.title]
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link
          rel="canonical"
          href={`https://eventsugi.com/blog/${blog.slug}`}
        />
      </Head>
      <Header />
      <Landing
    title={blog.title}
    image={ imageSrc} // Use blog.image.url if available, otherwise use imageSrc
  />
      <div className="bg-white text-gray-900">
        <div className="flex flex-col px-4  pt-8 sm:px-8 xl:px-24 2xl:px-32">
          <Breadcrumbs
            data={[
              {
                title: 'Home',
                link: '/'
              },
              {
                title: 'Blogs',
                link: '/blog'
              },
              {
                title: blog.title
              }
            ]}
          />
          <div className="prose prose-lg mb-16 mt-5 px-4 sm:px-8 xl:px-24 2xl:px-32">
            <MarkdownRenderer content={blog.content} />
          </div>
          {/* Display additional blog-specific content here */}
        </div>
      </div>
      <div>
        <div className="flex flex-col px-4 pt-0 pb-24 sm:px-8 xl:px-24 2xl:px-32">
          <ContactUsFormSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
