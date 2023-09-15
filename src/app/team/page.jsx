"use client"
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { usePathname } from 'next/navigation';

import HeroTeam from '../components/HeroTeam';
import AllTeam from '../components/AllTeam';

import Data from '../../json/landingPage.json';

// export const metadata = {
//   title: 'Teams - DreamsHub',
// }

export default class TeamPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <HeroTeam {...this.props} />
        <AllTeam data={Data.team} />
      </>
    );
  }
}
