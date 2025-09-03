'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Checkbox from '@/components/ui/Checkbox';
import Radio, { RadioGroup } from '@/components/ui/Radio';
import Switch from '@/components/ui/Switch';
import { Modal } from '@/components/ui/Modal/Modal';
import { Toast } from '@/components/ui/Toast/Toast';
import Loading, { LoadingOverlay, LoadingButton } from '@/components/ui/Loading';
import { Tooltip } from '@/components/ui/Tooltip/Tooltip';

export default function ComponentsPage() {
  const t = useTranslations();
  
  // State for interactive components
  const [selectValue, setSelectValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sample data
  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3', disabled: true },
    { value: 'option4', label: 'Option 4' },
  ];

  const radioOptions = [
    { value: 'radio1', label: 'Radio Option 1' },
    { value: 'radio2', label: 'Radio Option 2' },
    { value: 'radio3', label: 'Radio Option 3', disabled: true },
  ];

  const ComponentSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );

  const ComponentDemo = ({ title, description, children }: { 
    title: string; 
    description?: string; 
    children: React.ReactNode;
  }) => (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UI Components Showcase
          </h1>
          <p className="text-xl text-gray-600">
            Complete collection of UI components with various states and sizes
          </p>
        </div>

        {/* Button Components */}
        <ComponentSection title="Buttons">
          <ComponentDemo title="Button Variants" description="Different button styles and states">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button disabled>Disabled</Button>
            </div>
          </ComponentDemo>

          <ComponentDemo title="Button Sizes">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </ComponentDemo>

          <ComponentDemo title="Loading Button">
            <div className="flex gap-4">
              <LoadingButton
                isLoading={loading}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 2000);
                }}
              >
                Click to Load
              </LoadingButton>
              <LoadingButton isLoading={true} loadingText="Processing...">
                Always Loading
              </LoadingButton>
            </div>
          </ComponentDemo>
        </ComponentSection>

        {/* Form Components */}
        <ComponentSection title="Form Components">
          <ComponentDemo title="Input Field" description="Text input with various states">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Default input" />
              <Input placeholder="With label" label="Email Address" />
              <Input placeholder="Error state" error helperText="This field is required" />
              <Input placeholder="Disabled" disabled />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Select Dropdown">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                options={selectOptions}
                value={selectValue}
                onChange={setSelectValue}
                placeholder="Choose an option"
              />
              <Select
                options={selectOptions}
                placeholder="Disabled select"
                disabled
              />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Textarea">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Textarea
                placeholder="Enter your message..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                label="Message"
                showCharCount
                maxLength={200}
              />
              <Textarea
                placeholder="Disabled textarea"
                disabled
                helperText="This field is disabled"
              />
            </div>
          </ComponentDemo>
        </ComponentSection>

        {/* Selection Components */}
        <ComponentSection title="Selection Components">
          <ComponentDemo title="Checkbox">
            <div className="space-y-4">
              <Checkbox
                label="Accept terms and conditions"
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
              />
              <Checkbox label="Disabled checkbox" disabled />
              <Checkbox label="Error state" error helperText="Please check this box" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Radio Buttons">
            <RadioGroup
              options={radioOptions}
              value={radioValue}
              onChange={setRadioValue}
              name="demo-radio"
            />
          </ComponentDemo>

          <ComponentDemo title="Switch">
            <div className="space-y-4">
              <Switch
                label="Enable notifications"
                checked={switchChecked}
                onChange={(e) => setSwitchChecked(e.target.checked)}
              />
              <Switch label="Disabled switch" disabled />
              <Switch label="Left label" labelPosition="left" />
            </div>
          </ComponentDemo>
        </ComponentSection>

        {/* Feedback Components */}
        <ComponentSection title="Feedback Components">
          <ComponentDemo title="Loading States">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Loading variant="spinner" size="md" />
                <p className="mt-2 text-sm text-gray-600">Spinner</p>
              </div>
              <div className="text-center">
                <Loading variant="dots" size="md" />
                <p className="mt-2 text-sm text-gray-600">Dots</p>
              </div>
              <div className="text-center">
                <Loading variant="pulse" size="md" />
                <p className="mt-2 text-sm text-gray-600">Pulse</p>
              </div>
              <div className="text-center">
                <Loading variant="bars" size="md" />
                <p className="mt-2 text-sm text-gray-600">Bars</p>
              </div>
            </div>
          </ComponentDemo>

          <ComponentDemo title="Loading Overlay">
            <LoadingOverlay isLoading={loading} loadingProps={{ text: "Loading content..." }}>
              <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Content that can be overlaid with loading</p>
              </div>
            </LoadingOverlay>
          </ComponentDemo>

          <ComponentDemo title="Modal">
            <div className="space-y-4">
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Example Modal"
              >
                <div className="space-y-4">
                  <p>This is an example modal with some content.</p>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setModalOpen(false)}>
                      Confirm
                    </Button>
                  </div>
                </div>
              </Modal>
            </div>
          </ComponentDemo>

          <ComponentDemo title="Toast Notifications">
            <div className="space-y-4">
              <Button onClick={() => setToastVisible(true)}>Show Toast</Button>
              {toastVisible && (
                <Toast
                  type="success"
                  title="Success!"
                  message="This is a success toast notification."
                  onClose={() => setToastVisible(false)}
                />
              )}
            </div>
          </ComponentDemo>

          <ComponentDemo title="Tooltip">
            <div className="flex gap-4">
              <Tooltip content="This is a tooltip">
                <Button>Hover for tooltip</Button>
              </Tooltip>
              <Tooltip content="Tooltip on the right" position="right">
                <Button>Right tooltip</Button>
              </Tooltip>
              <Tooltip content="Tooltip on the left" position="left">
                <Button>Left tooltip</Button>
              </Tooltip>
            </div>
          </ComponentDemo>
        </ComponentSection>

        {/* Size Variations */}
        <ComponentSection title="Size Variations">
          <ComponentDemo title="Component Sizes">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Buttons</h4>
                <div className="flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Loading</h4>
                <div className="flex items-center gap-6">
                  <Loading size="sm" />
                  <Loading size="md" />
                  <Loading size="lg" />
                  <Loading size="xl" />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Form Controls</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input placeholder="Small" size="sm" />
                  <Input placeholder="Medium" size="md" />
                  <Input placeholder="Large" size="lg" />
                </div>
              </div>
            </div>
          </ComponentDemo>
        </ComponentSection>
      </div>
    </div>
  );
}
