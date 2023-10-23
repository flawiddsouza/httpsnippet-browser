## Install

```sh
npm install https://github.com/flawiddsouza/httpsnippet-browser
```

## Usage

```js
import { HTTPSnippet } from 'httpsnippet-browser'

const har = {
    method: 'POST',
    url: 'https://postman-echo.com/post',
    headers: [
        {
            name: 'Content-Type',
            value: 'application/json'
        }
    ],
    postData: {
        mimeType: 'application/json',
        text: '{"foo": "bar"}'
    }
}

const snippet = new HTTPSnippet(har)

const output = snippet.convert('shell', 'curl', {
    indent: '    '
})

console.log(output)
// curl --request POST \
//     --url https://postman-echo.com/post \
//     --header 'Content-Type: application/json' \
//     --data '{"foo": "bar"}'
```
