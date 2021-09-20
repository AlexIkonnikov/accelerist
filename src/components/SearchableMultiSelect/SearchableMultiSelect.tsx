import React, { FC, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { CheckBox } from './../../ui/CheckBox';
import { AppText } from './../../ui/AppText';

interface SearchableMultiSelectProps {
  label?: string;
}

const SearchableMultiSelect: FC<SearchableMultiSelectProps> = ({ label = '' }) => {
  const data = [
    { item: 'Archive', isChecked: false },
    { item: 'Arc', isChecked: false },
    { item: 'Non', isChecked: false },
    { item: 'Groow', isChecked: false },
  ];
  const [items, setItems] = useState(data);

  const handleCheckItem = (str: string) => {
    const idx = items.findIndex((el) => el.item === str);
    if (idx !== -1) {
      const newArray = [...items];
      newArray.splice(idx, 1, { item: str, isChecked: !items[idx].isChecked });
      setItems(newArray);
    }
  };

  return (
    <div>
      <Label>{label}</Label>
      <InputWrapper>
        <StyledInput placeholder="Search" />
      </InputWrapper>
      <List>
        {items.map((item, idx) => {
          return (
            <ListItem key={item.item}>
              <StyledLabel>
                <div>
                  <CheckBox
                    checked={items[idx].isChecked}
                    onChange={() => {
                      handleCheckItem(item.item);
                    }}
                  />
                </div>
                <ItemText type="FootnoteBlack">{item.item}</ItemText>
              </StyledLabel>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

const Label = styled(AppText)`
  margin-bottom: 4px;
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({theme}) => theme.colors.line};
  border-radius: 6px;
  margin-bottom: 16px;
`;

const ItemText = styled(AppText)`
  margin-left: 10px;
`

const StyledInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 100%;
  border: none;
  font-size: 16px;
  line-height: 16px;
  outline: none;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const List = styled.ul`
  height: 90px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 4px;
  }
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

export default SearchableMultiSelect;
