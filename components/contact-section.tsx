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
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">{t('contact.info.title')}</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`h-12 w-12 rounded-lg ${info.color} flex flex-shrink-0 items-center justify-center`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{info.title}</div>
                    <div className="text-gray-600">{info.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        {t('contact.name')}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        {t('contact.email')}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      {t('contact.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 md:w-auto"
                  >
                    <Send className="mr-2 h-4 w-4" />
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
