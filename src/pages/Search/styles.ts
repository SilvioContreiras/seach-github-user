import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #08155e;
  font-size: 25px;
  font-weight: 500;
  line-height: 55px;
  max-width: 460px;
`

export const Form = styled.form`
  margin-top: 10px;
  max-width:570px;

  display: flex;

  input {
    flex: 1;
    height: 40px;
    border: 0;
    border-radius: 4px 0 0 4px;
    padding: 0 10px;
    color: #3a3a3a;
    border: 1px solid #00000087;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }

  }

  button {
    width: 150px;
    height: 40px;
    background: #08155e;
    border-radius: 0 4px 4px 0;
    border: 0;
    color: #fff;
    font-weight: 400;
    transition: 0.2s;

    &:hover {
    background: ${shade(0.3, '#08155e')};
  }
  }
`
