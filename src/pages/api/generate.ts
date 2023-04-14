import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
            content: `「${prompt}」ということわざについて教えて

# 条件
- ことわざの「意味」「由来」「例文」をそれぞれ必ず含める
- あなたが知らないことわざの場合、単語同士の関係性や単語から連想されるイメージから想像力を働かせて独自の意味と由来を創作する
- 文章内に「解説が創作であること」や「ことわざが存在しないこと」を含めることは禁止する
- フランクな口調で話してください`,
          },
        ],
        temperature: 0.8,
      });
      console.log(response.data.choices[0].message?.content);
      res.status(200).json({ result: response.data.choices[0].message?.content });
    } catch (error: any) {
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          },
        });
      }
    }
  }
};
