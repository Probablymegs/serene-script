using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SereneScript.System.API.ReadModels
{
    internal class Choice
    {
        /*{
            "message": {
                "role": "assistant",
                "content": "\n\nThis is a test!"
            },
            "logprobs": null,
            "finish_reason": "stop",
            "index": 0
        }*/
        [JsonPropertyName("message")]
        internal Message Message { get; set; }
        [JsonPropertyName("logprobs")]
        internal bool? LogProbs {  get; set; }
        [JsonPropertyName("finish_reason")]
        internal string FinishReason { get; set; }
        [JsonPropertyName("index")]
        internal int Index { get; set; }
    }
}
