# template-code-generator

[![dependencies Status](https://david-dm.org/request/request/status.svg)](https://david-dm.org/request/request) [![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/) 

It helps you to create and clone your existing code template.

> All of this code templates will store inside your home directory.

## Install

```sh
 $ npm install -g tsnippet
```

## Usage

To see available templates use
```sh
 $ tcg list
```

It will produce the following result

```
 $ tcg list
 1 Active templates
 MM/DD/YYYY, HH:MM:SS   .html  -
 $
```

To generate a code snippet
```
 $ tcg generate index.html
```
It will generate simple HTML code snippet in your current directory

You can add your own code snippet
To set a default template, use "_" character as a filename
```
 $ tcg use index.jsx
```
and access it using
```
 $ tcg generate App.jsx --index
```

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)