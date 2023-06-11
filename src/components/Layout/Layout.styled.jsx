import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsBadge8KFill } from 'react-icons/bs';

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  margin-right: 10px;
  line-height: 1.14;
  text-decoration: none;
  letter-spacing: 0.02em;
  color: ffffff;

  &.active {
    color: orange;
  }
`;

export const Svg = styled(BsBadge8KFill)`
  width: 35px;
  height: 35px;
`;
export const Main = styled.main`
  text-align: center;
`;
