import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 20px auto;

    width: 450px;
    border-radius: 5px;
    overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  background-color: #B0C4DE;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;

padding: 20px 0;
width: 450px;

margin: 0 auto;
background-color: #fff;

  height: auto;
`;

export const Photo = styled.img`
margin-bottom: 30px;
    width: 150px;
    border-radius: 50%;
    overflow: hidden;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

export const Name = styled.p`
margin-bottom: 8px;

font-size: 20px;
`;

export const Tag = styled.p`
margin-bottom: 8px;
font-size: 14px;
`;

export const Location = styled.p`
margin-bottom: 8px;
font-size: 16px;
`;

export const Stats = styled.ul`
display: flex;
flex-direction: row;
width: 100%;
`;

export const StatsLi = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 0;

width: 33.33%;
&:not(:last-child){
 border-right: 1px solid #778899;
}
border-top: 1px solid #778899;`

export const Label = styled.span`
color: #708090;
font-size: 16px;
`;

export const Quantity = styled.span`
color: #f5f5f5;
font-size: 16px;
`;