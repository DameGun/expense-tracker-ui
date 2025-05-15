export interface IOTPInputProps {
  isPinError: boolean;
  setIsPinReady(isPinReady: boolean): void;
  disabled?: boolean;
  setPin(pin: string): void;
}
