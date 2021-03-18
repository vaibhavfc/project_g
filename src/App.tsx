import { Box } from '@material-ui/core';
import React, { FC } from 'react';
// import { BrowserRouter as Router, Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import { 
  Link, 
  // Button, 
  Breadcrumbs,
  Header,
  Divider,
  Chip,
  Checkbox,
  CheckboxList,
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
      <Checkbox />
      <CheckboxList
        list={{
          items: [
            {
              label: 'Default'
            },
            {
              checked: true,
              label: 'Checked'
            },
            {
              disabled: true,
              label: 'Disabled'
            },
            {
              checked: true,
              disabled: true,
              label: 'Checked & Disabled'
            }
          ],
          title: 'Checkbox List Heading'
        }}
        onFocusVisible={() => {}}
      />
    </div>
  );
}

export default App;
