import { useState } from 'react';
import { Resume } from '../types';

const useResume = () => {
  const [resume, setResume] = useState<Resume>({
    profile: {
      address: {
        city: '',
        state: '',
        zip: '',
      },
      name: {
        first_name: '',
        last_name: '',
      },
      phone: '',
    },
  });

  const setName = (firstName: string, lastName: string) => {
    const name = {
      first_name: firstName,
      last_name: lastName,
    };

    setResume((resume) => {
      return {
        ...resume,
        profile: {
          ...resume.profile,
          name,
        },
      };
    });
  };

  return {
    resume,
    setName,
  };
};

export default useResume;
