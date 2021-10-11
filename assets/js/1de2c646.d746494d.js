"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[922],{5791:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],r={sidebar_position:6},u="Publishing your website",l={unversionedId:"Publishing",id:"Publishing",isDocsHomePage:!1,title:"Publishing your website",description:"It's easy",source:"@site/docs/Publishing.md",sourceDirName:".",slug:"/Publishing",permalink:"/moonwave/docs/Publishing",editUrl:"https://github.com/UpliftGames/moonwave/edit/master/website/docs/Publishing.md",tags:[],version:"current",lastUpdatedBy:"Eryn Lynn",lastUpdatedAt:1633202815,formattedLastUpdatedAt:"10/2/2021",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Static Files",permalink:"/moonwave/docs/StaticFiles"}},m=[{value:"It&#39;s easy",id:"its-easy",children:[]},{value:"If your master branch is not <code>master</code>",id:"if-your-master-branch-is-not-master",children:[]},{value:"Using a custom domain / Not Using Github Pages",id:"using-a-custom-domain--not-using-github-pages",children:[]},{value:"Github Pages Custom Domain CNAME file",id:"github-pages-custom-domain-cname-file",children:[]}],d={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"publishing-your-website"},"Publishing your website"),(0,o.kt)("h2",{id:"its-easy"},"It's easy"),(0,o.kt)("p",null,"If you are using git and Github pages, you can publish your doc website with one command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"moonwave build --publish"))),(0,o.kt)("p",null,"Otherwise, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"moonwave build"),", and your built website will be in a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," in your project directory."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," folder to your ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),"!"))),(0,o.kt)("h2",{id:"if-your-master-branch-is-not-master"},"If your master branch is not ",(0,o.kt)("inlineCode",{parentName:"h2"},"master")),(0,o.kt)("p",null,"Moonwave needs to know your master branch to make the \"Edit this page\" links work. We don't detect the correct master branch right now, so by default we assume it's ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),". If this is wrong, you should configure it in ",(0,o.kt)("a",{parentName:"p",href:"Configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"moonwave.toml")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'gitSourceBranch = "main"\n')),(0,o.kt)("h2",{id:"using-a-custom-domain--not-using-github-pages"},"Using a custom domain / Not Using Github Pages"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"Configuration"},"Configuration"),", you'll note two options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[docusaurus]\nurl = "https://organizationName.github.io"\nbaseUrl = "/projectName"\n')),(0,o.kt)("p",null,"These are the defaults. If you're hosting your website on a custom domain, or you aren't using Github Pages, these defaults will be incorrect."),(0,o.kt)("p",null,"In that case, you ",(0,o.kt)("strong",{parentName:"p"},"must")," create a ",(0,o.kt)("inlineCode",{parentName:"p"},"moonwave.toml")," file and configure these options correctly."),(0,o.kt)("p",null,"Even if you are using Github Pages, and:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you're using a custom domain, or"),(0,o.kt)("li",{parentName:"ul"},"you're hosting the website on the root path (",(0,o.kt)("inlineCode",{parentName:"li"},"organizationName.github.io"),", instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"organizationName.github.io/projectName"),")")),(0,o.kt)("p",null,"...you need to configure both of these options, ",(0,o.kt)("strong",{parentName:"p"},"and set ",(0,o.kt)("inlineCode",{parentName:"strong"},'baseUrl = "/"'))),(0,o.kt)("h2",{id:"github-pages-custom-domain-cname-file"},"Github Pages Custom Domain CNAME file"),(0,o.kt)("p",null,"Github Pages requires you to create a CNAME file in your website to host on a custom domain. You should create this file at ",(0,o.kt)("inlineCode",{parentName:"p"},"yourProjectRoot/.moonwave/static/CNAME")," (create the folders if they don't exist) and put your domain in the file."))}p.isMDXComponent=!0}}]);