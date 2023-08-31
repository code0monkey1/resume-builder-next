import useForm from '@/src/ResumeBuilder/hooks/userForm';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('useForm', () => {
  it('is defined', () => {
    expect(useForm).toBeDefined();
  });
});
