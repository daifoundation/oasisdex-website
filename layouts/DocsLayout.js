import Link from 'next/link';
import { Container, Box, Grid, NavLink, Heading, Text } from 'theme-ui';
import { useRouter } from 'next/router';
import Head from 'next/head';

import BaseLayout from '../layouts/BaseLayout';

const NAV_ITEMS = [
  {
    name: 'Guides',
    items: [
      { name: 'Introduction', link: '/guides/introduction' },
      {
        name: 'Usage with Proxy',
        link: '/guides/use-proxy',
      },
      { name: 'Market Maker Guide', link: '/guides/market-maker-guide' },
      { name: 'Market Taker Guide', link: '/guides/market-taker-guide' },
    ],
  },
  {
    name: 'References',
    items: [
      { name: 'Smart Contract API', link: '/references/smart-contract' },
      { name: 'Deployments', link: '/references/current-deployments' },
    ],
  },
];

const BASE_PATH = '/docs';

const isActive = (pathname, link) => pathname === `${BASE_PATH}${link}`;

const DocsLayout = ({ children }) => {
  const router = useRouter();

  return (
    <BaseLayout>
      <Head>
        <title>OasisDEX Protocol - Docs</title>
      </Head>
      <Container my={[3, 5]}>
        <Grid columns={[1, '250px 1fr']} sx={{ alignItems: 'flex-start' }}>
          <Grid gap="1">
            {NAV_ITEMS.map(({ name, items }, index) => (
              <React.Fragment key={index}>
                <Text
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: 0,
                    pt: 4,
                    color: 'onBackgroundAlt',
                    letterSpacing: 2,
                    fontFamily: 'heading',
                  }}
                >
                  {name}
                </Text>

                {items.map(({ name, link }, index) => (
                  <Link href={`${BASE_PATH}${link}`} key={index} passHref>
                    <NavLink
                      sx={{
                        p: 0,
                        fontSize: 3,
                        color: isActive(router.pathname, link)
                          ? 'primary'
                          : 'text',
                      }}
                    >
                      {name}
                    </NavLink>
                  </Link>
                ))}
              </React.Fragment>
            ))}
          </Grid>
          <Box
            sx={{
              // Omit margin top of first element from mdx file
              '& > *:first-of-type': {
                mt: 0,
              },
              'h1 .header-link, h2 .header-link, h3 .header-link, h4 .header-link, h5 .header-link, h6 .header-link': {
                display: 'none',
                fontStyle: 'italic',
              },
              'h1:hover .header-link, h2:hover .header-link, h3:hover .header-link, h4:hover .header-link, h5:hover .header-link, h6:hover .header-link': {
                display: 'inline',
                cursor: 'pointer',
              },
            }}
          >
            {children}
          </Box>
        </Grid>
      </Container>
    </BaseLayout>
  );
};

export default DocsLayout;
