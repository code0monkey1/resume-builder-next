import { useState } from 'react';
import { Resume } from '../types';

const useResume = () => {
  const [resume, setResume] = useState<Resume>({
    profile: {
      address,
      name,
    },
  });

  return {
    resume,
    setResume,
  };
};

export default useResume;
