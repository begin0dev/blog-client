import * as React from 'react';
import * as classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';

import styles from './Navi.module.scss';

const cx = classNames.bind(styles);

interface INaviChild {
  name: string;
  url: string;
}
interface INavi extends INaviChild {
  hasChildren: boolean;
  children?: INaviChild[];
}

const navi: INavi[] = [
  { name: 'Profile', url: '/profile', hasChildren: false },
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

const Navi: React.FunctionComponent<IProps> = ({ isTablet, visible }) => (
  <nav className={cx('navi', { active: isTablet && visible })}>
    <div className={cx('list')}>
      {navi.map((link: INavi) => {
        return link.hasChildren ? (
          <div className={cx('wrapper')} key={link.name}>
            <div className={cx('type')}>
              {link.name}
              <MdArrowDropDown className={cx('expand-icon')} />
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
            {link.name}
          </NavLink>
        );
      })}
    </div>
  </nav>
);

export default Navi;
