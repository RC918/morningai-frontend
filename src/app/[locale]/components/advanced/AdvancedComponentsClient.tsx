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

export default function AdvancedComponentsClient() {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-foreground">
          Advanced Components
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive showcase of advanced interactive components
        </p>
      </div>

      {/* Tabs Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('tabs.title')}</h2>
        <Tabs 
          defaultValue="tab1"
          items={[
            {
              id: 'tab1',
              label: 'Tab 1',
              content: <p>This is the content for Tab 1. It demonstrates the tab switching functionality.</p>
            },
            {
              id: 'tab2',
              label: 'Tab 2',
              content: <p>This is the content for Tab 2. You can switch between tabs using keyboard navigation.</p>
            },
            {
              id: 'tab3',
              label: 'Tab 3',
              content: <p>This is the content for Tab 3. All tabs support ARIA labels for accessibility.</p>
            }
          ]}
        />
      </section>

      {/* Modal Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('modal.title')}</h2>
        <div className="space-y-4">
          <Button onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
          <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title="Example Modal"
          >
            <p>This is an example modal with focus trap and ESC key support.</p>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </Modal>
        </div>
      </section>

      {/* Toast Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('toast.title')}</h2>
        <div className="space-x-4">
          <Button onClick={() => toast.success('Success message!')}>
            Success Toast
          </Button>
          <Button onClick={() => toast.error('Error message!')}>
            Error Toast
          </Button>
          <Button onClick={() => toast.warning('Warning message!')}>
            Warning Toast
          </Button>
          <Button onClick={() => toast.info('Info message!')}>
            Info Toast
          </Button>
        </div>
        <ToastContainer />
      </section>

      {/* Table Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('table.title')}</h2>
        <Table 
          columns={tableColumns}
          data={tableData}
          onSort={(key, direction) => console.log('Sort:', key, direction)}
        />
      </section>

      {/* Pagination Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('pagination.title')}</h2>
        <Pagination
          current={currentPage}
          total={100}
          pageSize={10}
          onChange={(page) => setCurrentPage(page)}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        />
      </section>

      {/* Card Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('card.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardSubtitle>Card Subtitle</CardSubtitle>
            </CardHeader>
            <CardContent>
              <p>This is the card content area where you can put any information.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Cards are flexible containers for displaying content.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badge Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('badge.title')}</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </section>

      {/* Avatar Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('avatar.title')}</h2>
        <div className="flex items-center gap-4">
          <Avatar size="sm" src="/api/placeholder/32/32" alt="Small Avatar" />
          <Avatar size="md" src="/api/placeholder/40/40" alt="Medium Avatar" />
          <Avatar size="lg" src="/api/placeholder/48/48" alt="Large Avatar" />
          <Avatar size="xl">JD</Avatar>
        </div>
      </section>

      {/* Skeleton Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('skeleton.title')}</h2>
        <div className="space-y-4">
          <SkeletonCard />
          <div className="flex items-center gap-4">
            <SkeletonAvatar />
            <div className="space-y-2">
              <SkeletonText width="200px" />
              <SkeletonText width="150px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

