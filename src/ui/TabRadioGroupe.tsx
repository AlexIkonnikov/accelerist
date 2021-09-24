import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import { TabRadio } from './TabRadio';
import { FieldRenderProps, FieldProps, Field } from 'react-final-form';

interface TabRadioGroupeProps extends FieldProps<string[], FieldRenderProps<string[], HTMLElement>> {
  label?: string;
}

export const TabRadioGroupe: FC<TabRadioGroupeProps> = ({ label = '', name, value }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Flex>
        {value &&
          value.map((item, idx) => {
            return (
              <Field
                type="radio"
                name={name}
                key={item + idx}
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
  background-color: ${({ theme }) => theme.colors.substrate};
`;
