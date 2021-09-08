import React, { FC } from 'react';
import { Container } from '../ui/Container';
import { Counter } from '../ui/Counter';
import { TitleBlock } from '../ui/TitleBlock';
import { TransparentButton } from '../ui/TransparentButton';

const ProspectsPage: FC = () => {
  return (
    <>
      <TitleBlock title="Prospects"/>
      <Container variant={2}>
        <Counter count={0} />
      </Container>
    </>
  );
};

export default ProspectsPage;
