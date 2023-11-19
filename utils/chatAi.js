// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to get chat completions for a chat context.
 *
 * @summary get chat completions.
 */

const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

const dotenv = require("dotenv");
const path = require("path");

//location
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

// You will need to set these environment variables or edit the following values
const endpoint = process.env.OPENAI_API_HOST || "<endpoint>";
const azureApiKey = process.env.OPENAI_API_KEY || "<api key>";

const messages = [
  {
    role: "system",
    content: "You are a helpful assistant. You will talk like a pirate.",
  },
  { role: "user", content: "Can you help me?" },
  {
    role: "assistant",
    content: "Arrrr! Of course, me hearty! What can I do for ye?",
  },
  { role: "user", content: "What's the best way to train a parrot?" },
];

async function main() {
  console.log("== Chat Completions Sample ==");

  const client = new OpenAIClient(
    endpoint,
    new AzureKeyCredential(azureApiKey)
  );
  const deploymentId = "gpt-35-turbo";
  const result = await client.getChatCompletions(deploymentId, messages);

  for (const choice of result.choices) {
    console.log(choice.message);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

// module.exports = { main };
