type MetaProperty = {
  name?: string
  property?: string
  content: string
}

export const getMetaData = (
  title = 'Eventsugi',
  description = 'LUXURY EVENTS IN DUBAI',
  urlSuffix = '',
  keywords = [] as string[]
) =>
  [
    {
      property: 'og:locale',
      content: 'en_US'
    },
    {
      property: 'og:title',
      content: title
    },
    {
      name: 'keywords',
      content: ['Eventsugi', 'Dubai Events', 'Events in Dubai']
        .concat(keywords)
        .join(', ')
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:description',
      content: description
    },
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:url',
      content: 'https://www.eventsugi.com' + urlSuffix
    },
    {
      property: 'og:image',
      content: 'https://www.eventsugi.com/favicon.ico'
    }
  ] as MetaProperty[]
