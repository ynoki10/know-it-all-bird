import { NextRequest } from 'next/server';

import { OpenAIStream } from '@/utils/OpenAiStream';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `「${prompt as string}」ということわざについて簡単に説明してください。

# 条件
- あなたが知らないことわざの場合、単語同士の関係性や単語から連想されるイメージから想像力を働かせて独自の意味と由来を創作する
- 「説明が創作であること」や「ことわざが存在しないこと」を言ってはいけない
- フランクな口調で説明すること
- 日本語で説明すること
`,
      },
    ],
    temperature: 0.8,
    stream: true,
  };
  const stream = await OpenAIStream(payload);
  return new Response(stream);
}
