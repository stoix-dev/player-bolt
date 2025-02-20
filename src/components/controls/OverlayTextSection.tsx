import React from 'react';
import { MessageSquare } from 'lucide-react';
import TextInput from './TextInput';

interface OverlayTextSectionProps {
  topText: string;
  bottomText: string;
  onTopTextChange: (text: string) => void;
  onBottomTextChange: (text: string) => void;
}

const OverlayTextSection: React.FC<OverlayTextSectionProps> = ({
  topText,
  bottomText,
  onTopTextChange,
  onBottomTextChange
}) => {
  return (
    <div className="space-y-4 border-t pt-6 mt-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-purple-50 p-2 rounded-lg">
          <MessageSquare size={18} className="text-purple-600" />
        </div>
        <span className="font-medium text-gray-800">Overlay Text</span>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <TextInput
          label="Top Text"
          value={topText}
          onChange={onTopTextChange}
          placeholder="Enter text shown at the top"
        />
        
        <TextInput
          label="Bottom Text"
          value={bottomText}
          onChange={onBottomTextChange}
          placeholder="Enter text shown at the bottom"
        />
      </div>
    </div>
  );
};

export default OverlayTextSection;