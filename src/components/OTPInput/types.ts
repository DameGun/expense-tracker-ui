export interface IOTPInputProps {
  originalCode: string;
  isPinReady: boolean;
  setIsPinReady(isPinReady: boolean): void;
}
