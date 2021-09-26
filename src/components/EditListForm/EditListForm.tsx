import React, { FC, useState } from 'react';
import { ReactComponent as Pen } from './../../assets/icons/pen.svg';
import {Button} from './../../ui/Button';
import styled from 'styled-components';
import {AppText} from './../../ui/AppText';

interface EditListFormProps {
  name: string;
  isEdit?: boolean;
}

const EditListForm: FC<EditListFormProps> = ({name, isEdit = false}) => {

  const [isEditable, setEditable] = useState(isEdit);

  return (
    <Wrapper>
      <AppText type="Title" tagName="h2">{name}</AppText>
      <ButtonWrapper>
        <EditButton variant="secondary">
          <PenIcon />
          Edit
        </EditButton>
        <DeleteButton variant="danger">Delete</DeleteButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
