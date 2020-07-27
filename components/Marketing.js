/** @jsx jsx */
import { jsx, Container, Text, Heading, Grid, Link, Flex } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';

const USER_CASES = [
  {
    heading: 'Boost liquidity and give your users the best price',
    description:
      'Give your users the best price on the market by increasing liquidity. OasisDEX allows anyone to trustlessly integrate with the protocol.',
    link: '/docs/guides/introduction',
    icon: 'liquidity',
    color: 'liquidity',
  },
  {
    heading: 'Make markets and compete for profit opportunities',
    description:
      'Automate your arbitrage profit seeking strategy by running scripts with OasisDEX smart contracts.',
    link: '/docs/guides/introduction',
    icon: 'profit',
    color: 'profit',
  },
  {
    heading: 'Grow the ecosystem with your own front-end',
    description:
      'Strengthen the ecosystem by building your own front-end on OasisDEX. Provide your users with on-chain order book functionality.',
    link: '/docs/guides/introduction',
    icon: 'growth',
    color: 'growth',
  },
];

const MarketingItem = ({
  item: { heading, description, link, icon, color },
}) => (
  <Grid
    columns={['1', '1fr 2fr']}
    gap={[4, 5]}
    sx={{
      alignItems: 'center',
    }}
  >
    <Icon name={icon} color={color} size={7} sx={{ p: 3, m: 'auto' }} />
    <Grid columns={1} gap={[2, 3]} px={3}>
      <Heading variant="h4" mb={2} sx={{ color }}>
        {heading}
      </Heading>
      <Text>{description}</Text>
      <Link href={link}>
        <Flex sx={{ alignItems: 'center', fontSize: 5 }}>
          <Text variant="caps" sx={{ color }} mr={2}>
            Get Started
          </Text>
          <Icon name="arrow_right" color={color} />
        </Flex>
      </Link>
    </Grid>
  </Grid>
);

const Marketing = () => {
  return (
    <Container variant="landingContainer" sx={{ py: 0, my: 4, px: 3 }}>
      <Grid gap={[5, 6]}>
        {USER_CASES.map((item, key) => (
          <MarketingItem {...{ item }} key={key} />
        ))}
      </Grid>
    </Container>
  );
};

export default Marketing;
