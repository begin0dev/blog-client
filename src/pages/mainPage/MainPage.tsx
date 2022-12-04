import { MainWrapper, ProfileWrapper } from './main.styles';
import { Button } from 'components/common';
import Me from 'assets/images/me.png';

function MainPage() {
  return (
    <MainWrapper>
      <ProfileWrapper>
        <div className="desc">
          <p>안녕하세요!</p>
          <p>
            <span className="name">비기너</span> 입니다.
          </p>
          <p>프론트, 서버 개발을 즐기고 있습니다.</p>
          <Button shape="link">Read More</Button>
        </div>
        <div className="image">
          <img src={Me} alt="beginner" />
        </div>
      </ProfileWrapper>
    </MainWrapper>
  );
}

export default MainPage;
