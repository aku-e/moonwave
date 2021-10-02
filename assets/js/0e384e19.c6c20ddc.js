"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],r={sidebar_position:1},l="Getting Started with Moonwave",d={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting Started with Moonwave",description:"Getting started with Moonwave is easy. You can generate a website with little-to-no configuration and just a few comments in your Lua code.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/moonwave/docs/intro",editUrl:"https://github.com/UpliftGames/moonwave/edit/master/website/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"Eryn Lynn",lastUpdatedAt:1633134776,formattedLastUpdatedAt:"10/1/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"List of Tags",permalink:"/moonwave/docs/TagList"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Use Moonwave with your project",id:"use-moonwave-with-your-project",children:[]},{value:"Let&#39;s write some doc comments",id:"lets-write-some-doc-comments",children:[{value:"Your first class",id:"your-first-class",children:[]},{value:"Documenting Functions",id:"documenting-functions",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],m={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-moonwave"},"Getting Started with Moonwave"),(0,i.kt)("p",null,"Getting started with Moonwave is easy. You can generate a website with little-to-no configuration and just a few comments in your Lua code."),(0,i.kt)("p",null,"Moonwave is a modular project: while Moonwave is designed to work out of the box, you could also use it to extract your docs as JSON and use it for whatever you want. It's up to you!"),(0,i.kt)("p",null,"The rest of this guide will get you started using the Moonwave command line, which lets you generate and customize your Lua docs website without any prior knowledge."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Ensure you have ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," v14+ installed on your computer."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a terminal, like Command Prompt, Powershell, or ",(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701"},"Windows Terminal")," (recommended)"),(0,i.kt)("li",{parentName:"ol"},"Run the command ",(0,i.kt)("inlineCode",{parentName:"li"},"npm i -g moonwave"),".")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This will install the current version of Moonwave on your system. You should regularly update your Moonwave installation to receive new features and bug fixes. You can do this by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm i -g moonwave@latest"),"."))),(0,i.kt)("p",null,"If you always want the most up to date version, you can skip installing Moonwave and use ",(0,i.kt)("inlineCode",{parentName:"p"},"npx moonwave")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"moonwave")," in the following steps. This will always download the latest version of Moonwave before running the command."),(0,i.kt)("h2",{id:"use-moonwave-with-your-project"},"Use Moonwave with your project"),(0,i.kt)("p",null,"Next, you need a Lua project to use Moonwave with."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Moonwave automatically pulls some information about your project like Title and Author from your Git config. For this reason, it's recommended to use Git with the project you want to generate docs for. If you don't want to use Git for some reason, these options can be manually configured in the ",(0,i.kt)("a",{parentName:"p",href:"Configuration"},"moonwave.toml")," file."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In your terminal, navigate to the folder containing your project. If you're using your editor's integrated terminal, you might already be in the right folder."),(0,i.kt)("li",{parentName:"ol"},"Run the command ",(0,i.kt)("inlineCode",{parentName:"li"},"moonwave dev"),". This should open your new website in your browser!")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default, moonwave looks for your code in a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"lib"),". If your source code is not in one of these folders, fear not: just specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"--code")," flag: ",(0,i.kt)("inlineCode",{parentName:"p"},"moonwave dev --code MyFolderHere")))),(0,i.kt)("h2",{id:"lets-write-some-doc-comments"},"Let's write some doc comments"),(0,i.kt)("p",null,'In Moonwave, anything that can be documented (types, properties, or functions) must belong to a "class". A class in Moonwave means nothing more than a table that contains fields or functions: it has no specific meaning in the "Object-Oriented Programming" sense of the term.'),(0,i.kt)("p",null,'A Moonwave class can be a "service", an OOP-style "class", or a even a plain table that contains methods or properties. It\'s up to you. The only thing to remember is that each Moonwave class will have its own API page.'),(0,i.kt)("h3",{id:"your-first-class"},"Your first class"),(0,i.kt)("p",null,"Doc comments in Moonwave are denoted in one of two ways:"),(0,i.kt)("p",null,"A multi-line comment with a single equals sign between the square brackets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"--[=[\n    @class MyFirstClass\n\n    This is my first class.\n]=]\nlocal MyFirstClass = {}\nMyFirstClass.__index = MyFirstClass\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Or"),", a set of single-line triple-dash comments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"--- @class MyFirstClass\n---\n--- This is my first class.\nlocal MyFirstClass = {}\nMyFirstClass.__index = MyFirstClass\n")),(0,i.kt)("p",null,"These two examples are equivalent. Pick one, and put it in one of your Lua files. The ",(0,i.kt)("inlineCode",{parentName:"p"},"@class")," doc comment can appear anywhere in your file, but it's conventional to put it right above the line where you declare your class name."),(0,i.kt)("p",null,'Now, your website should automatically update with your class in the "API" section on the navbar!'),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Not Working?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Are your changes not showing up? Try restarting Moonwave. Press ",(0,i.kt)("kbd",null,"Ctrl")," + ",(0,i.kt)("kbd",null,"C")," to stop the server, press the up arrow on your keyboard, and then press enter."))),(0,i.kt)("h3",{id:"documenting-functions"},"Documenting Functions"),(0,i.kt)("p",null,"Next let's document a function within your class. This doc comment must be placed directly above your function definition in Lua."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"--[=[\n    This is a very fancy function that adds a couple numbers.\n\n    @param a number -- The first number you want to add\n    @param b number -- The second number you wanna add\n    @return number -- Returns the sum of `a` and `b`\n]=]\nfunction MyFirstClass:add(a, b)\n    return a + b\nend\n")),(0,i.kt)("p",null,"Save your file, and you should see your function as part of your class documentation. If not, check the console - there might be errors."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Now you know the basics of Moonwave. Keep reading the docs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"TagList"},"List of all tags")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"Publishing"},"Publishing your website")),(0,i.kt)("li",{parentName:"ul"},"Check out an example of a project using Moonwave: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/evaera/roblox-lua-promise/blob/master/lib/init.lua"},"roblox-lua-promise"))))}c.isMDXComponent=!0}}]);