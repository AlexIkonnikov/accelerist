import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import { TabRadio } from './TabRadio';

interface TabRadioGroupeProps extends InputHTMLAttributes<HTMLInputElement> {
  value: Array<string>;
  label?: string;
}

export const TabRadioGroupe: FC<TabRadioGroupeProps> = ({ value, label = '', ...outerProps }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Flex>
        {value.map((val, idx) => {
            return (
              <TabRadio key={val + idx} value={val} {...outerProps}>
                {val}
              </TabRadio>
            );
          })}
      </Flex>
    </div>
  );
};

const Label = styled(AppText)`
  margin-bottom: 4px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
`;
