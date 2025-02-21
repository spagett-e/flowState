import { Sheet, YStack, XStack, Button, Text } from 'tamagui';

export const TopicDetails = ({ topic, onClose }) => {
  return (
    <Sheet modal open onOpenChange={onClose}>
      <Sheet.Frame>
        <Sheet.Handle />

        {/* Topic Title */}
        <Text>{topic.name}</Text>

        {/* Summary */}
        <Text>{topic.summary}</Text>

        {/* Key Points */}
        <YStack>
          {topic.keyPoints.map((point, index) => (
            <Text key={index}>• {point}</Text>
          ))}
        </YStack>

        {/* Related Topics */}
        <YStack>
          <Text>Related Topics</Text>
          <XStack>
            {topic.related.map((relatedId) => (
              <Button key={relatedId}>
                {topic.find(t => t.id === relatedId)?.name}
              </Button>
            ))}
          </XStack>
        </YStack>

        {/* Close Button */}
        <Button onPress={onClose}>
          Close
        </Button>
      </Sheet.Frame>
    </Sheet>
  );
};