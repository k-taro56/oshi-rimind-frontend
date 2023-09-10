// @ts-nocheck;
"use client";
import React from 'react';
import App from './components/App';
import{ChakraProvider}from"@chakra-ui/react"
import theme from"./theme/theme"

// const container = document.getElementById('root')as Element ;
// const root = createRoot(container);
// root.render( <p>test</p>);

export default function Home() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
    <App />
    </ChakraProvider>
  )
}
