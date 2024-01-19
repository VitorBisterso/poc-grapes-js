import React, { ReactNode } from 'react';
import { Editor } from 'grapesjs';

import CustomButton from '@/components/button';
import Wrapper from '@/components/wrapper';
import Box from '@/components/box';
import Card from '@/components/card';

interface AddComponentParams {
  type: string;
  component: (props: any) => ReactNode;
  props: Record<string, any>
}

export default function ReactComponentsPlugin(editor: Editor) {
  const { Blocks, Components } = editor;

  const addComponent = ({ type, component, props }: AddComponentParams) => {
    Components.addType(type, {
      extend: 'react-component',
      model: {
        defaults: {
          ...props,
          component
        }
      },
      isComponent: (el: HTMLElement) => el.tagName === type.toUpperCase()
    });

    Blocks.add(type, {
      label: type,
      category: 'React Components',
      content: { type }
    });
  };

  addComponent({
    type: 'Box',
    component: (props) =>
      React.createElement(Box, props),
    props: {}
  });

  addComponent({
    type: 'Card',
    component: (props) =>
      React.createElement(Card, props),
    props: {
      attributes: {
        title: 'Title',
        description: 'Description'
      },
      traits: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
        },
      ]
    }
  });

  addComponent({
    type: 'CustomButton',
    component: CustomButton,
    props: {
      attributes: {
        text: 'Default button text',
        testId: 'some-test-id'
      },
      traits: [
        {
          type: 'string',
          label: 'Text',
          name: 'text',
        },
        {
          type: 'string',
          label: 'Test ID',
          name: 'testId',
        },
      ]
    }
  });

  addComponent({
    type: 'Wrapper',
    component: (props) =>
      React.createElement(Wrapper, props),
    props: {}
  });
};

export const COMPONENTS = [
  'Box',
  'Card',
  'CustomButton',
  'Wrapper'
]
