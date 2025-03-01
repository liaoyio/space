'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { json as jsonLang } from '@codemirror/lang-json';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { Check, Clipboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

interface JSONEditorProps {
  initialJson: object;
  onChange?: (editedJson: object) => void;
  height?: string;
  className?: string;
}

const JSONEditorOkadiaTheme: React.FC<JSONEditorProps> = ({
  initialJson,
  onChange,
  height = '100%',
  className = '',
}) => {
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
          theme={okaidia}
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

export default JSONEditorOkadiaTheme;
