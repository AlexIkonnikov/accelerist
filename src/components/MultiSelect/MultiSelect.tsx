import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppText } from './../../ui/AppText';
import { ReactComponent as ArrowDown } from './../../assets/icons/arrow-down.svg';
import { CheckBox } from './../../ui/CheckBox';
import { FieldRenderProps, FieldProps, Field, FieldInputProps, RenderableProps } from 'react-final-form';

interface MultiSelectProps extends FieldProps<Array<string>, FieldRenderProps<Array<string>>> {
  label?: string;
}

const MultiSelect: FC<MultiSelectProps> = ({ label = '', name, value }) => {
  const [isListShow, setListShow] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

  const handleToggleList = () => {
    setListShow(!isListShow);
  };

  const handleSetSelectedItem = (str: string, isChecked: boolean) => {
    const newArray = [...selectedItems];
    if (isChecked) {
      newArray.push(str);
      setSelectedItems(newArray);
    } else {
      const idx = selectedItems.findIndex((item) => item === str);
      newArray.splice(idx, 1);
      setSelectedItems(newArray);
    }
  };

  const showResult = () => {
    return selectedItems.join(', ');
  }

  const handleChangeField = (event: ChangeEvent<HTMLInputElement>, input: FieldInputProps<string>) => {
    handleSetSelectedItem(event.target.value, event.target.checked);
    input.onChange(event);
  };

  return (
    <div>
      {label && <AppText>{label}</AppText>}
      <SelectWrapper>
        <SelectedItem onClick={handleToggleList}>
          <SelectedText type="BodyBlack">
          {/* {value && value.map((item, idx) => {
            return (
              <Field
                key={item + idx}
                name={name}
                type="checkbox"
                value={item}
                render={({input}) => {
                  if (input.checked) {
                    return item;
                  }
                  return null;
                }}
              />
            )
          })} */}
          {showResult() || 'Select'}
          </SelectedText>
          <Toggler>{isListShow ? <ArrowTop /> : <ArrowDown />}</Toggler>
        </SelectedItem>
        {isListShow && (
          <OptionList>
            {value && value.map((item, idx) => {
              return (
                <OptionItem key={item + idx} className="selected-item">
                  <Label>
                    <AppText type="BodyBlack">{item}</AppText>
                    <CheckBoxWrapper>
                      <Field
                        type="checkbox"
                        name={name}
                        value={item}
                        render={({input}) => {console.log(input); return <CheckBox {...input} onChange={(e) => {handleChangeField(e, input)}}/>}}
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
  border: 1px solid ${({theme}) => theme.colors.line};
  border-radius: 8px;
`;

const OptionList = styled.ul`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.line};
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
