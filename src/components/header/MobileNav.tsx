import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import { RootState } from '../../stores';

function MobileNav() {
  const isShowSidebar = useSelector((state: RootState) => state.base.isShowSidebar);

  return <SidebarWrapper></SidebarWrapper>;
}

export default MobileNav;

const SidebarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
