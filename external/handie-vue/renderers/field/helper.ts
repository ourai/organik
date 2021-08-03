function getRenderType(dataType: string): string {
  if (dataType === 'string') {
    return 'input';
  }

  if (dataType === 'text') {
    return 'textarea';
  }

  if (dataType === 'enum') {
    return 'select';
  }

  return '';
}

export { getRenderType };
