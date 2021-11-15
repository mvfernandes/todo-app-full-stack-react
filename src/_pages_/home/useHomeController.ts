import { api } from '@/services/request';
import { BaseResponseType } from '@/types/request';
import { FormEvent, useState } from 'react';

export default function useHomeController() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response: BaseResponseType = await api.post('api/login', { key });
    if (!response.success) {
      setMessage(response.message);
      setTimeout(() => {
        setMessage('');
      }, 2500);
      return;
    }
    localStorage.setItem('myKey', key);
    window.location.replace('/app');
  }
  return { submitForm, message, key, setKey };
}
