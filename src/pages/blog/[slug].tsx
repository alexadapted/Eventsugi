import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { ContactUsFormSection } from '~/components/ContactUsForm'
import MarkdownRenderer from '~/components/MarkdownRenderer'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Landing } from '~/components/Landing-blog'
import { getMetaData } from '~/utils/meta'

const BlogPage: NextPage = () => {
  const defaultImageSrc = '/Images/event-management-company/Images _ 12 Blogs/Eventsugi.png';
  const router = useRouter();
  const { slug } = router.query; // Get the dynamic slug from the URL
  const [blog, setBlog] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (slug && typeof slug === 'string') {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`https://eventsugi.com/api/trpc/blogs.getAll`);
          console.log('Response status:', response.status);
          console.log('Response headers:', response.headers);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();
          console.log('Fetched result:', result); // Log the entire result object to inspect its structure

          // Using the approach with optional chaining to access data safely
          const data = result.result?.data?.json || [];
          console.log('Parsed data:', data);

          if (Array.isArray(data)) {
            const fetchedBlog = data.find((b: any) => b.slug === slug);
            console.log('Fetched blog:', fetchedBlog);

            if (fetchedBlog) {
              setBlog(fetchedBlog);
            } else {
              setIsError(true); // Blog not found
              console.error('Blog not found in the fetched result:', slug);
            }
          } else {
            setIsError(true);
            console.error('Expected an array but got:', data);
          }
        } catch (error) {
          console.error('Error fetching blog:', error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };

      fetchBlog();
    }
  }, [slug]); // The effect will rerun when slug changes

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !blog) {
    return <p>Blog not found or an error occurred</p>;
  }

  // Determine the image source based on blog.slug
  const imageSrc = blog.slug === 'Corporate-Events-EventSugi' || blog.slug === 'ramadan-event-planners-dubai' || blog.slug === 'wedding-decorations-dubai-eventsugi' || blog.slug === 'new-years-party-planning-dubai' || blog.slug === 'christmas-decorations-corporate-events-uae' || blog.slug === 'proposal-planning-dubai' || blog.slug === 'UAE-National-Day-Event' || blog.slug === 'Eventsugi'
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
        image={imageSrc} // Use blog.image.url if available, otherwise use imageSrc
      />
      <div className="bg-white text-gray-900">
        <div className="flex flex-col px-4 pt-8 sm:px-8 xl:px-24 2xl:px-32">
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
