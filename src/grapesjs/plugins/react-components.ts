import React from 'react';
import { Editor } from 'grapesjs';

import * as AllComponents from '@/components'

export default function ReactComponentsPlugin(editor: Editor) {
  const { Blocks, Components } = editor;

  const addComponent = ({ type, component, props, shouldAdd = true }: any) => {
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

    if (shouldAdd)
      Blocks.add(type, {
        label: type,
        category: 'Custom components',
        content: { type }
      });
  };

  addComponent({
    type: 'CustomButton',
    component: AllComponents.Button,
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
    type: 'Card',
    component: AllComponents.Card,
    props: {}
  });

  addComponent({
    type: 'WholePage',
    component: AllComponents.WholePage,
    props: {},
    shouldAdd: false,
  });
};

export const COMPONENTS = [
  'CustomButton',
  'Card',
  'WholePage'
]
