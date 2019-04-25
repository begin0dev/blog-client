import * as React from 'react';
import * as classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import { FaRegComment, FaRegAddressCard, FaRegFileCode } from 'react-icons/fa';

import styles from './Navi.module.scss';

const cx = classNames.bind(styles);

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
  { name: 'Profile', url: '/profile', hasChildren: false, icon: <FaRegAddressCard className={cx('type-icon')} /> },
  { name: 'Log', url: '/log', hasChildren: false, icon: <FaRegComment className={cx('type-icon')} /> },
  {
    name: 'Development',
    hasChildren: true,
    url: '',
    icon: <FaRegFileCode className={cx('type-icon')} />,
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

const Navi: React.FunctionComponent<IProps> = ({ isTablet, visible }) => (
  <nav className={cx('navi', { active: isTablet && visible })}>
    <div className={cx('list')}>
      {navi.map((link: INavi) => {
        return link.hasChildren ? (
          <div className={cx('wrapper')} key={link.name}>
            <div className={cx('type')}>
              {isTablet && link.icon}
              {link.name}
              {!isTablet && <MdArrowDropDown className={cx('expand-icon')} />}
            </div>
            <div className={cx('dropdown')}>
              {link.children &&
                link.children.map((child: INaviChild) => (
                  <NavLink
                    className={cx('type', 'sub')}
                    to={child.url}
                    activeClassName={cx('current')}
                    key={child.name}
                  >
                    {child.name}
                  </NavLink>
                ))}
            </div>
          </div>
        ) : (
          <NavLink className={cx('type')} to={link.url} activeClassName={cx({ current: isTablet })} key={link.name}>
            {isTablet && link.icon}
            {link.name}
          </NavLink>
        );
      })}
    </div>
  </nav>
);

export default Navi;
