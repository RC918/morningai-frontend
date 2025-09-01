'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Tabs } from '@/components/ui/Tabs';
import { Modal } from '@/components/ui/Modal';
import { useToast } from '@/components/ui/Toast';
import { Dropdown } from '@/components/ui/Dropdown';
import { Tooltip } from '@/components/ui/Tooltip';
import { Table } from '@/components/ui/Table';
import { Pagination } from '@/components/ui/Pagination';
import { Card, CardHeader, CardTitle, CardSubtitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard } from '@/components/ui/Skeleton';
import { Button } from '@/components/ui/Button';

export default function AdvancedComponentsPage() {
  const t = useTranslations('components');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { toast, ToastContainer } = useToast();

  // Sample data for table
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' }
  ];

  const tableColumns = [
    { key: 'name', title: t('table.name'), dataIndex: 'name', sortable: true },
    { key: 'email', title: t('table.email'), dataIndex: 'email', sortable: true },
    { key: 'role', title: t('table.role'), dataIndex: 'role' },
    { 
      key: 'status', 
      title: t('table.status'), 
      dataIndex: 'status',
      render: (value: string) => (
        <Badge variant={value === 'Active' ? 'success' : 'warning'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'actions',
      title: t('table.actions'),
      render: () => (
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Edit</Button>
          <Button size="sm" variant="outline">Delete</Button>
        </div>
      )
    }
  ];

  const tabItems = [
    {
      id: 'tab1',
      label: t('tabs.tab1'),
      content: <div className="p-4 bg-muted/50 rounded">{t('tabs.content1')}</div>
    },
    {
      id: 'tab2',
      label: t('tabs.tab2'),
      content: <div className="p-4 bg-muted/50 rounded">{t('tabs.content2')}</div>
    },
    {
      id: 'tab3',
      label: t('tabs.tab3'),
      content: <div className="p-4 bg-muted/50 rounded">{t('tabs.content3')}</div>
    }
  ];

  const dropdownItems = [
    { id: '1', label: t('dropdown.option1') },
    { id: '2', label: t('dropdown.option2') },
    { id: '3', label: t('dropdown.option3') }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-foreground">
          {t('advanced')} {t('title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          Advanced UI components with full accessibility and keyboard navigation support
        </p>
      </div>

      <div className="space-y-16">
        {/* Tabs Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('tabs.title')}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Default Tabs</h3>
              <Tabs items={tabItems} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Pills Variant</h3>
              <Tabs items={tabItems} variant="pills" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Underline Variant</h3>
              <Tabs items={tabItems} variant="underline" />
            </div>
          </div>
        </section>

        {/* Modal Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('modal.title')}</h2>
          <div className="space-y-4">
            <Button onClick={() => setIsModalOpen(true)}>
              {t('modal.openModal')}
            </Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title={t('modal.modalTitle')}
            >
              <p className="mb-4">{t('modal.modalContent')}</p>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsModalOpen(false)}>
                  {t('modal.closeModal')}
                </Button>
              </div>
            </Modal>
          </div>
        </section>

        {/* Toast Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('toast.title')}</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="success" 
              onClick={() => toast.success(t('toast.successMessage'))}
            >
              {t('toast.showSuccess')}
            </Button>
            <Button 
              variant="error" 
              onClick={() => toast.error(t('toast.errorMessage'))}
            >
              {t('toast.showError')}
            </Button>
            <Button 
              variant="warning" 
              onClick={() => toast.warning(t('toast.warningMessage'))}
            >
              {t('toast.showWarning')}
            </Button>
            <Button 
              onClick={() => toast.info(t('toast.infoMessage'))}
            >
              {t('toast.showInfo')}
            </Button>
          </div>
        </section>

        {/* Dropdown Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('dropdown.title')}</h2>
          <div className="flex gap-4">
            <Dropdown
              trigger={
                <Button variant="outline">
                  {t('dropdown.selectOption')}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              }
              items={dropdownItems}
              onSelect={(item) => toast.info(`Selected: ${item.label}`)}
            />
          </div>
        </section>

        {/* Tooltip Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('tooltip.title')}</h2>
          <div className="flex gap-4">
            <Tooltip content={t('tooltip.tooltipText')} side="top">
              <Button variant="outline">{t('tooltip.hoverMe')} (Top)</Button>
            </Tooltip>
            <Tooltip content={t('tooltip.tooltipText')} side="bottom">
              <Button variant="outline">{t('tooltip.hoverMe')} (Bottom)</Button>
            </Tooltip>
            <Tooltip content={t('tooltip.tooltipText')} side="left">
              <Button variant="outline">{t('tooltip.hoverMe')} (Left)</Button>
            </Tooltip>
            <Tooltip content={t('tooltip.tooltipText')} side="right">
              <Button variant="outline">{t('tooltip.hoverMe')} (Right)</Button>
            </Tooltip>
          </div>
        </section>

        {/* Table Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('table.title')}</h2>
          <div className="space-y-6">
            <Table
              columns={tableColumns}
              data={tableData}
              hoverable
              bordered
            />
            <Table
              columns={tableColumns}
              data={[]}
              emptyText={t('table.noData')}
            />
          </div>
        </section>

        {/* Pagination Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('pagination.title')}</h2>
          <div className="space-y-6">
            <Pagination
              current={currentPage}
              total={100}
              pageSize={10}
              onChange={setCurrentPage}
              showTotal
            />
            <Pagination
              current={currentPage}
              total={100}
              pageSize={10}
              onChange={setCurrentPage}
              showSizeChanger
              showQuickJumper
              showTotal
            />
          </div>
        </section>

        {/* Card Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('card.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('card.cardTitle')}</CardTitle>
                <CardSubtitle>{t('card.cardSubtitle')}</CardSubtitle>
              </CardHeader>
              <CardContent>
                <p>{t('card.cardContent')}</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">{t('card.action')}</Button>
              </CardFooter>
            </Card>

            <Card variant="outlined" hoverable>
              <CardHeader>
                <CardTitle>Outlined Card</CardTitle>
                <CardSubtitle>With hover effect</CardSubtitle>
              </CardHeader>
              <CardContent>
                <p>This card has an outlined variant with hover effects.</p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardSubtitle>With shadow</CardSubtitle>
              </CardHeader>
              <CardContent>
                <p>This card has an elevated appearance with shadow.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badge Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('badge.title')}</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>{t('badge.default')}</Badge>
            <Badge variant="primary">{t('badge.primary')}</Badge>
            <Badge variant="success">{t('badge.success')}</Badge>
            <Badge variant="warning">{t('badge.warning')}</Badge>
            <Badge variant="error">{t('badge.error')}</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Avatar Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('avatar.title')}</h2>
          <div className="flex items-center gap-4">
            <Avatar size="xs" fallback="XS" />
            <Avatar size="sm" fallback="SM" />
            <Avatar size="md" fallback="MD" />
            <Avatar size="lg" fallback="LG" />
            <Avatar size="xl" fallback="XL" />
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt={t('avatar.user')} />
            <Avatar shape="square" fallback="SQ" />
          </div>
        </section>

        {/* Skeleton Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t('skeleton.title')}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Text Skeleton</h3>
              <SkeletonText lines={3} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Avatar Skeleton</h3>
              <div className="flex gap-4">
                <SkeletonAvatar size="sm" />
                <SkeletonAvatar size="md" />
                <SkeletonAvatar size="lg" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Card Skeleton</h3>
              <div className="max-w-md">
                <SkeletonCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

