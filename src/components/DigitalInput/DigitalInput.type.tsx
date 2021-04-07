export interface DigitalInputStylingProps {
}

export interface DigitalInputProps {
  size: 'medium' | 'small';
  length: number;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
}
