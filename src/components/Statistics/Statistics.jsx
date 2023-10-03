import { colors } from 'components/colors';
import { Box, Label, List, Percentage, Item, Title } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <Box>
      <Title>Upload stats</Title>
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item
            key={id}
            style={{
              backgroundColor: colors[(Math.random() * colors.length) ^ 0],
            }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Item>
        ))}
      </List>
    </Box>
  );
};
