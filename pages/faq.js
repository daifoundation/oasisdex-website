/** @jsx jsx */
import { jsx, Heading, Container } from 'theme-ui';
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import QuestionsStatic from '../components/QuestionsStatic';

const QUESTIONS_AND_ANSWERS = [{
  q: 'What is the OasisDEX Protocol?',
  a: <span>
    The OasisDEX Protocol is a fully decentralised, non-custodial, permisionless on-chain matching market. It allows users of the Protocol to create orders which are then matched with other buyers and sellers of the Protocol, with settlement happening completely on-chain.
  </span>
}, {
  q: 'Does anyone else have access to my funds when I am using the Protocol?',
  a: <span>
    No, OasisDEX Protocol is non-custodial. This means that only the OasisDEX smart contract interacts with your funds, and only you can create or cancel orders. Because of this, it is also very important you have the relevant backups of your private keys, as there is no-one that can access your funds for you should you lose access to your wallet. 
  </span>
}, {
  q: 'Are there any limitations on who can integrate the OasisDEX Protocol?',
  a: <span>
    No, anyone can integrate the OasisDEX Protocol, the only requirement is that your project is running on the Ethereum Blockchain. There are also no fees and no permission needed from anyone. To find out how to get started with your integration, have a look at our docs page. 
  </span>
}];

const FAQs = () => (
  <BaseLayout>
    <Head>
      <title>OasisDEX Protocol - FAQs</title>
    </Head>
    <Container sx={{ minHeight: '650px', pt: '38px', pb: '100px', pl: '30px'}}>
      <Heading variant="largeHeading" as="h1">
        FAQs
      </Heading>
      <QuestionsStatic questions={QUESTIONS_AND_ANSWERS} sx={{marginTop: '20px'}}/>
    </Container>
  </BaseLayout>
);

export default FAQs;
