import Image from 'next/image'
import { FC } from 'react'
//import { api } from '~/utils/trpc'
import { useEffect, useState } from 'react';

export const Portfolios: FC = () => {
  //const { data: portfolios } = api.portfolio.getAll.useQuery()

  const [portfolios, setportfolios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://eventsugi.com/api/trpc/portfolio.getAll');

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Fetched result:', result);

        // Extract the array from the result object
        const data = result.result?.data?.json || [];
        if (Array.isArray(data)) {
          setportfolios(data);
        } else {
          console.error('Expected an array but got:', data);
        }
      } catch (error) {
        console.error('Error fetching portfolios :', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load Portfolio page.</p>;


  return portfolios?.map((image, i) => (
    <div className="relative overflow-hidden px-4" key={i}>
      {image.image?.url ? (
        <Image
          src={image.image.url}
          layout="responsive"
          alt={image.title}
          height={1}
          width={1}
        />
      ) : image.video ? (
        <video src={image.video.url} controls className="w-full" />
      ) : null}
    </div>
  ))
}
