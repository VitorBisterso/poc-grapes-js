'use client';

import { useState } from 'react';
import grapesjs, { Editor } from 'grapesjs';
import GjsEditor from '@grapesjs/react';
import basicBlocksPlugin from 'grapesjs-blocks-basic';
import formsPlugin from 'grapesjs-plugin-forms'
import navbarPlugin from 'grapesjs-navbar'
import imageEditorPlugin from 'grapesjs-tui-image-editor'
import styleFilterPlugin from 'grapesjs-style-filter'
import styleBgPlugin from 'grapesjs-style-bg'
import countdownPlugin from 'grapesjs-component-countdown'
import flexboxPlugin from 'grapesjs-blocks-flexbox'
import tooltipPlugin from 'grapesjs-tooltip'
import customCodePlugin from 'grapesjs-custom-code'

import BaseReactComponentsPlugin from '@/grapesjs/plugins/base-react-component';
import ReactComponentsPlugin from '@/grapesjs/plugins/react-components';

import 'grapesjs/dist/css/grapes.min.css';

export default function DefaultEditor() {
  const [editor, setEditor] = useState<Editor>()

  function onEditor(newEditor: Editor) {
    console.log('Editor loaded', { newEditor });
    newEditor.setComponents(`
      <WholePage />
    `)

    setEditor(newEditor);
  };

  return (
    <>
      <GjsEditor
        grapesjs={grapesjs}
        options={{
          height: '90vh',
          storageManager: false,
        }}
        onEditor={onEditor}
        plugins={[
          BaseReactComponentsPlugin,
          ReactComponentsPlugin,
          basicBlocksPlugin,
          formsPlugin,
          navbarPlugin,
          imageEditorPlugin,
          styleFilterPlugin,
          styleBgPlugin,
          countdownPlugin,
          flexboxPlugin,
          tooltipPlugin,
          customCodePlugin
        ]}
      />
      <button
        onClick={() =>  
          console.log({
            html: editor?.getHtml(),
            css: editor?.getCss(),
            components: editor?.getComponents(),
            data: editor?.getProjectData(),
          })
        }
      >
        SALVAR
      </button>
      <button
        onClick={() =>  
          editor?.setComponents(`<WholePage />`)
        }
      >
        RENDERIZAR
      </button>
    </>
  );
}