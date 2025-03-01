import React from 'react';
import JSONEditorOkadiaTheme from '@/app/tools/json-editors/okadia-theme';
import json from '../../../../package.json';
import JSONEditor from './custom-theme';

export default function Page() {
  return (
    <div>
      <JSONEditor initialJson={json} />
      <JSONEditorOkadiaTheme initialJson={json} />
    </div>
  );
}
//
