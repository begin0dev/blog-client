import * as React from 'react';

import { MdArrowDropDown } from 'react-icons/md';
import { FaRegComment, FaRegAddressCard, FaRegFileCode } from 'react-icons/fa';
import { NaviBlock, List, LinkWrapper, DropDown, DivType, LinkType, ChildLinkType } from './Navi.styles';

interface INaviChild {
  name: string;
  url: string;
}
interface INavi extends INaviChild {
  icon: React.SVGAttributes<SVGAElement>;
  hasChildren: boolean;
  children?: INaviChild[];
}

const navi: INavi[] = [
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

const Navi: React.FunctionComponent<IProps> = React.memo(({ isTablet, visible }) => (
  <NaviBlock active={isTablet && visible}>
    <List>
      {navi.map((link: INavi) =>
        link.hasChildren ? (
          <LinkWrapper key={link.name}>
            <DivType>
              {isTablet && link.icon}
              {link.name}
              <MdArrowDropDown className="expand-icon" />
            </DivType>
            <DropDown>
              {link.children &&
                link.children.map((child: INaviChild) => (
                  <ChildLinkType to={child.url} activeClassName={'current'} key={child.name}>
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
  </NaviBlock>
));

export default Navi;
