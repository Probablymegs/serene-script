using SereneScript.System.API.ReadModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SereneScript.System.API
{
    public static class GptApi
    {
        private static string _baseURL => "https://api.openai.com/v1/chat/completions";
        private static string _key => "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";
        private static HttpClient _client => new HttpClient();


        public static Request RequestTest()
        {
            return null;
        }
    }
}
