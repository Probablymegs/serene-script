using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SereneScript.System.API.ReadModels
{
    internal class Usage
    {
        /*"usage": {
                "prompt_tokens": 13,
                "completion_tokens": 7,
                "total_tokens": 20
            }*/
        [JsonPropertyName("prompt_tokens")]
        internal int PromptTokens { get; set; }
        [JsonPropertyName("completion_tokens")]
        internal int CompletionTokens { get; set; }
        [JsonPropertyName("total_tokens")]
        internal int TotalTokens { get; set; }
    }
}
