"use client";

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon, SparkleIcon } from 'lucide-react'
import axios from 'axios'

const suggestions = [
  "Historic Story", "Kids Story", "Movie Stories", "AI Innovations",
  "Space Mysteries", "Horror Stories", "Mythological Tales", "Tech Breakthroughs",
  "True Crime Stories", "Fantasy Adventures", "Science Experiments", "Motivational Stories"
]

function Topic({ onHandleInputChange }) {
  const [selectTopic, setSelectedTopic] = useState();
  const [selectedScriptIndex, setSelectedScriptIndex] = useState(null);
  const [scripts, setScripts] = useState(null);
  const [loading, setLoading] = useState(false);

  const GenerateScript = async () => {
    if (!selectTopic) return;

    setLoading(true);
    setSelectedScriptIndex(null);

    try {
      const result = await axios.post('/api/generate-script', {
        topic: selectTopic
      });

      console.log(result.data);
      setScripts(result.data?.scripts || []);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2 className='mb-1'>Project Title</h2>
      <Input
        placeholder="Enter Your Project title"
        onChange={(event) => onHandleInputChange('title', event.target.value)}
      />

      <div className='mt-5'>
        <h2>Video Topic</h2>
        <p className='text-sm text-gray-600'>Select topic for your video</p>

        <Tabs defaultValue="suggestion" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>

          <TabsContent value="suggestion">
            <div>
              {suggestions.map((suggestion, index) => (
                <Button
                  variant="outline"
                  key={index}
                  className={`m-1 ${selectTopic === suggestion ? 'bg-emerald-500 text-white' : ''}`}
                  onClick={() => {
                    setSelectedTopic(suggestion);
                    onHandleInputChange('topic', suggestion);
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="your_topic">
            <div>
              <h2>Enter Your Own Topic</h2>
              <Textarea
                placeholder="Enter Your Own Topic"
                onChange={(event) => {
                  setSelectedTopic(event.target.value);
                  onHandleInputChange('topic', event.target.value);
                }}
              />
            </div>
          </TabsContent>
        </Tabs>

        {scripts?.length > 0 && (
          <div className='mt-3'>
            <h2>Select the Script</h2>

            <div className='grid grid-cols-2 gap-5 mt-1'>
              {scripts.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedScriptIndex === index
                      ? 'bg-gray-200 border-gray-800'
                      : 'bg-white'
                  }`}
                  onClick={() => setSelectedScriptIndex(index)}
                >
                  <h2 className='line-clamp-4 text-sm text-gray-600'>
                    {item.content}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {!scripts && (
        <Button
          className="mt-3"
          size="sm"
          disabled={loading}
          onClick={GenerateScript}
        >
          {loading ? (
            <Loader2Icon className='animate-spin' />
          ) : (
            <SparkleIcon className="mr-1" />
          )}
          Generate Video
        </Button>
      )}
    </div>
  );
}

export default Topic;
c
