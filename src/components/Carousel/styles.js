import styled from 'styled-components';


export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  width: 78%;
  line-height: 1;
  margin-bottom: 3px;
  margin-left:7px;
  display: inline-block;
  padding: 15px 15px 3px 0;
  background: red;
  line-height: 1;
  border-bottom: 1px solid #e30f00;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 15px 15px 3px 0;
    width: 80%;
    text-align: left;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 0;
  text-decoration: none;
  transition: opacity .3s;
  display: inline-block;
  width:250px;
  text-align: right;
  padding-right:3px;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  @media (max-width: 1246px) {
    display: block;
    margin-bottom: 10px;
    padding: 0;
    text-align: left;
    margin-left: 7px;


  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
