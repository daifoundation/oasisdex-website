/** @jsx jsx */
import { jsx, Container, Heading, Text, Button, Link } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';

const Lead = () => {
  return (
    <Container
      sx={{
        textAlign: 'center',
        maxWidth: '768px',
        py: 6,
      }}
    >
      <Heading variant="largeHeading" as="h1">
        Build on OasisDEX Protocol
      </Heading>
      <Text variant="bodyLarge" sx={{ my: 3 }}>
        OasisDEX is a fully decentralized exchange protocol that allows anyone
        to provide and access liquidity on chain, with limit order support.
      </Text>
      <Link href="/docs/introduction">
        <Button as="a" variant="textual">
          Go to Docs <Icon name="arrow_right" />
        </Button>
      </Link>
    </Container>
  );
};

export default Lead;
