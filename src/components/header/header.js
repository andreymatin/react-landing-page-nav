import React from 'react';
import { Helmet } from 'react-helmet';

function Header() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Dropcast</title>
      <link rel="author" href="humans.txt" />
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Rufina:400,700|Source+Sans+Pro:200,300,400,600,700" rel="stylesheet" />

      <link rel="shortcut icon" href="./favicon.ico" />

      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="logo192.png" />
      <link rel="manifest" href="./manifest.json" />
    </Helmet>
  );
}

export default Header;