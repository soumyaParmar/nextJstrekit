'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    toast.success('Message sent successfully!');
    onClose();
  };

  return (
    <div className="p-4">
      <DialogTitle className="text-2xl font-bold mb-4">Contact Us</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            placeholder="Your Name"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
          )}
        </div>

        <div>
          <Input
            placeholder="Email"
            type="email"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
          )}
        </div>

        <div>
          <Textarea
            placeholder="Your Message"
            {...register('message')}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
          )}
        </div>

        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
}