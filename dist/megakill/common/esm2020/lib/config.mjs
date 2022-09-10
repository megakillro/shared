export class MegakillCommonModuleConfig {
}
export function getBaseUrl(config) {
    if (!config?.environment?.baseUrl) {
        console.warn('No baseUrl provided in MegakillCommonModuleConfig. Register the module as MegakillCommonModule.forRoot({ environment }), where environment has the property baseUrl.');
    }
    return config?.environment?.baseUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVnYWtpbGwvY29tbW9uL3NyYy9saWIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTywwQkFBMEI7Q0FHcEM7QUFFSCxNQUFNLFVBQVUsVUFBVSxDQUFDLE1BQW1DO0lBQzdELElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTtRQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNLQUFzSyxDQUFDLENBQUE7S0FDbEw7SUFDRCxPQUFPLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWcge1xuXHRlbnZpcm9ubWVudDogYW55O1xuXHRhdXRoOiBhbnk7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VVcmwoY29uZmlnPzogTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWcpIHtcblx0aWYgKCFjb25maWc/LmVudmlyb25tZW50Py5iYXNlVXJsKSB7XG5cdFx0Y29uc29sZS53YXJuKCdObyBiYXNlVXJsIHByb3ZpZGVkIGluIE1lZ2FraWxsQ29tbW9uTW9kdWxlQ29uZmlnLiBSZWdpc3RlciB0aGUgbW9kdWxlIGFzIE1lZ2FraWxsQ29tbW9uTW9kdWxlLmZvclJvb3QoeyBlbnZpcm9ubWVudCB9KSwgd2hlcmUgZW52aXJvbm1lbnQgaGFzIHRoZSBwcm9wZXJ0eSBiYXNlVXJsLicpXG5cdCAgfVxuXHQgIHJldHVybiBjb25maWc/LmVudmlyb25tZW50Py5iYXNlVXJsO1xufVxuIl19