'use client'
import Link from 'next/link';
import React from 'react';
import { Button, Input } from "@nextui-org/react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { LoginSchema } from '@/validation/login';
import { zodResolver } from '@hookform/resolvers/zod'

type LoginForm = {
  email: string
  password: string
}

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(LoginSchema)
  })
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log({ data });

  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email address"
            type="email"
            autoComplete='off'
            disabled={isSubmitting}
            {...register('email')}
            placeholder="Enter your email"
          />
          {errors.email?.message && <span>{errors.email?.message}</span>}
          <Input
            label="Password"
            type="password"
            {...register('password')}
            placeholder="Enter your password"
            disabled={isSubmitting}
            autoComplete='off'
          />
          {errors.password?.message && <span>{errors.password?.message}</span>}
          <div>
            <Button
              color='primary'
              type="submit" className="w-full"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </div>
  );
}