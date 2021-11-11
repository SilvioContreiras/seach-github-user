import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

  }

  img {
    width: 20%;
    margin-right: 4px;
  }
  `;

export const RepositoryInfo = styled.section`
  margin-top: 40px;

  div {
    display: flex;
    align-items: center;

    h3 {
      font-size: 40px;
      color: #1d084e;
      margin-left: 20px;
      font-weight: 100;
    }
  }

  img {
    width: 21%;
    height: 21%;
    border-radius: 50%;
  }

  ul {
    list-style: none;
    color: #1d084e;
    line-height: 2;
    margin-top: 29px;
    font-size: 22px;
    font-weight: 400;

    li {
      span {
        color: #0b192a;
        font-weight: 500;
        padding-right: 10px;
      }
    }
  }
`;
