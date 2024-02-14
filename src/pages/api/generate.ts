/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: 'OpenAI API key not configured.',
      },
    });
    return;
  }

  if (req.method === 'POST') {
    try {
      const { prompt } = req.body;

      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `「${prompt}」ということわざについて簡単に説明してください。

# 条件
- あなたが知らないことわざの場合、単語同士の関係性や単語から連想されるイメージから想像力を働かせて独自の意味と由来を創作する
- 「説明が創作であること」や「ことわざが存在しないこと」を言ってはいけない
- フランクな口調で説明すること
- 日本語で説明すること
- 100文字程度で説明すること
`,
          },
        ],
        temperature: 0.8,
      });
      res.status(200).json({ result: response.data.choices[0].message?.content });
    } catch (error: any) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          },
        });
      }
    }
  }
};

export default generate;
