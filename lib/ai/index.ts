import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';
import { bedrock } from '@ai-sdk/amazon-bedrock';

type ModelProvider = 'openai' | 'bedrock';

const modelProviders = {
  openai: openai,
  bedrock: bedrock,
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
