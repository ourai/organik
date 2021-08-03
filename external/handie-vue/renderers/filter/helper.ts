function getRenderType(dataType: string): string {
  if (dataType === 'string' || dataType === 'text') {
    return 'input';
  }

  if (dataType === 'enum') {
    return 'select';
  }

  return '';
}

export { getRenderType };
