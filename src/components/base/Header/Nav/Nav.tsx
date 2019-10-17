import * as React from 'react';

import { ChevronDown } from 'assets/svgs';
import { palette } from 'styles/palette';
import {
  NavBlock,
  List,
  LinkWrapper,
  DropDown,
  DivType,
  LinkType,
  ChildLinkType,
  TagSpan,
} from './Nav.styles';

interface INavBase {
  name: string;
  url: string;
  color?: string;
}
interface INav extends INavBase {
  hasChildren: boolean;
  children?: INavBase[];
}
interface IProps {
  isMobile: boolean;
  visible: boolean;
}

const navList: INav[] = [
  { name: 'PROFILE', url: '/profile', hasChildren: false },
  { name: 'LOG', url: '/log', hasChildren: false },
  {
    name: 'DEVELOP',
    hasChildren: true,
    url: '',
    children: [
      { name: 'all', url: '/develop/all', color: palette.red4 },
      { name: 'react', url: '/develop/react', color: palette.grape4 },
      { name: 'node', url: '/develop/node', color: palette.violet4 },
      { name: 'javascript', url: '/develop/javascript', color: palette.indigo4 },
      { name: 'etc', url: '/develop/etc', color: palette.cyan4 },
    ],
  },
];

const Nav: React.FunctionComponent<IProps> = React.memo(({ isMobile, visible }) => (
  <NavBlock active={visible && isMobile}>
    <List>
      {navList.map((link: INav) =>
        link.hasChildren ? (
          <LinkWrapper key={link.name}>
            <DivType>
              {link.name}
              <ChevronDown className="expand-icon" />
            </DivType>
            <DropDown>
              {link.children &&
                link.children.map((child: INavBase) => (
                  <ChildLinkType
                    to={child.url}
                    activeClassName="current"
                    color={child.color}
                    key={child.name}
                  >
                    <TagSpan>#</TagSpan>
                    {child.name}
                  </ChildLinkType>
                ))}
            </DropDown>
          </LinkWrapper>
        ) : (
          <LinkType to={link.url} activeClassName={isMobile ? '' : 'current'} key={link.name}>
            {link.name}
          </LinkType>
        ),
      )}
    </List>
  </NavBlock>
));

export default Nav;
