import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import api from '../api/client';

const CodeEditorPage = () => {
  const [code, setCode] = useState('print("Hello, world!")');
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);

  const runCode = async () => {
    try {
      setRunning(true);
      const { data } = await api.post('/run-code', { source_code: code, language_id: 71 });
      setOutput(data.stdout || data.stderr || data.compile_output || 'No output');
    } catch (error) {
      setOutput('Execution failed.');
    } finally {
      setRunning(false);
    }
  };

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Code Editor</h1>
      <CodeEditor code={code} setCode={setCode} />
      <button onClick={runCode} className="rounded bg-emerald-600 px-3 py-2 text-white">{running ? 'Running...' : 'Run Code'}</button>
      <pre className="rounded bg-slate-100 p-3 text-sm dark:bg-slate-900">{output}</pre>
    </section>
  );
};

export default CodeEditorPage;
