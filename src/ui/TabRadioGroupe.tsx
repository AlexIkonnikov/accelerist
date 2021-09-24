import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import { TabRadio } from './TabRadio';
import { FieldRenderProps, FieldProps, Field } from 'react-final-form';

interface TabRadioGroupeProps extends FieldProps<string, FieldRenderProps<string>> {
  label?: string;
  items: Array<string>;
}

export const TabRadioGroupe: FC<TabRadioGroupeProps> = ({ label = '', name, items, value }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Flex>
        {items.map((item, idx) => {
          return (
            <Field
              type="radio"
              key={item + idx}
              name={name}
              value={item.toLowerCase()}
              render={({ input }) => <TabRadio {...input}>{item}</TabRadio>}
            />
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
  background-color: ${({theme}) => theme.colors.substrate};
`;
