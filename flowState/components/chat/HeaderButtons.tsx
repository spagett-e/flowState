import { FolderKanban, Brain } from '@tamagui/lucide-icons';
import { Button } from 'tamagui';

const ProjectViewButton = () => {
  return (
    <Button icon={FolderKanban}>
      View Projects
    </Button>
  );
};

const TopicViewButton = () => {
  return (
    <Button icon={Brain}>
      View Projects
    </Button>
  );
};