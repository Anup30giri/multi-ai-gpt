import { openai } from '@ai-sdk/openai';
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { google } from '@ai-sdk/google';

import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';
import type { ModelProvider } from '@/types/types';

const modelProviders = {
  openai: openai,
  bedrock: bedrock,
  gemini: google,
};
export const createCustomModel = (provider: ModelProvider, apiIdentifier: string) => {
  if (!modelProviders[provider]) {
    throw new Error(`Unsupported model provider: ${provider}`);
  }

  return wrapLanguageModel({
    model: modelProviders[provider](apiIdentifier),
    middleware: customMiddleware,
  });
};
