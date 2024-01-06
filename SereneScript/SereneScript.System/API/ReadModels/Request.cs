using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SereneScript.System.API.ReadModels
{
    public class Request
    {
        /*{
            "id": "chatcmpl-abc123",
            "object": "chat.completion",
            "created": 1677858242,
            "model": "gpt-3.5-turbo-1106",
            "usage": {
                "prompt_tokens": 13,
                "completion_tokens": 7,
                "total_tokens": 20
            },
            "choices": [
                {
                    "message": {
                        "role": "assistant",
                        "content": "\n\nThis is a test!"
                    },
                    "logprobs": null,
                    "finish_reason": "stop",
                    "index": 0
                }
            ]
        }*/
        [JsonPropertyName("id")]
        internal string RequestID { get; set; }
        [JsonPropertyName("object")]
        internal string ObjectType { get; set; }
        [JsonPropertyName("created")]
        internal int Created {  get; set; }
        [JsonPropertyName("model")]
        internal string ModelName { get; set; }
        [JsonPropertyName("usage")]
        internal Usage Usage { get; set; }
        [JsonPropertyName("choices")]
        internal List<Choice> Choices { get; set; }
    }
}
