import { ComponentType, ReactInstance } from 'react';

declare module 'react-to-print' {
  export interface UseReactToPrintOptions {
    content: () => ReactInstance | null;
    copyStyles?: boolean;
    documentTitle?: string;
    onAfterPrint?: () => void;
    onBeforeGetContent?: () => Promise<void>;
    onBeforePrint?: () => void;
    onPrintError?: (errorLocation: string, error: Error) => void;
    pageStyle?: string;
    removeAfterPrint?: boolean;
    suppressErrors?: boolean;
  }

  export const useReactToPrint: (options: UseReactToPrintOptions) => () => void;
}