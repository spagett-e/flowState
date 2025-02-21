import { useState } from 'react';
import { YStack, XStack, Input, ScrollView, Button } from 'tamagui';
import { TopicDetails } from '../components/topics/TopicDetails';

const topics = [
  { id: 1, name: 'Bitcoin Security', summary: 'How Bitcoin transactions work...', keyPoints: ['Encryption', 'Keys', 'Wallets'], related: [2, 3] },
  { id: 2, name: 'Ethereum Smart Contracts', summary: 'Intro to Ethereum contracts...', keyPoints: ['Solidity', 'Gas Fees', 'DApps'], related: [1, 3] },
  { id: 3, name: 'Blockchain Basics', summary: 'Fundamentals of blockchain...', keyPoints: ['Decentralization', 'Consensus', 'Mining'], related: [1, 2] },
];

export const TopicsView = () => {
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const filteredTopics = topics.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <YStack flex={1}>
      {/* Search Bar */}
      <Input
        placeholder="Search topics..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Topics List */}
      <ScrollView>
        <XStack flexWrap="wrap" gap="$2">
          {filteredTopics.map((topic) => (
            <Button key={topic.id} onPress={() => setSelectedTopic(topic)} size="$2" variant="outlined">
              {topic.name}
            </Button>
          ))}
        </XStack>
      </ScrollView>

      {/* Popup for Selected Topic */}
      {selectedTopic && (
        <TopicDetails topic={selectedTopic} onClose={() => setSelectedTopic(null)} />
      )}
    </YStack>
  );
};