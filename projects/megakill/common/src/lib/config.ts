export class MegakillCommonModuleConfig {
	environment: any;
	auth: any;
  }

export function getBaseUrl(config?: MegakillCommonModuleConfig) {
	if (!config?.environment?.baseUrl) {
		console.warn('No baseUrl provided in MegakillCommonModuleConfig. Register the module as MegakillCommonModule.forRoot({ environment }), where environment has the property baseUrl.')
	  }
	  return config?.environment?.baseUrl;
}
