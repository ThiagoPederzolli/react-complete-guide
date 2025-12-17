import styled  from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const HeaderImage = styled.img`
  object-fit: contain;
  margin-bottom: 2rem;
  width: 11rem;
  height: 11rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-align: center;
  text-transform: uppercase;
  color: #9a3412;
  font-family: 'Pacifico', cursive;
  margin: 0;

   @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const HeaderParagraph = styled.p`
  text-align: center;
  text-align: center;
  color: #a39191;
  margin: 0;
`;

