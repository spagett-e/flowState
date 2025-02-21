import React from 'react';
import { XStack, YStack, Text, Spinner, Button } from 'tamagui';
import Markdown from 'react-native-markdown-display';

interface AIMessageProps {
  text: string;
  isLoading?: boolean;
  onRegenerate?: () => void;
}

const AIMessage = ({ text, isLoading, onRegenerate }: AIMessageProps) => {
  return (
    <XStack>
      <YStack>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Markdown style={{ color: 'white' }}>{text}</Markdown>
            {onRegenerate && (
              <Button onPress={onRegenerate} size="$2">
                Regenerate
              </Button>
            )}
          </>
        )}
      </YStack>
    </XStack>
  );
};

export default AIMessage;