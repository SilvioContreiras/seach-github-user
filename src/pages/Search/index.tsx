import React, {FormEvent, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Title, Form } from './styles';

import { api } from "../../services/api";

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
const [userName, setUserName] = useState('');
const history = useHistory();

  const [profileData, setProfileData] = useState<Repository | void>(() => {
    const localData = localStorage.getItem('userData');

    if(localData) {
      return JSON.parse(localData);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(profileData))
  }, [profileData]);


  const handleSearch = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
       await api.get<Repository>(`users/${userName}`).then(response => {
        if(response.data) {
          setProfileData(response.data);
          setUserName("");

          history.push('/profile')
        }
      })

    } catch (err) {
      console.info(err);
    }
  }

  return (
    <>
      <Title>Github finder</Title>
      <Form onSubmit={handleSearch}>
        <input
          value={userName}
          onChange={e => setUserName(e.target.value)}
          placeholder="Enter the username"
        />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  )
}

export default Search;
