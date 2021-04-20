export interface FileUploaderStylingProps {
  fileuploaderInput?: string;
}

export interface FileUploaderProps {
  doneCallback?: () => void;
  type: 'pdf' | 'doc' | 'image' | 'video' | 'audio';
  value: number;
}
