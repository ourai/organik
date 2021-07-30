function getRenderType(dataType: string): string {
  if (dataType === 'string') {
    return 'input';
  }

  if (dataType === 'text') {
    return 'textarea';
  }

  return '';
}

export { getRenderType };
