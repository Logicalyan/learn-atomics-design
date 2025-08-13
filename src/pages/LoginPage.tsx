// components/pages/LoginPage/LoginPage.tsx
import { LoginForm } from '@/components/organism/LoginForm';
import React, { useState } from 'react';

export const LoginPage: React.FC = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data: { username: string; password: string }) => {
    setLoading(true);
    setError('');

    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (data.username !== 'admin' || data.password !== '123') {
      setError('Invalid username or password');
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <LoginForm
        onSubmit={handleLogin}
        isLoading={loading}
        errorMessage={error}
      />
    </div>
  );
};
