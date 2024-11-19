'use server';

import { type CoreUserMessage, generateText } from 'ai';
import { cookies } from 'next/headers';

import { createCustomModel } from '@/lib/ai';
import { CLAUDE_SONNET_IDENTIFIER } from '@/lib/constants';

export async function saveModelId(model: string) {
  const cookieStore = await cookies();
  cookieStore.set('model-id', model);
}

export async function generateTitleFromUserMessage({ message }: { message: CoreUserMessage }) {
  const model = createCustomModel('bedrock', CLAUDE_SONNET_IDENTIFIER);

  const { text: title } = await generateText({
    model: model,
    system: `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons`,
    prompt: JSON.stringify(message),
  });

  return title;
}
