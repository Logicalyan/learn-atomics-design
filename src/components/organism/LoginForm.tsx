// components/organisms/LoginForm/LoginForm.tsx
import React, { useState } from 'react';
import { FormField } from '../molecules/FormField';
import { Lock, User } from 'lucide-react';
import Button from '../atoms/Button';


export interface LoginFormProps {
  onSubmit: (data: { username: string; password: string }) => void;
  isLoading?: boolean;
  errorMessage?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false,
  errorMessage,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
      <FormField
        id="username"
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        icon={<User />}
        iconPosition="left"
        error={!username && errorMessage ? 'Username is required' : undefined}
      />

      <FormField
        id="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<Lock />}
        iconPosition="left"
        error={!password && errorMessage ? 'Password is required' : undefined}
      />

      {errorMessage && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}

      <Button
        label={isLoading ? 'Logging in...' : 'Login'}
        type="submit"
        variant="primary"
        shape="rounded"
      />
    </form>
  );
};
