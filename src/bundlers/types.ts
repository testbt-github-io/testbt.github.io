import type { PayloadHandler, SanitizedConfig } from 'payload/config';
import type { Payload } from '../payload';

export interface PayloadBundler {
  dev: (payload: Payload) => Promise<PayloadHandler>, // this would be a typical Express middleware handler
  build: (payloadConfig: SanitizedConfig) => Promise<void> // used in `payload build`
  serve: (payload: Payload) => Promise<PayloadHandler> // serve built files in production
}
