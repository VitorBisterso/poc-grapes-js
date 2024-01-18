'use client'

import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import AllComponents from '@/components'
import { COMPONENTS } from '@/grapesjs/plugins/react-components';
import 'grapesjs/dist/css/grapes.min.css';

const options = {
  transform(reactNode, domNode, index) {
    console.log({ reactNode, domNode, index })

    if (!reactNode) return;

    const selectedComponentName = COMPONENTS.find(component => component.toUpperCase() === reactNode.type?.toUpperCase());
    if (selectedComponentName) {
      const component = AllComponents[selectedComponentName.toUpperCase()]
      return component(reactNode.props)
    }

    return reactNode;
  }
}

export function RenderHtmlFromFile() {
  const [data, setData] = useState<{ html: string, css: string }>({} as any);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./api/appearance');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error reading JSON file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.html && parse(data.html, options)}
      <style>{data.css}</style>
    </>
  )
};