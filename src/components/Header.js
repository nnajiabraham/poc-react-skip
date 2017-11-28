import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  width: 10rem;
`;

const Header = () => {
  return (
    <div>
      <Logo src="https://www.skipthedishes.com/static/skip_refresh/img/skip_logo_knockout.svg" />
    </div>
  );
};

export default Header;
