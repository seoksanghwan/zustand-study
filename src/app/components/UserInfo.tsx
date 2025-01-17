'use client';

import { useEffect } from 'react';
import { useUserStore } from '../store/useUserStore';

export default function UserInfo() {
  const { fetch, user } = useUserStore();
  useEffect(() => {
    fetch(1);
  }, [fetch]);
  
  return <div>{user.name}</div>;
}
