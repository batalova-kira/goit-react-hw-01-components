import styled from "styled-components";

export const ListFr = styled.ul`
display: flex;
flex-direction: column;
margin: 20px auto;
width: 450px;
gap: 15px;
`;

export const FriendItem = styled.li`
display:flex;
flex-direction: row;
text-decoration: none;
justify-content: start;
align-items: center;
gap: 15px;
padding: 15px;
border-radius: 3px;
    overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

export const Status = styled.p`
font-size: 30px;
color: ${({ $ishide }) => ($ishide ? 'green': 'red')};
`;

export const Avatar = styled.img`
    width: 60px;
`;

export const FriendName = styled.p`
font-size: 16px;
`;
