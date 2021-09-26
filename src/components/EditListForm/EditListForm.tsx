import React, { ChangeEvent, FC, useRef, useState, useEffect } from 'react';
import { ReactComponent as Pen } from './../../assets/icons/pen.svg';
import { Button } from './../../ui/Button';
import styled from 'styled-components';
import { AppText } from './../../ui/AppText';
import { IList } from '../../store/savedList/types';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { actions, selectors } from './../../store/ducks';
import { useHistory } from 'react-router';
import { ROUTES } from '../../route';

interface EditListFormProps {
  list?: IList;
}

const EditListForm: FC<EditListFormProps> = ({ list }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const status = useAppSelector(selectors.saveList.selectStatus);
  const [isEditable, setEditable] = useState(list?.name ? false : true);
  const [value, setValue] = useState(list?.name ?? '');
  const inputRef = useRef(document.createElement('input'));

  useEffect(() => {
    isEditable && inputRef.current.focus();
  }, [isEditable]);

  const toggleMode = () => {
    setEditable(!isEditable);
  };

  const handleChangeName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleUpdateList = () => {
    list && dispatch(actions.saveList.updateSavedListRequest({ ...list, name: value }));
    toggleMode();
  };

  const handleDeleteList = () => {
    list?.id && dispatch(actions.saveList.deleteSavedListRequest(list.id)).then(() => history.push(ROUTES.dashboard));
  };

  return (
    <Wrapper>
      {isEditable ? (
        <Input ref={inputRef} value={value} onChange={handleChangeName} />
      ) : (
        <AppText type="Title" tagName="h2">
          {value}
        </AppText>
      )}
      <ButtonWrapper>
        {isEditable ? (
          <>
            <EditButton variant="secondary" onClick={handleUpdateList} disabled={value.length === 0}>
              save
            </EditButton>
            <DeleteButton variant="danger" onClick={toggleMode}>
              cancel
            </DeleteButton>
          </>
        ) : (
          <>
            <EditButton variant="secondary" onClick={toggleMode} isLoading={status === 'pending'}>
              <PenIcon />
              Edit
            </EditButton>
            <DeleteButton variant="danger" onClick={handleDeleteList} disabled={!isEditable && status === 'pending'}>
              Delete
            </DeleteButton>
          </>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  font-size: 32px;
  line-height: 48px;
  font-family: Rubik-Medium;
  outline: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const EditButton = styled(Button)`
  padding: 9px 16px;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const DeleteButton = styled(Button)`
  padding: 9px 20px;
`;

const PenIcon = styled(Pen)`
  margin-right: 10px;
`;

export default EditListForm;
