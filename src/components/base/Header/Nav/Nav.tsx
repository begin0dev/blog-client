import * as React from 'react';

import { MdArrowDropDown } from 'react-icons/md';
import { FaRegComment, FaRegAddressCard, FaRegFileCode } from 'react-icons/fa';
import { NavBlock, List, LinkWrapper, DropDown, DivType, LinkType, ChildLinkType } from './Nav.styles';

interface INavChild {
  name: string;
  url: string;
}
interface INav extends INavChild {
  icon: React.SVGAttributes<SVGAElement>;
  hasChildren: boolean;
  children?: INavChild[];
}

const navList: INav[] = [
  { name: 'Profile', url: '/profile', hasChildren: false, icon: <FaRegAddressCard className="type-icon" /> },
  { name: 'Log', url: '/log', hasChildren: false, icon: <FaRegComment className="type-icon" /> },
  {
    name: 'Development',
    hasChildren: true,
    url: '',
    icon: <FaRegFileCode className="type-icon" />,
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

const Nav: React.FunctionComponent<IProps> = ({ isTablet, visible }) => (
  <NavBlock active={isTablet && visible}>
    <List>
      {navList.map((link: INav) =>
        link.hasChildren ? (
          <LinkWrapper key={link.name}>
            <DivType>
              {isTablet && link.icon}
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
            {isTablet && link.icon}
            {link.name}
          </LinkType>
        ),
      )}
    </List>
  </NavBlock>
);

export default React.memo(Nav);
