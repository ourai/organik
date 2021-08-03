import { IconProvider, IconProviders } from '../../typing';
import { registerIconProviders, setDefaultIconProvider, getIconProviders } from './register';

const loadedCache: { [key: string]: boolean } = {};

function isValidProviderUrl(url: string): boolean {
  return typeof url === 'string' && url.length > 0 && loadedCache[url] !== true;
}

function loadProviderUrls(urls: string[], index: number = 0): void {
  const url: string = urls[index];

  if (!isValidProviderUrl(url)) {
    return;
  }

  let el: HTMLLinkElement | HTMLScriptElement;
  let parentEl: HTMLHeadElement | HTMLBodyElement;

  if (/.+\.css(\?.+)?$/gi.test(url)) {
    el = document.createElement('link');
    parentEl = document.head;

    el.setAttribute('rel', 'stylesheet');
    el.setAttribute('href', url);
  } else {
    el = document.createElement('script');
    parentEl = document.body;

    el.setAttribute('src', url);
  }

  const nextIndex: number = index + 1;

  if (urls.length > nextIndex) {
    el.onload = el.onerror = () => loadProviderUrls(urls, nextIndex);
  }

  loadedCache[url] = true;
  parentEl.appendChild(el);
}

function loadIconProviders(): void {
  const providers: IconProviders = getIconProviders();

  Object.keys(providers).forEach(k => {
    const provider: IconProvider = providers[k];
    const urls: string[] = [...(provider.urls || [])];

    // 因为 iconfont 资源会把 SVG 插入 before，所以前加载相同 type 会覆盖后加载，为了数组覆盖顺序，倒序插入
    loadProviderUrls(provider.type === 'svg' ? urls.reverse() : urls);
  });
}

function registerAndLoadIconProviders(providers: IconProviders, defaultProvider?: string): void {
  const providerAliases: string[] = Object.keys(providers);

  if (providerAliases.length === 0) {
    return;
  }

  registerIconProviders(providers);
  setDefaultIconProvider(defaultProvider || providerAliases[0]);
  loadIconProviders();
}

export { loadIconProviders, registerAndLoadIconProviders };
