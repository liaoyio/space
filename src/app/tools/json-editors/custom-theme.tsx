'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { json as jsonLang } from '@codemirror/lang-json';
import { tags as t } from '@lezer/highlight';
import { createTheme, type CreateThemeOptions } from '@uiw/codemirror-themes';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { Check, Clipboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

export const defaultSettingsOkaidia: CreateThemeOptions['settings'] = {
  background: '#272822',
  foreground: '#FFFFFF',
  caret: '#FFFFFF',
  selection: '#49483E',
  selectionMatch: '#49483E',
  gutterBackground: '#272822',
  gutterForeground: '#FFFFFF70',
  lineHighlight: '#0000003b',
};

export const okaidiaDarkStyle: CreateThemeOptions['styles'] = [
  { tag: [t.comment, t.documentMeta], color: '#8292a2' },
  { tag: [t.number, t.bool, t.null, t.atom], color: '#ae81ff' },
  { tag: [t.attributeValue, t.className, t.name], color: '#e6db74' },
  { tag: [t.propertyName, t.attributeName], color: '#a6e22e' },
  { tag: [t.variableName], color: '#9effff' },
  { tag: [t.squareBracket], color: '#bababa' },
  { tag: [t.string, t.special(t.brace)], color: '#e6db74' },
  {
    tag: [t.regexp, t.className, t.typeName, t.definition(t.typeName)],
    color: '#66d9ef',
  },
  {
    tag: [t.definition(t.variableName), t.definition(t.propertyName), t.function(t.variableName)],
    color: '#fd971f',
  },
  // { tag: t.keyword, color: '#f92672' },
  {
    tag: [t.keyword, t.definitionKeyword, t.modifier, t.tagName, t.angleBracket],
    color: '#f92672',
  },
];

interface JSONEditorProps {
  initialJson: object;
  onChange?: (editedJson: object) => void;
  height?: string;
  className?: string;
  themeOptions?: Partial<CreateThemeOptions>;
}

const JSONEditor: React.FC<JSONEditorProps> = ({
  initialJson,
  onChange,
  height = '100%',
  className = '',
  themeOptions = {},
}) => {
  const { theme = 'dark', settings = {}, styles = [] } = themeOptions || {};

  const myTheme = createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsOkaidia,
      ...settings,
    },
    styles: [...okaidiaDarkStyle, ...styles],
  });

  const cmRef = useRef<ReactCodeMirrorRef>(null);
  // Initial formatted JSON
  const formattedJson = JSON.stringify(initialJson, null, 2);
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  // Track current JSON string and parse errors
  const [stringJson, setStringJson] = useState(formattedJson);
  const [parseError, setParseError] = useState(false);

  // Update editor only when initialJson prop changes
  useEffect(() => {
    setStringJson(JSON.stringify(initialJson, null, 2));
  }, [initialJson]);

  // Memoize JSON extensions for CodeMirror
  const extensions = useMemo(() => [jsonLang()], []);

  // Parse JSON and handle changes
  const handleJsonChange = useCallback(
    (newStringJson: string) => {
      setStringJson(newStringJson);

      try {
        const editedJson = JSON.parse(newStringJson);
        setParseError(false);
        onChange?.(editedJson);
      } catch {
        setParseError(true);
      }
    },
    [onChange],
  );

  const editor = (
    <div className={`w-full ${className}`}>
      <div className="h-full w-full overflow-auto">
        <CodeMirror
          value={stringJson}
          ref={cmRef}
          height={height}
          extensions={extensions}
          theme={myTheme}
          onChange={(value) => {
            handleJsonChange(value);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col space-y-0 rounded border">
      <div className="flex h-12 items-center justify-end border-b border-zinc-700 bg-gray-50 px-4 dark:bg-gray-900">
        {parseError && <div className="text-right text-xs text-red-500">Invalid JSON</div>}

        {!parseError && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(stringJson)}
            className="z-20 opacity-80 hover:opacity-100 dark:bg-zinc-800 dark:text-zinc-100"
          >
            {isCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          </Button>
        )}
      </div>

      {editor}
    </div>
  );
};

export default JSONEditor;
