type VuexStoreOptions = { [key: string]: any };

type VuexStoreModule = { [key: string]: any };

type StoreCreator = (options: VuexStoreOptions) => any;

type StoreModule = { name: string; store: VuexStoreModule };

interface StoreDescriptor {
  modules: StoreModule[];
}

export { VuexStoreModule, StoreCreator, StoreModule, StoreDescriptor };
