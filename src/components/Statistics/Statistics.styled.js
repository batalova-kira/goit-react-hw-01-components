import styled from "styled-components";

export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 20px auto;

width: 450px;
border-radius: 7px;
overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
background-color: #fff;
`;

export const Title = styled.p`
padding: 15px 0;
font-size: 16px;
text-transform: uppercase;
color: #708090;
`;

export const List = styled.ul`
display: flex;
flex-direction: row;
width: 100%;
background-color: #B0C4DE;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 0;
width: 20%;
&:not(:last-child){
 border-right: 1px solid #778899;
}
border-top: 1px solid #778899;
`;

export const Label = styled.p`
font-size: 16px;
color: #f5f5f5;
`;

export const Percentage = styled.p`
font-size: 16px;
color: #f5f5f5;
`;
