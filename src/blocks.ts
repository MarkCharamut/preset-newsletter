import type grapesjs from 'grapesjs';
import { PluginOptions } from '.';

export default function(editor: grapesjs.Editor, opts: Required<PluginOptions>) {
  const bm = editor.Blocks;
  let tableStyleStr = '';
  let cellStyleStr = '';
  let tableStyle = opts.tableStyle || {};
  let cellStyle = opts.cellStyle || {};

  const addBlock = (id: string, blockDef: grapesjs.BlockOptions) => {
    opts.blocks.indexOf(id)! >= 0 && editor.Blocks.add(id, {
      select: true,
      ...blockDef,
      ...opts.block(id),
    });
  }

  for (let prop in tableStyle){
    tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
  }
  for (let prop in cellStyle){
    cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
  }

  

  
};
