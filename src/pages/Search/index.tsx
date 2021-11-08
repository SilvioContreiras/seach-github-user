import React from 'react';

import { Title, Form } from './styles'

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
