import { Card, YStack, Text, Button } from 'tamagui';

const TopicCard = ({ topic }) => {
  const relatedTopics = [
    { id: 5, name: 'Next.js' },
    { id: 6, name: 'CSS-in-JS' },
  ]; // Replace with actual related topics logic
  
  return (
    <Card>
      <YStack>
        <Text>{topic.name}</Text>
        <Text>Summary: Lorem ipsum dolor sit amet...</Text>

        <Text>Related Topics:</Text>
        <YStack>
          {relatedTopics.map((related) => (
            <Button key={related.id}>{related.name}</Button>
          ))}
        </YStack>
      </YStack>
    </Card>
  );
};

export default TopicCard;