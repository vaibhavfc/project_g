import { Box } from '@material-ui/core';
import React, { FC } from 'react';
// import { BrowserRouter as Router, Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import { 
  Link, 
  // Button, 
  Breadcrumbs,
  Header,
  Divider,
  Chip
} from './components'

const App: FC = () => {

  // const Links = [
  //   { href: '#', linkText: 'Link1', active: false },
  //   { href: '#', linkText: 'Link2', active: false },
  //   { href: '#', linkText: 'Link3', active: false },
  //   { href: '#', linkText: 'Link4', active: false },
  //   { href: '#', linkText: 'Link5', active: false },
  //   { href: '/1', linkText: 'Current Page', active: true }
  // ]

  return (
    <div>
      {/* TODO VAIBHAV (ROUTER) */}
      {/* <Link>LINK</Link> */}
      {/* <Breadcrumbs
        links={Links}
        itemsAfterCollapse={3}
        maxItems={4}
      /> */}
      <Box display='flex' justifyContent='space-around'>
        <Chip label='chip' size='small' type='default' />
        <Chip label='chip' size='medium' type='default' />
        <Chip label='chip' size='small' type='success' />
        <Chip label='chip' size='medium' type='success' />
        <Chip label='chip' size='small' type='pending' />
        <Chip label='chip' size='medium' type='pending' />
        <Chip label='chip' size='small' type='warning' />
        <Chip label='chip' size='medium' type='warning' />
        <Chip label='chip' size='small' type='info' />
        <Chip label='chip' size='medium' type='info' />
      </Box>
    </div>
  );
}

export default App;
