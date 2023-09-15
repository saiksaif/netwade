"use client"
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Hero from '../components/Hero';
import Service from '../components/Service';
import Portfolio from '../components/Portfolio';
import Advantage from '../components/Advantage';
import Testimonial from '../components/Testimonial';
import Discuss from '../components/Discuss';

import Data from 'json/landingPage.json';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Hero {...this.props} />
        <Service data={Data.service} />
        <Portfolio data={Data.portfolio} />
        <Advantage data={Data.advantage} />
        <Testimonial data={Data.testimonial} />
        <Discuss />
      </>
    );
  }
}
