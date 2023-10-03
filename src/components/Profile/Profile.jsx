import {
  Container,
  Description,
  Label,
  Location,
  Name,
  Photo,
  Quantity,
  Stats,
  StatsLi,
  Tag,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <Description>
        <Photo src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsLi>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsLi>
      </Stats>
    </Container>
  );
};
