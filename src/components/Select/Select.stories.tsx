import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const MOCK_CURRENCIES = [
  { id: 1, label: 'USD', value: 'USD' },
  { id: 2, label: 'EUR', value: 'EUR' },
  { id: 3, label: 'JPY', value: 'JPY' },
  { id: 4, label: 'GBP', value: 'GBP' },
  { id: 5, label: 'AUD', value: 'AUD' },
  { id: 6, label: 'CAD', value: 'CAD' },
  { id: 7, label: 'CHF', value: 'CHF' },
  { id: 8, label: 'CNY', value: 'CNY' },
  { id: 9, label: 'SEK', value: 'SEK' },
  { id: 10, label: 'NZD', value: 'NZD' },
  { id: 11, label: 'MXN', value: 'MXN' },
  { id: 12, label: 'SGD', value: 'SGD' },
  { id: 13, label: 'HKD', value: 'HKD' },
  { id: 14, label: 'NOK', value: 'NOK' },
  { id: 15, label: 'KRW', value: 'KRW' },
  { id: 16, label: 'TRY', value: 'TRY' },
  { id: 17, label: 'INR', value: 'INR' },
  { id: 18, label: 'BRL', value: 'BRL' },
  { id: 19, label: 'ZAR', value: 'ZAR' },
  { id: 20, label: 'DKK', value: 'DKK' },
  { id: 21, label: 'PLN', value: 'PLN' },
  { id: 22, label: 'TWD', value: 'TWD' },
  { id: 23, label: 'THB', value: 'THB' },
  { id: 24, label: 'MYR', value: 'MYR' },
  { id: 25, label: 'HUF', value: 'HUF' },
  { id: 26, label: 'CZK', value: 'CZK' },
  { id: 27, label: 'ILS', value: 'ILS' },
  { id: 28, label: 'CLP', value: 'CLP' },
  { id: 29, label: 'PHP', value: 'PHP' },
  { id: 30, label: 'AED', value: 'AED' },
  { id: 31, label: 'COP', value: 'COP' },
  { id: 32, label: 'SAR', value: 'SAR' },
  { id: 33, label: 'RON', value: 'RON' },
  { id: 34, label: 'IDR', value: 'IDR' },
  { id: 35, label: 'EGP', value: 'EGP' },
  { id: 36, label: 'PKR', value: 'PKR' },
  { id: 37, label: 'IQD', value: 'IQD' },
  { id: 38, label: 'VND', value: 'VND' },
];

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    options: MOCK_CURRENCIES,
    onChange: console.log,
    placeholder: 'Select',
    selectedValue: 1,
    label: 'Single',
    mode: 'single',
  },
};

export const Multiple: Story = {
  args: {
    options: MOCK_CURRENCIES,
    onChange: console.log,
    placeholder: 'Select',
    selectedValue: [],
    label: 'Multiple',
    mode: 'multiple',
  },
};
