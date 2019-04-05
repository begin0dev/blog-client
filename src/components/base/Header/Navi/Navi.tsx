import * as React from 'react';
import * as classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa';

import styles from './Navi.module.scss';

const cx = classNames.bind(styles);

interface INaviChild {
  name: string;
  url: string;
  icon?: React.SVGAttributes<SVGAElement>;
}
interface INavi extends INaviChild {
  hasChildren: boolean;
  children?: INaviChild[];
}

const navi: INavi[] = [
  {
    name: 'Development',
    hasChildren: true,
    url: '',
    children: [
      { name: 'All', url: '/develop/all' },
      { name: 'React', url: '/develop/React', icon: <FaReact className={cx('icon')} /> },
      { name: 'Node', url: '/develop/node', icon: <FaNodeJs className={cx('icon')} /> },
      { name: 'Javascript', url: '/develop/javascript', icon: <FaJs className={cx('icon')} /> },
      { name: 'Etc', url: '/develop/etc' },
    ],
  },
  { name: 'Profile', url: '/profile', hasChildren: false },
];

interface IProps {
  isTablet: boolean;
  visible: boolean;
  toggleSidebar(bool: boolean): void;
}

const Navi: React.FunctionComponent<IProps> = ({ isTablet, visible, toggleSidebar }) => (
  <nav className={cx('navi', { active: isTablet && visible })}>
    <div className={cx('list')}>
      {navi.map((link: INavi) => {
        return link.hasChildren ? (
          <div
            className={cx('wrapper', { active: !isTablet && visible })}
            onMouseEnter={() => !isTablet && toggleSidebar(true)}
            onMouseLeave={() => !isTablet && toggleSidebar(false)}
            key={link.name}
          >
            <div className={cx('type')}>
              {link.name}
              {!isTablet && <MdArrowDropDown className={cx('expandIcon')} />}
            </div>
            <div className={cx('dropdown')}>
              {link.children &&
                link.children.map((child: INaviChild) => (
                  <NavLink className={cx('type')} to={child.url} activeClassName={cx('current')} key={child.name}>
                    {child.icon}
                    {child.name}
                  </NavLink>
                ))}
            </div>
          </div>
        ) : (
          <NavLink className={cx('type')} to={link.url} activeClassName={cx('current')} key={link.name}>
            {link.icon}
            {link.name}
          </NavLink>
        );
      })}
    </div>
  </nav>
);

export default Navi;
