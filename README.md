# Introduction

This module allows you to identify the position of the scroll bar in respect to the different sections of your webpage. The id of these sections are passed as an array when calling the hook. When the scroll bar enters one of these sections, it returns the id of the section, and when it leaves or it is not in a section specified in the array, it returns an empty string. 

# Installation
```npm install use-section-scroll-position```

# Usage

`react/typescript`

```
import useScrollPosition from "use-section-scroll-position"

 const { scrollPosition } = useScrollPosition([
    "skills",
    "portfolio",
    "articles",
  ]);

```
# Contribute

If you would like to contribute, you are welcome.