// Define your models here.

import { CLAUDE_SONNET_IDENTIFIER } from '../constants';

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  model: 'openai' | 'bedrock';
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
    model: 'openai',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
    model: 'openai',
  },
  {
    id: 'anthropic.claude-3-sonnet-20240229-v1:0',
    label: 'Claude 3 Sonnet',
    apiIdentifier: CLAUDE_SONNET_IDENTIFIER,
    description: 'Fast and powerful model for complex tasks',
    model: 'bedrock',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = CLAUDE_SONNET_IDENTIFIER;
