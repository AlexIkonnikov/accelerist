import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { OpenEyeIcon } from '../../ui/icons/OpenEyeIcon';
import { OffEyeIcon } from '../../ui/icons/OffEyeIcon';
import { Input } from '../../ui/Input';


const PasswordInput: FC<FieldRenderProps<string>> = ({input, meta }) => {
  const [type, setType] = useState('password');
  const setPasswordTypeHandler = () => {
    setType('password');
  }

  const setTextTypeHandler = () => {
    setType('text');
  }

  const isValid = meta.error && meta.touched;
  return (
    <>
      <RelativeWrapper>
        <Input {...input} id={input.name} type={type} isValid={isValid} />
        <IconWrapper>
          {type === 'password' ? <OffEyeIcon onClick={setTextTypeHandler} /> : <OpenEyeIcon onClick={setPasswordTypeHandler}/>}
        </IconWrapper>
      </RelativeWrapper>
    </>
  );
};

const RelativeWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 10px;
`;

export default PasswordInput;
