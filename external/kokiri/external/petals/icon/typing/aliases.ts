type IconType = 'font' | 'svg';

type IconClassNames = string | string[];

type IconRef = string;

type IconResolver = (ref: string) => IconClassNames | IconRef;

type IconProvider = {
  type: IconType;
  urls?: string[];
  resolve?: IconResolver;
};

type IconProviders = { [key: string]: IconProvider };

type IconOption = Omit<IconProvider, 'urls'> & {
  provider: string;
  ref: string;
};

export { IconType, IconResolver, IconProvider, IconProviders, IconOption };
