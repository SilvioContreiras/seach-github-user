import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header, RepositoryInfo } from './styles'
import logo from '../../assets/github-icon.jpg';

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  avatar_url: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
  }
}

const Profile: React.FC = () => {
   const [profileData] = useState<Repository>(() => {
    const localData = localStorage.getItem('userData');

    if(localData) {
      return JSON.parse(localData);
    }

    return [];
  });


  return (
    <>
    <Header>
      <Link to="/">
      <img src={logo} alt="git logo" />
      </Link>

      <Link to="/">
        <FiChevronLeft />
        Voltar
      </Link>
    </Header>

    <RepositoryInfo>
      <div>
        <img src={profileData.avatar_url} alt="Profile avatar" />
        <h3>{profileData.name}</h3>
      </div>


      <ul>
        <li>Repositories: <span>{profileData.public_repos}</span></li>
        <li>Followers: <span>{profileData.followers}</span></li>
        <li>Following: <span>{profileData.following}</span></li>
        <li>Login: <span>{profileData.login}</span></li>
      </ul>

    </RepositoryInfo>

    </>
  )
};

export default Profile;
