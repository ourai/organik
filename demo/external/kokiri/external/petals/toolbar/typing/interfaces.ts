interface IToolbarComponent<NodeType = string> {
  readonly content: NodeType;
  readonly contentClassName: string;
  readonly extraClassName: string;
}

export { IToolbarComponent };
