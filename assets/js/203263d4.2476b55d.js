"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7990],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4287:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=["components"],s={slug:"/metadata-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/README.md"},l="Intro to Metadata Ingestion",u={unversionedId:"metadata-ingestion/README",id:"metadata-ingestion/README",isDocsHomePage:!1,title:"Intro to Metadata Ingestion",description:"Python version 3.6+",source:"@site/genDocs/metadata-ingestion/README.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion",permalink:"/docs/metadata-ingestion",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/README.md",tags:[],version:"current",frontMatter:{slug:"/metadata-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/README.md"},sidebar:"overviewSidebar",previous:{title:"How to Search for Information in Datahub",permalink:"/docs/how/search"},next:{title:"Athena",permalink:"/docs/metadata-ingestion/source_docs/athena"}},p=[{value:"Getting Started",id:"getting-started",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3}],level:2},{value:"Recipes",id:"recipes",children:[{value:"Handling sensitive information in recipes",id:"handling-sensitive-information-in-recipes",children:[],level:3},{value:"Basic Usage of CLI for ingestion",id:"basic-usage-of-cli-for-ingestion",children:[],level:3}],level:2},{value:"Transformations",id:"transformations",children:[],level:2},{value:"Using as a library",id:"using-as-a-library",children:[{value:"Programmatic Pipeline",id:"programmatic-pipeline",children:[],level:3}],level:2},{value:"Developing",id:"developing",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intro-to-metadata-ingestion"},"Intro to Metadata Ingestion"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/python-3.6%2B-blue",alt:"Python version 3.6+"})),(0,r.kt)("p",null,"This module hosts an extensible Python-based metadata ingestion system for DataHub.\nThis supports sending data to DataHub using Kafka or through the REST API.\nIt can be used through our CLI tool, with an orchestrator like Airflow, or as a library."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before running any metadata ingestion job, you should make sure that DataHub backend services are all running. If you are trying this out locally check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli"},"CLI")," to install the CLI and understand the options available in the CLI. You can reference the CLI usage guide given there as you go through this page."),(0,r.kt)("h2",{id:"recipes"},"Recipes"),(0,r.kt)("p",null,"A recipe is a configuration file that tells our ingestion scripts where to pull data from (source) and where to put it (sink).\nHere's a simple example that pulls metadata from MSSQL (source) and puts it into datahub rest (sink)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that one recipe file can only have 1 source and 1 sink. If you want multiple sources then you will need multiple recipe files.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# A sample recipe that pulls metadata from MSSQL and puts it into DataHub\n# using the Rest API.\nsource:\n  type: mssql\n  config:\n    username: sa\n    password: ${MSSQL_PASSWORD}\n    database: DemoData\n\ntransformers:\n  - type: "fully-qualified-class-name-of-transformer"\n    config:\n      some_property: "some.value"\n\n\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),(0,r.kt)("p",null,"A number of recipes are included in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/recipes"},"examples/recipes")," directory. For full info and context on each source and sink, see the pages described in the ",(0,r.kt)("a",{parentName:"p",href:"#installing-plugins"},"table of plugins"),"."),(0,r.kt)("h3",{id:"handling-sensitive-information-in-recipes"},"Handling sensitive information in recipes"),(0,r.kt)("p",null,"We automatically expand environment variables in the config (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"${MSSQL_PASSWORD}"),"),\nsimilar to variable substitution in GNU bash or in docker-compose files. For details, see\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/compose-file-v2/#variable-substitution"},"https://docs.docker.com/compose/compose-file/compose-file-v2/#variable-substitution"),". This environment variable substitution should be used to mask sensitive information in recipe files. As long as you can get env variables securely to the ingestion process there would not be any need to store sensitive information in recipes."),(0,r.kt)("h3",{id:"basic-usage-of-cli-for-ingestion"},"Basic Usage of CLI for ingestion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[datahub-rest]'  # install the required plugin\ndatahub ingest -c ./examples/recipes/mssql_to_datahub.yml\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--dry-run")," option of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," command performs all of the ingestion steps, except writing to the sink. This is useful to ensure that the\ningestion recipe is producing the desired workunits before ingesting them into datahub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Dry run\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml --dry-run\n# Short-form\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml -n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--preview")," option of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," command performs all of the ingestion steps, but limits the processing to only the first 10 workunits produced by the source.\nThis option helps with quick end-to-end smoke testing of the ingestion recipe."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Preview\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml --preview\n# Preview with dry-run\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml -n --preview\n")),(0,r.kt)("h2",{id:"transformations"},"Transformations"),(0,r.kt)("p",null,"If you'd like to modify data before it reaches the ingestion sinks \u2013 for instance, adding additional owners or tags \u2013 you can use a transformer to write your own module and integrate it with DataHub."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/transformers"},"transformers guide")," for more info!"),(0,r.kt)("h2",{id:"using-as-a-library"},"Using as a library"),(0,r.kt)("p",null,"In some cases, you might want to construct Metadata events directly and use programmatic ways to emit that metadata to DataHub. In this case, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/as-a-library"},"Python emitter")," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-integration/java/as-a-library"},"Java emitter")," libraries which can be called from your own code. "),(0,r.kt)("h3",{id:"programmatic-pipeline"},"Programmatic Pipeline"),(0,r.kt)("p",null,"In some cases, you might want to configure and run a pipeline entirely from within your custom python script. Here is an example of how to do it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/library/programatic_pipeline.py"},"programmatic_pipeline.py")," - a basic mysql to REST programmatic pipeline.")),(0,r.kt)("h2",{id:"developing"},"Developing"),(0,r.kt)("p",null,"See the guides on ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"developing"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/adding-source"},"adding a source")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/transformers"},"using transformers"),"."))}d.isMDXComponent=!0}}]);