import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import { ReactComponent as ArrowDown } from './../assets/icons/arrow-down.svg';

interface SelectProps {
  label?: string;
  data: Array<string>;
}

export const Select: FC<SelectProps> = ({ label = '', data }) => {
  const [isListShow, setListShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleToggleList = () => {
    setListShow(!isListShow);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    handleToggleList();
  }

  return (
    <>
    {label && <AppText>{label}</AppText>}
    <SelectWrapper>
      <SelectedItem>
        <AppText type="BodyBlack">{selectedItem}</AppText>
        <Toggler onClick={handleToggleList}>{isListShow ? <ArrowTop /> : <ArrowDown />}</Toggler>
      </SelectedItem>
      {isListShow && (
        <OptionList>
          {data.map((item, idx) => {
            if (item === selectedItem) {
              return (
                <OptionItem key={item + idx} className="selected-item" onClick={() => {handleSelectItem(item)}}>
                  <AppText type="BodyBlack">{item}</AppText>
                </OptionItem>
              );
            }
            return (
              <OptionItem key={item + idx} onClick={() => {handleSelectItem(item)}}>
                <AppText type="BodyBlack">{item}</AppText>
              </OptionItem>
            );
          })}
        </OptionList>
      )}
    </SelectWrapper>
    </>
  );
};

const SelectWrapper = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 9px 16px;
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  transition: 0.5s;
`;

const OptionItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 9px 16px;
  &.selected-item {
    background-color: #e9f9ff;
  }
`;

const Toggler = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowTop = styled(ArrowDown)`
  transform: rotate(-180deg);
`;
