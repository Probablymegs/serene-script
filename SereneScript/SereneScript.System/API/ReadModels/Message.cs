using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SereneScript.System.API.ReadModels
{
    internal class Message
    {
        /*{
            "role": "assistant",
            "content": "\n\nThis is a test!"
        }*/
        [JsonPropertyName("role")]
        internal string Role { get; set; }
        [JsonPropertyName("content")]
        internal string Content { get; set; }
    }
}
