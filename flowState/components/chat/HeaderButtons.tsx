import { FolderKanban, Brain } from '@tamagui/lucide-icons';
import { Button } from 'tamagui';

export const ProjectViewButton = () => {
  return (
    <Button icon={FolderKanban}>
      View Projects
    </Button>
  );
};

export const TopicViewButton = () => {
  return (
    <Button icon={Brain}>
      View Projects
    </Button>
  );
};