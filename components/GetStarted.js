/** @jsx jsx */
import { jsx, Container, Text, Heading, Box, Grid, Link, Flex } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';

const USER_CASES = [
  {
    heading: 'User case header',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nibh mauris. Vivamus volutpat a mi a tempor.',
    link: '/',
  },
  {
    heading: 'User case header',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nibh mauris. Vivamus volutpat a mi a tempor.',
    link: '/',
  },
  {
    heading: 'User case header',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nibh mauris. Vivamus volutpat a mi a tempor.',
    link: '/',
  },
  {
    heading: 'User case header',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nibh mauris. Vivamus volutpat a mi a tempor.',
    link: '/',
  },
];

const GetStartedItem = ({ item: { heading, description, link } }) => (
  <Grid
    columns={['1', '1fr 200px']}
    gap={[4, 5]}
    sx={{
      alignItems: 'center',
      borderBottom: 'light',
      borderColor: 'onBackgroundEmphasis',
      py: [4, 5],
    }}
  >
    <Box>
      <Heading mb={2}>{heading}</Heading>
      <Text variant="bodyLarge">{description}</Text>
    </Box>
    <Link href={link}>
      <Flex sx={{ alignItems: 'center' }}>
        <Text sx={{ fontFamily: 'heading', fontSize: [4, 5], mr: 2 }}>
          Call to action
        </Text>
        <Icon name="arrow_right" />
      </Flex>
    </Link>
  </Grid>
);

const GetStarted = () => {
  return (
    <Container variant="landingContainer" sx={{ py: [4, 6], my: 4, px: 3 }}>
      <Text variant="sectionTitle">Get Started</Text>
      <Box>
        {USER_CASES.map((item, key) => (
          <GetStartedItem {...{ item }} key={key} />
        ))}
      </Box>
    </Container>
  );
};

export default GetStarted;
