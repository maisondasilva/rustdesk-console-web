import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Tag } from 'antd';
import React, { useRef } from 'react';
import { getConnectionAudits } from '@/services/rustdesk-console/audit';

const ConnectionAudit: React.FC = () => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.ConnectionAuditItem>[] = [
    {
      title: <FormattedMessage id="pages.audits.connId" defaultMessage="Connection ID" />,
      dataIndex: 'conn_id',
      width: 180,
      ellipsis: true,
      copyable: true,
    },
    {
      title: <FormattedMessage id="pages.audits.from" defaultMessage="From" />,
      dataIndex: 'from',
      width: 150,
      ellipsis: true,
    },
    {
      title: <FormattedMessage id="pages.audits.fromName" defaultMessage="From Name" />,
      dataIndex: 'from_name',
      width: 150,
      ellipsis: true,
    },
    {
      title: <FormattedMessage id="pages.audits.to" defaultMessage="To" />,
      dataIndex: 'to',
      width: 150,
      ellipsis: true,
    },
    {
      title: <FormattedMessage id="pages.audits.toName" defaultMessage="To Name" />,
      dataIndex: 'to_name',
      width: 150,
      ellipsis: true,
    },
    {
      title: <FormattedMessage id="pages.audits.action" defaultMessage="Action" />,
      dataIndex: 'action',
      width: 100,
      render: (_, record) => {
        const action = record.action || '';
        if (action === 'connect' || action === 'CONNECT') {
          return <Tag color="green">{action}</Tag>;
        }
        if (action === 'disconnect' || action === 'DISCONNECT') {
          return <Tag color="red">{action}</Tag>;
        }
        return <Tag>{action}</Tag>;
      },
    },
    {
      title: <FormattedMessage id="pages.audits.time" defaultMessage="Time" />,
      dataIndex: 'time',
      valueType: 'dateTime',
      width: 180,
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.ConnectionAuditItem>
        headerTitle={
          <FormattedMessage id="pages.audits.conn" defaultMessage="Connection Audits" />
        }
        actionRef={actionRef}
        rowKey="id"
        request={async (params) => {
          const result = await getConnectionAudits({
            current: params.current || 1,
            pageSize: params.pageSize || 10,
          });
          return {
            data: result.data || [],
            total: result.total || 0,
            success: true,
          };
        }}
        columns={columns}
        search={false}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        scroll={{ x: 1200 }}
      />
    </PageContainer>
  );
};

export default ConnectionAudit;
