
# justreddit

A simple package for getting random posts, images, or subreddits via the reddit api.

Dont use, tailor made for my discord bot and wont handel exceptions that way you would expect.


## Installation

Current release (3.0.0+) requires Node.js 12.20.0 at minimum.
```sh
npm i justreddit
```

## Requiring
CommonJS
```js
const justreddit = require("justreddit");
```

ESM
```js
import justreddit from "justreddit";
```

## Usage
#### Getting a random SubReddit
```js
justreddit.randomSub();

//# Returns a SubReddit name
```

#### Getting a random post
```js
//# Random Post
justreddit.randomPost({
    sortType: "", //"top" or "new"
    postGetLimit: 10,
});

//# Random Post via SubReddit
justreddit.randomPostFromSub({
    reddit: "", //SubReddit name. DONT include r/ in the name.
    sortType: "",
    postGetLimit: 10,
});

/*
    # Returns
    -
    image: string,
    title: string,
    content: string,
    url: string,
    subreddit: string,
    author: string,
    upvotes: number,
    downvotes: number,
    upvoteRatio: number,
    nsfw: boolean,
    createdUTC: number,
    category: string | null,
    thumbnail: string | null,
    html: string | null,
    raw: Object,
/*
```

#### Getting a random image
```js
//# Random Post
justreddit.randomImage({
    sortType: "", //"top" or "new"
    postGetLimit: 10,
});

//# Random Post via SubReddit
justreddit.randomImageFromSub({
    reddit: "", //SubReddit name. DONT include r/ in the name.
    sortType: "",
    postGetLimit: 10,
});

//# Returns a imageURL as a string
```
## License

Copyright © 2022 Lanred

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
