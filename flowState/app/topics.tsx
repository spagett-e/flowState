import { useState } from 'react';
import { YStack, XStack, ScrollView, Button, Popover } from 'tamagui';
import TopicCard from '../components/TopicCard';

const topics = [
  { id: 1, name: 'React' },
  { id: 2, name: 'Tamagui' },
  { id: 3, name: 'AI Models' },
  { id: 4, name: 'Game Development' },
];

const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  
  return (
    <YStack flex={1}>
      <ScrollView>
        <XStack flexWrap="wrap">
          {topics.map((topic) => (
            <Button key={topic.id} onPress={() => setSelectedTopic(topic)}>
              {topic.name}
            </Button>
          ))}
        </XStack>
      </ScrollView>

      {selectedTopic && (
        <Popover open onOpenChange={() => setSelectedTopic(null)}>
          <TopicCard topic={selectedTopic} />
        </Popover>
      )}
    </YStack>
  );
};

export default Topics;