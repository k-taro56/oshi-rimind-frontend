'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { OpenAI } from 'openai';

type SetDataEventDetail = {
  title: string;
  url: string;
};

type SetDataEvent = CustomEvent<SetDataEventDetail>;

export default function Home() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<OpenAI.Chat.ChatCompletionMessageParam[]>([
    {
      role: 'system',
      content:
        'アーニャは漫画のキャラクターで、4歳の女の子です。周囲の人間の思惑を読むことができる超能力を持っています。あなたはアーニャになりきってください。',
    },
  ]);
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const handleDataEvent = (event: Event) => {
      const customEvent = event as SetDataEvent;
      setTitle(customEvent.detail.title);
      setUrl(customEvent.detail.url);
    };

    window.addEventListener('setDataFromExtension', handleDataEvent);

    return () => {
      window.removeEventListener('setDataFromExtension', handleDataEvent);
    };
  }, []);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle('');
    setUrl('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSending(true);
    e.preventDefault();

    const newMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      ...messages,
      { role: 'user', content: message },
    ];
    setMessages(newMessages);
    setMessage('');

    console.log(newMessages);

    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true,
    });

    const stream = await openai.chat.completions.create({
      model: 'ft:gpt-3.5-turbo-0613:personal::7wDiAH8m',
      messages: newMessages,
      stream: true,
    });

    let content = '';
    let role: 'system' | 'user' | 'assistant' | 'function' = 'assistant';

    for await (const part of stream) {
      if (part.choices[0]?.delta?.role) {
        role = part.choices[0]?.delta?.role;
      }

      content += part.choices[0]?.delta?.content || '';
      setMessages([...newMessages, { role: role, content: content }]);
    }

    setIsSending(false);
  };

  if (!apiKey) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800">
        <div className="p-4 bg-white dark:bg-gray-900 rounded shadow">
          <h1 className="text-xl mb-4">Enter your OpenAI API Key</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setApiKey(e.currentTarget.apiKey.value);
            }}
          >
            <input
              name="apiKey"
              type="password"
              placeholder="API Key"
              className="p-2 mb-4 border rounded w-full dark:bg-gray-800 dark:text-white"
            />
            <button type="submit" className="bg-blue-500 text-white rounded-r p-2">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-200 dark:bg-gray-800">
      <div className="p-4 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-600">
        <form onSubmit={addTask} className="flex">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="current-page-title"
            className="flex-1 rounded p-2 mr-2 dark:bg-gray-800 dark:text-white"
          />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            id="current-page-url"
            className="flex-1 rounded p-2 mr-2 dark:bg-gray-800 dark:text-white"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Add Reading List
          </button>
        </form>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(
          (msg, idx) =>
            msg.role !== 'system' && (
              <div
                key={idx}
                className={`flex mb-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div>
                  <div
                    className={`px-4 py-2 rounded-lg whitespace-pre-line flex flex-col ${
                      msg.role === 'user'
                        ? 'bg-blue-500 text-white dark:bg-blue-700'
                        : 'bg-green-500 dark:bg-green-700 text-white'
                    }`}
                  >
                    <div
                      className={`bg-white w-14 h-14 rounded-full p-2 mb-2 flex ${
                        msg.role === 'user' ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      <img
                        className=""
                        src={
                          msg.role === 'user'
                            ? 'https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png'
                            : 'https://1.bp.blogspot.com/-VthzAuEo8fc/X96mhYv33UI/AAAAAAABdBs/HXCc0J0WsHUMSuQ00UZ5UuLPUXatMIq-wCNcBGAsYHQ/s831/onepiece01_luffy2.png'
                        }
                        alt="Icon"
                      />
                    </div>
                    <div>{msg.content}</div>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>

      <div className="p-4 bg-gray-300 dark:bg-gray-700">
        <div className="flex">
          <form onSubmit={handleSubmit} className="flex-1 flex">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 rounded p-2 mr-2 dark:bg-gray-800 dark:text-white"
              placeholder="Enter your message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>
          <button
            onClick={() => router.push('/todo-list')}
            className="bg-blue-500 ml-2 text-white py-2 px-4 rounded"
          >
            Go to Task Management Page
          </button>
        </div>
      </div>
    </div>
  );
}
