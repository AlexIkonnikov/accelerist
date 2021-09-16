import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { AppText } from './../../ui/AppText';
import { ReactComponent as ArrowDown } from './../../assets/icons/arrow-down.svg';
import { CheckBox } from './../../ui/CheckBox';
import { FieldRenderProps } from 'react-final-form';

interface MultiSelectProps extends FieldRenderProps<Array<ItemsProps>> {
  label?: string;
  data: Array<ItemsProps>;
}

interface ItemsProps {
  item: string;
  isChecked: boolean;
}

const MultiSelect: FC<MultiSelectProps> = ({ label = '', data, input }) => {
  const [isListShow, setListShow] = useState(false);
  const [selectedItem, setItemsState] = useState(data);

  const handleToggleList = () => {
    setListShow(!isListShow);
  };

  const handleToggleChecked = (item: string) => {
    const idx = selectedItem.findIndex((el) => el.item === item);
    if (idx !== -1) {
      const newState = [...selectedItem];
      newState.splice(idx, 1, { ...newState[idx], isChecked: !newState[idx].isChecked });
      setItemsState(newState);
      const result: Array<string> = [];
      newState.forEach((el) => {
        el.isChecked ? result.push(el.item) : null;
      });
      input.onChange(result);
    }
  };

  const showResult = () => {
    const result: Array<string> = [];
    selectedItem.map((el) => {
      if (el.isChecked) {
        result.push(el.item);
      }
    });
    return result.length > 0 ? result.join(', ') : undefined;
  };

  return (
    <div>
      {label && <AppText>{label}</AppText>}
      <SelectWrapper>
        <SelectedItem onClick={handleToggleList}>
          <SelectedText type="BodyBlack">{showResult() || 'Select'}</SelectedText>
          <Toggler>{isListShow ? <ArrowTop /> : <ArrowDown />}</Toggler>
        </SelectedItem>
        {isListShow && (
          <OptionList>
            {selectedItem.map((el, idx) => {
              return (
                <OptionItem key={el.item + idx} className="selected-item">
                  <Label>
                    <AppText type="BodyBlack">{el.item}</AppText>
                    <CheckBoxWrapper>
                      <CheckBox
                        checked={selectedItem[idx].isChecked}
                        onChange={() => {
                          handleToggleChecked(el.item);
                        }}
                      />
                    </CheckBoxWrapper>
                  </Label>
                </OptionItem>
              );
            })}
          </OptionList>
        )}
      </SelectWrapper>
    </div>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SelectedText = styled(AppText)`
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
`;

const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 9px 16px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
`;

const OptionList = styled.ul`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #e8e8e8;
  border-top: none;
  top: 42px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
  z-index: 10;
`;

const OptionItem = styled.li`
  padding: 12px 20px 9px 16px;
`;

const Toggler = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowTop = styled(ArrowDown)`
  transform: rotate(-180deg);
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;

export default MultiSelect;
