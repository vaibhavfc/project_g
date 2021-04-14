export interface ProgressTrackerStylingProps {
}

export interface ProgressTrackerProps {
  steps: {
    title: string,
    variant: 'first' | 'middle' | 'last',
    status: 'current' | 'success' | 'pending' | 'onhold' | 'unvisited',
    chip?: boolean;
  }[];
  currentStep: number;
}

export interface StepItemProps {
  stepTitle: string;
  stepVariant: 'first' | 'middle' | 'last';
  stepStatus: 'current' | 'success' | 'pending' | 'onhold' | 'unvisited';
  stepNumber?: number;
  isChip?: boolean;
}

export interface IconProps {
  position: 'first' | 'middle' | 'last';
  stepNumber?: number;
}
