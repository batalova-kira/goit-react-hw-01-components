import {
  Avatar,
  FriendItem,
  FriendName,
  ListFr,
  Status,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListFr>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <Status $ishide={+isOnline}>&#9679;</Status>
          <Avatar src={avatar} />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </ListFr>
  );
};
