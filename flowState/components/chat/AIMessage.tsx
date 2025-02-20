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
    <XStack justifyContent="flex-start" padding="$2">
      <YStack backgroundColor="$gray10" padding="$3" borderRadius="$4" maxWidth="80%">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Markdown style={{ color: 'white' }}>{text}</Markdown>
            {onRegenerate && (
              <Button onPress={onRegenerate} size="$2" marginTop="$2" backgroundColor="$blue10">
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