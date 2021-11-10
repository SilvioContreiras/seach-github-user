import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header } from './styles'
import { api } from "../../services/api";
import logo from '../../assets/logo-github.svg'
interface RepositoryParams {
  repository: string;
}

interface Repository {
  fullName: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
  }
}

const Profile: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);

const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(({ data }) => {
      setRepository(data)
    })
  }, []);


  return (
    <>
    <Header>
      <img src={logo} alt="git logo" />
    </Header>
      <p>Search</p>

    </>
  )
};

export default Profile;
