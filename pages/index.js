/** @jsx jsx */
import { jsx } from 'theme-ui';
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import Lead from '../components/Lead';
import Marketing from '../components/Marketing';
import PartnersSmall from '../components/PartnersSmall';

const Index = () => (
  <BaseLayout>
    <Head>
      <title>OasisDEX Protocol</title>
    </Head>
    <Lead />
    <Marketing />
    <PartnersSmall />
    <div style={{display: 'none'}}>
      test
    </div>
  </BaseLayout>
);

export default Index;
