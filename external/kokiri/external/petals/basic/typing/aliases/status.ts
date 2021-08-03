type BasicStatus = 'default' | 'success' | 'warning';

type StatusType = BasicStatus | 'primary' | 'danger' | 'info';

type ProcessStatus = BasicStatus | 'error' | 'processing';

type MessageStatus = 'info' | 'success' | 'warning' | 'error';

export { StatusType, ProcessStatus, MessageStatus };
