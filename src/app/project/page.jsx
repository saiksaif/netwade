"use client"
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import HeroPortfolio from '../components/HeroPortfolio';
import Discuss from '../components/Discuss';
import AllPortfolio from '../components/AllPortfolio';

import Data from "../../json/landingPage.json"

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <HeroPortfolio {...this.props} />
        <AllPortfolio data={Data.portfolio} />
        <Discuss {...this.props} />
      </>
    );
  }
}
