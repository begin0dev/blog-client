import * as React from 'react';

import { MdArrowDropDown } from 'react-icons/md';
import { NavBlock, List, LinkWrapper, DropDown, DivType, LinkType, ChildLinkType } from './Nav.styles';

interface INavChild {
  name: string;
  url: string;
}
interface INav extends INavChild {
  hasChildren: boolean;
  children?: INavChild[];
}

const navList: INav[] = [
  { name: 'Profile', url: '/profile', hasChildren: false },
  { name: 'Log', url: '/log', hasChildren: false },
  {
    name: 'Development',
    hasChildren: true,
    url: '',
    children: [
      { name: 'All', url: '/develop/all' },
      { name: 'React', url: '/develop/React' },
      { name: 'Node', url: '/develop/node' },
      { name: 'Javascript', url: '/develop/javascript' },
      { name: 'Etc', url: '/develop/etc' },
    ],
  },
];

interface IProps {
  isTablet: boolean;
  visible: boolean;
}

const Nav: React.FunctionComponent<IProps> = React.memo(({ isTablet, visible }) => (
  <NavBlock active={isTablet && visible}>
    <List>
      {navList.map((link: INav) =>
        link.hasChildren ? (
          <LinkWrapper key={link.name}>
            <DivType>
              {link.name}
              <MdArrowDropDown className="expand-icon" />
            </DivType>
            <DropDown>
              {link.children &&
                link.children.map((child: INavChild) => (
                  <ChildLinkType to={child.url} activeClassName="current" key={child.name}>
                    {child.name}
                  </ChildLinkType>
                ))}
            </DropDown>
          </LinkWrapper>
        ) : (
          <LinkType to={link.url} activeClassName={isTablet ? 'current' : ''} key={link.name}>
            {link.name}
          </LinkType>
        ),
      )}
    </List>
  </NavBlock>
));

export default Nav;
