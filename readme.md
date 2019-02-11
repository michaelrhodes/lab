# lab
convert between lab and rgb colour spaces

[![build status](https://travis-ci.org/michaelrhodes/lab.svg?branch=master)](https://travis-ci.org/michaelrhodes/lab)

## install
```sh
npm install michaelrhodes/lab#1.0.0
```

## use
```js
var lab = require('lab/from-rgb')
var rgb = require('lab/to-rgb')

rgb(lab([124, 24, 241]))
> [124, 24, 241]
```

## obey
Copyright (c) 2014 Kevin Kwok <antimatter15@gmail.com>

Copyright (c) 2019 Michael Rhodes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
