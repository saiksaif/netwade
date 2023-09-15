"use client"
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component, useEffect } from 'react';

import PortfolioDetail from '../../components/PortfolioDetail';

import Data from '../../../json/landingPage.json';

export default function ProjectDetailPage({ params }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailData = Data.portfolio.filter((item) => item.id === `${params.projectId}`);

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
    </>
  );
}
