# Angular Application Setup Guide

# Pre-requisites: Visit https://nodejs.org/en and download this version of nodejs: https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi

Set execution-policy for Windows : On windows you need to change execution-policy before you run npm install : Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

# Install Angular CLI

    npm install -g @angular/cli

Before you start
This lesson starts from a pre-built app that will serve as a baseline for the application you'll be building in this tutorial. We've provided starter code so you can:

  Start with the code example for the beginning of this lesson. Download example here: https://angular.io/generated/zips/first-app-lesson-00/first-app-lesson-00.zip
  
  Use the download example and unzip it into a directory named: first-app. Open that directory in your IDE.

1.In your project directory, navigate to the first-app directory.

2.Run this command to install the dependencies needed to run the app.

    npm install
3.Run this command to builde and serve the default app:
    
    ng serve -o

**Quickstart URLs, goes from 01-14:**

**https://angular.io/tutorial/first-app/first-app-lesson-01**

# File structure of nodejs app:

In this step, you get to know the files that make up a default Angular app.

In the Explorer pane of your IDE:

In your project directory, navigate to the first-app directory.

Open the src directory to see these files.

In the file explorer, find the Angular app files (/src).

    index.html is the app's top level HTML template.
    
    style.css is the app's top level style sheet.
    
    main.ts is where the app start running.
    
    favicon.ico is the app's icon, just as you would find in web site.
  
In the file explorer, find the Angular app's component files (/app).

app.component.ts is the source file that describes the app-root component. This is the top-level Angular component in the app. A component is the basic building block of an Angular application. The component description includes the component's code, HTML template, and styles, which can be described in this file, or in separate files.

In this app, the styles are in a separate file while the component's code and HTML template are in this file.

    app.component.css is the style sheet for this component.

New components are added to this directory.

In the file explorer, find the image directory (/assets) contains images used by the app.

In the file explorer, find the support files are files and directories that an Angular app needs to build and run, but they are not files that you normally interact with.

    .angular has files required to build the Angular app.
    
    .e2e has files used to test the app.
    
    .node_modules has the node.js packages that the app uses.
    
    angular.json describes the Angular app to the app building tools.
    
    package.json is used by npm (the node package manager) to run the finished app.
    
    tsconfig.* are the files that describe the app's configuration to the TypeScript compiler.
