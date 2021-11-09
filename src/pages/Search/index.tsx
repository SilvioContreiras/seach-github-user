import React, { useState, useEffect } from 'react';
import { Title, Form } from './styles';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Search: React.FC = () => {
  return (
    <>
      <Title>Github finder</Title>
      <Form>
        <input placeholder="Enter the username" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  )
}

export default Search;
