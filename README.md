# Note Console App

## AGENDA
## Table of Contents
- [Description](#description)
- [Code samples](#code-samples)
- [Instalation](#installation)
- [Running](#running)
- [Built with](#built-with)


## Description

> Hello, this is my first nodejs project I've ever made.
> A program that store notes in json file. You are able to add, delete, list or read nots if created.
> ...

## Code Samples

> Not yet ready.

## Installation

```
  npm init
```

## Running

> Run help method for app program
``` npm
  node app.js --help
```
```
Commands:
  app.js add     Add a new note
  app.js remove  Remove the note
  app.js list    List all notes
  app.js read    Read specific note

Options:
  --version  Pokaż numer wersji                                        [boolean]
  --help     Pokaż pomoc                                               [boolean]
```

> Example run help method for add command
```
app.js add

Add a new note

Options:
  --version    Pokaż numer wersji                                       [boolean]
  --help       Pokaż pomoc                                              [boolean]
  --title, -t  Title of note                                            [require]
  --body, -b   Body of note 
```



## Built With
* [Node.js](https://nodejs.org/api/documentation.html) -The fs module provides an API for interacting with the file system.
* [Yargs](http://yargs.js.org) - Tool to parsing arguments and generating an elegant user interface.
* [Lodash](http://lodash.com) - Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
