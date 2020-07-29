import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 167px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: all 0.4s ease-in;
  &:hover,
  &:focus {
    opacity: 0.6;
    transform: scale(1.05);
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
