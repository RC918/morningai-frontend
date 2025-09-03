'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

// Import all UI components
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Checkbox } from '@/components/ui/Checkbox';
import { RadioGroup } from '@/components/ui/Radio';
import { Switch } from '@/components/ui/Switch';
import { Loading } from '@/components/ui/Loading';
import { Modal } from '@/components/ui/Modal/Modal';
import { Tooltip } from '@/components/ui/Tooltip/Tooltip';

export default function ComponentsPage() {
  const t = useTranslations();
  
  // Component states
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxStates, setCheckboxStates] = useState({
    option1: false,
    option2: true,
    option3: false,
    indeterminate: false
  });
  const [radioValue, setRadioValue] = useState('option1');
  const [switchStates, setSwitchStates] = useState({
    notifications: false,
    darkMode: true,
    autoSave: false
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingVariant, setLoadingVariant] = useState<'spinner' | 'dots' | 'pulse' | 'bars'>('spinner');

  // Select options
  const selectOptions = [
    { value: 'option1', label: t('components.select.option1') },
    { value: 'option2', label: t('components.select.option2') },
    { value: 'option3', label: t('components.select.option3') },
    { value: 'disabled', label: t('components.select.disabled'), disabled: true },
  ];

  // Radio options
  const radioOptions = [
    { value: 'option1', label: t('components.radio.option1'), description: t('components.radio.description') },
    { value: 'option2', label: t('components.radio.option2') },
    { value: 'option3', label: t('components.radio.option3') },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{t('components.title')}</h1>
        <p className="text-xl text-text-muted mb-2">{t('components.subtitle')}</p>
        <p className="text-text-muted">{t('components.description')}</p>
      </div>

      <div className="grid gap-16">
        {/* Basic Components Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-primary-600">{t('components.basic')}</h2>
          
          <div className="grid gap-12">
            {/* Button Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.button.title')}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-text-muted">{t('components.button.variants')}</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="error">Error</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3 text-text-muted">{t('components.button.sizes')}</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3 text-text-muted">{t('components.button.states')}</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button>Normal</Button>
                    <Button loading>Loading</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.input.title')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input
                    label={t('components.input.name')}
                    placeholder={t('components.input.namePlaceholder')}
                    helperText={t('components.input.nameHelper')}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  
                  <Input
                    label={t('components.input.email')}
                    type="email"
                    placeholder={t('components.input.emailPlaceholder')}
                    variant="success"
                  />
                  
                  <Input
                    label="Error State"
                    placeholder="Enter something"
                    variant="error"
                    errorMessage="This field is required"
                  />
                </div>
                
                <div className="space-y-4">
                  <Input size="sm" placeholder={t('components.input.smallPlaceholder')} />
                  <Input size="md" placeholder={t('components.input.mediumPlaceholder')} />
                  <Input size="lg" placeholder={t('components.input.largePlaceholder')} />
                  <Input loading placeholder="Loading state" />
                  <Input disabled placeholder="Disabled state" />
                </div>
              </div>
            </div>

            {/* Select Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.select.title')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label={t('components.select.label')}
                  placeholder={t('components.select.placeholder')}
                  options={selectOptions}
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  helperText={t('components.select.helper')}
                />
                
                <Select
                  label="Error State"
                  placeholder="Choose an option"
                  options={selectOptions}
                  variant="error"
                  errorMessage="Please select an option"
                />
              </div>
            </div>

            {/* Textarea Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.textarea.title')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Textarea
                  label={t('components.textarea.label')}
                  placeholder={t('components.textarea.placeholder')}
                  helperText={t('components.textarea.helper')}
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  showCharCount
                />
                
                <Textarea
                  label="With Max Length"
                  placeholder="Enter up to 100 characters"
                  maxLength={100}
                  showCharCount
                />
              </div>
            </div>

            {/* Checkbox Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.checkbox.title')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Checkbox
                    label={t('components.checkbox.option1')}
                    description={t('components.checkbox.description')}
                    checked={checkboxStates.option1}
                    onChange={(e) => setCheckboxStates(prev => ({ ...prev, option1: e.target.checked }))}
                  />
                  <Checkbox
                    label={t('components.checkbox.option2')}
                    checked={checkboxStates.option2}
                    onChange={(e) => setCheckboxStates(prev => ({ ...prev, option2: e.target.checked }))}
                  />
                  <Checkbox
                    label={t('components.checkbox.option3')}
                    checked={checkboxStates.option3}
                    onChange={(e) => setCheckboxStates(prev => ({ ...prev, option3: e.target.checked }))}
                  />
                </div>
                
                <div className="space-y-3">
                  <Checkbox
                    label={t('components.checkbox.indeterminate')}
                    indeterminate
                  />
                  <Checkbox label="Success variant" variant="success" checked />
                  <Checkbox label="Warning variant" variant="warning" checked />
                  <Checkbox label="Error variant" variant="error" checked />
                  <Checkbox label="Disabled" disabled />
                </div>
              </div>
            </div>

            {/* Radio Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.radio.title')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <RadioGroup
                  options={radioOptions}
                  value={radioValue}
                  onChange={setRadioValue}
                  name="radio-demo"
                />
                
                <div className="space-y-3">
                  <RadioGroup
                    options={[
                      { value: 'success', label: 'Success variant' },
                      { value: 'warning', label: 'Warning variant' },
                      { value: 'error', label: 'Error variant' }
                    ]}
                    value="success"
                    onChange={() => {}}
                    name="radio-variants"
                    variant="success"
                  />
                </div>
              </div>
            </div>

            {/* Switch Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.switch.title')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Switch
                    label={t('components.switch.option1')}
                    description={t('components.switch.description')}
                    checked={switchStates.notifications}
                    onChange={(e) => setSwitchStates(prev => ({ ...prev, notifications: e.target.checked }))}
                  />
                  <Switch
                    label={t('components.switch.option2')}
                    checked={switchStates.darkMode}
                    onChange={(e) => setSwitchStates(prev => ({ ...prev, darkMode: e.target.checked }))}
                  />
                  <Switch
                    label={t('components.switch.option3')}
                    checked={switchStates.autoSave}
                    onChange={(e) => setSwitchStates(prev => ({ ...prev, autoSave: e.target.checked }))}
                  />
                </div>
                
                <div className="space-y-4">
                  <Switch label="Success variant" variant="success" checked />
                  <Switch label="Warning variant" variant="warning" checked />
                  <Switch label="Error variant" variant="error" checked />
                  <Switch label="Disabled" disabled />
                </div>
              </div>
            </div>

            {/* Loading Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.loading.title')}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-text-muted">Variants</h4>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setLoadingVariant('spinner')}
                      className={`px-3 py-1 rounded text-sm ${loadingVariant === 'spinner' ? 'bg-primary-500 text-white' : 'bg-surface text-text-primary'}`}
                    >
                      {t('components.loading.spinner')}
                    </button>
                    <button
                      onClick={() => setLoadingVariant('dots')}
                      className={`px-3 py-1 rounded text-sm ${loadingVariant === 'dots' ? 'bg-primary-500 text-white' : 'bg-surface text-text-primary'}`}
                    >
                      {t('components.loading.dots')}
                    </button>
                    <button
                      onClick={() => setLoadingVariant('pulse')}
                      className={`px-3 py-1 rounded text-sm ${loadingVariant === 'pulse' ? 'bg-primary-500 text-white' : 'bg-surface text-text-primary'}`}
                    >
                      {t('components.loading.pulse')}
                    </button>
                    <button
                      onClick={() => setLoadingVariant('bars')}
                      className={`px-3 py-1 rounded text-sm ${loadingVariant === 'bars' ? 'bg-primary-500 text-white' : 'bg-surface text-text-primary'}`}
                    >
                      {t('components.loading.bars')}
                    </button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 border rounded-lg">
                    <Loading variant={loadingVariant} size="sm" />
                    <p className="text-xs text-text-muted mt-2">Small</p>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Loading variant={loadingVariant} size="md" />
                    <p className="text-xs text-text-muted mt-2">Medium</p>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Loading variant={loadingVariant} size="lg" />
                    <p className="text-xs text-text-muted mt-2">Large</p>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Loading variant={loadingVariant} size="xl" text={t('components.loading.text')} />
                    <p className="text-xs text-text-muted mt-2">Extra Large</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Components Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-primary-600">{t('components.advanced')}</h2>
          
          <div className="grid gap-12">
            {/* Modal Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.modal.title')}</h3>
              
              <div>
                <Button onClick={() => setIsModalOpen(true)}>
                  {t('components.modal.openModal')}
                </Button>
                
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title={t('components.modal.modalTitle')}
                >
                  <p className="text-text-muted">
                    {t('components.modal.modalContent')}
                  </p>
                  <div className="flex justify-end gap-3 mt-6">
                    <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                      {t('common.cancel')}
                    </Button>
                    <Button onClick={() => setIsModalOpen(false)}>
                      {t('common.confirm')}
                    </Button>
                  </div>
                </Modal>
              </div>
            </div>

            {/* Tooltip Component */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('components.tooltip.title')}</h3>
              
              <div className="flex flex-wrap gap-4">
                <Tooltip content={t('components.tooltip.tooltipText')}>
                  <Button variant="outline">
                    {t('components.tooltip.hoverMe')}
                  </Button>
                </Tooltip>
                
                <Tooltip content="Top tooltip" side="top">
                  <Button variant="outline">Top</Button>
                </Tooltip>
                
                <Tooltip content="Right tooltip" side="right">
                  <Button variant="outline">Right</Button>
                </Tooltip>
                
                <Tooltip content="Bottom tooltip" side="bottom">
                  <Button variant="outline">Bottom</Button>
                </Tooltip>
                
                <Tooltip content="Left tooltip" side="left">
                  <Button variant="outline">Left</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>

        {/* Component Statistics */}
        <section className="bg-surface rounded-lg p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">10+</div>
              <div className="text-sm text-text-muted">{t('stats.coreComponents')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-text-muted">{t('stats.componentStates')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">3</div>
              <div className="text-sm text-text-muted">{t('stats.responsiveBreakpoints')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <div className="text-sm text-text-muted">{t('stats.typescript')}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

