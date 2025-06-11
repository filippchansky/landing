'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/lib/language';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: t('contact.info.email'),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: t('contact.info.phone'),
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: t('contact.info.address'),
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section id='contact' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            {t('contact.title')}
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>{t('contact.subtitle')}</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Contact Info */}
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold text-gray-900 mb-6'>{t('contact.info.title')}</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className='flex items-start space-x-4'>
                  <div
                    className={`w-12 h-12 rounded-lg ${info.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className='w-6 h-6' />
                  </div>
                  <div>
                    <div className='font-medium text-gray-900'>{info.title}</div>
                    <div className='text-gray-600'>{info.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <Card>
              <CardContent className='p-8'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        {t('contact.name')}
                      </label>
                      <Input
                        id='name'
                        name='name'
                        type='text'
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        {t('contact.email')}
                      </label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      {t('contact.message')}
                    </label>
                    <Textarea
                      id='message'
                      name='message'
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className='w-full'
                    />
                  </div>
                  <Button
                    type='submit'
                    size='lg'
                    className='bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto'
                  >
                    <Send className='w-4 h-4 mr-2' />
                    {t('contact.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
