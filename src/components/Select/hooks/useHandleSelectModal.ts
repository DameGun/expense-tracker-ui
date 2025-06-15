import { useCallback, useState } from 'react';

export const useHandleSelectModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = useCallback(() => setIsModalVisible((prev) => !prev), []);

  return { isModalVisible, handleModal };
};
