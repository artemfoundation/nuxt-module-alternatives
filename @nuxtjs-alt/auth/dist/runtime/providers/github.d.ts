import type { ProviderOptions, ProviderPartialOptions } from '../../type';
import type { Oauth2SchemeOptions } from '../schemes';
export interface GithubProviderOptions extends ProviderOptions, Oauth2SchemeOptions {
}
export declare function github(nuxt: any, strategy: ProviderPartialOptions<GithubProviderOptions>): void;
