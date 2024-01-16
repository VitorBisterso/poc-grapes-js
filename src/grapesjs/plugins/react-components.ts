import React from 'react';
import { Editor } from 'grapesjs';

import Button from '@/components/button';
import Card from '@/components/card';

export default function ReactComponentsPlugin(editor: Editor) {
  const { Blocks, Components } = editor;

  const addComponent = ({ type, component, props }: any) => {
    Components.addType(type, {
      extend: 'react-component',
      model: {
        defaults: {
          ...props,
          component
        }
      },
      view: {
        createReactEl(cmp: any, props: any) {
          return React.createElement(
            cmp,
            props,
            this.createReactChildWrap()
          );
        }
      },
      isComponent: (el) => el.tagName === type.toUpperCase()
    });

    Blocks.add(type, {
      label: type,
      category: 'Custom components',
      content: { type }
    });
  };

  addComponent({
    type: 'Button',
    component: Button,
    props: {
      attributes: {
        title: 'Default button title',
        testId: 'some-test-id'
      },
      traits: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
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
    type: 'Card',
    component: Card,
    props: {}
  });
};
