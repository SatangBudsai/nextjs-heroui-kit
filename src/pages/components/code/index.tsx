import React, { Fragment, ReactElement } from 'react'
import { Code } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const CodeTest = () => {
  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Code Component Test</h1>

        {/* Basic Code */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Code</h2>
          <div className='space-y-3'>
            <p>
              Here is an inline code example: <Code>npm install @heroui/react</Code>
            </p>
            <p>
              You can also use: <Code>yarn add @heroui/react</Code> if you prefer yarn.
            </p>
          </div>
        </div>

        {/* Code Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Code Colors</h2>
          <div className='space-y-3'>
            <p>
              Default: <Code color='default'>console.log()</Code>
            </p>
            <p>
              Primary: <Code color='primary'>useState()</Code>
            </p>
            <p>
              Secondary: <Code color='secondary'>useEffect()</Code>
            </p>
            <p>
              Success: <Code color='success'>npm start</Code>
            </p>
            <p>
              Warning: <Code color='warning'>console.warn()</Code>
            </p>
            <p>
              Danger: <Code color='danger'>throw new Error()</Code>
            </p>
          </div>
        </div>

        {/* Code Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Code Sizes</h2>
          <div className='space-y-3'>
            <p>
              Small: <Code size='sm'>text-sm</Code> for smaller inline code
            </p>
            <p>
              Medium: <Code size='md'>text-base</Code> for regular inline code
            </p>
            <p>
              Large: <Code size='lg'>text-lg</Code> for larger inline code
            </p>
          </div>
        </div>

        {/* Code Radius */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Code Radius</h2>
          <div className='space-y-3'>
            <p>
              None: <Code radius='none'>border-none</Code>
            </p>
            <p>
              Small: <Code radius='sm'>border-radius-sm</Code>
            </p>
            <p>
              Medium: <Code radius='md'>border-radius-md</Code>
            </p>
            <p>
              Large: <Code radius='lg'>border-radius-lg</Code>
            </p>
            <p>
              Full: <Code radius='full'>border-radius-full</Code>
            </p>
          </div>
        </div>

        {/* Code in Different Contexts */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Code in Different Contexts</h2>
          <div className='space-y-4'>
            <div className='rounded-lg bg-gray-50 p-4'>
              <h3 className='mb-2 font-semibold'>Installation Instructions</h3>
              <p>
                To install the package, run: <Code>npm install @heroui/react</Code>
              </p>
              <p>
                Then import the components: <Code>{`import { Button } from "@heroui/react"`}</Code>
              </p>
            </div>

            <div className='rounded-lg bg-blue-50 p-4'>
              <h3 className='mb-2 font-semibold'>Configuration</h3>
              <p>
                Add this to your <Code>tailwind.config.js</Code> file:
              </p>
              <p>
                Set the theme to <Code color='primary'>{`content: ["./src/**/*.{js,ts,jsx,tsx}"]`}</Code>
              </p>
            </div>

            <div className='rounded-lg bg-green-50 p-4'>
              <h3 className='mb-2 font-semibold'>API Usage</h3>
              <p>
                Call the endpoint: <Code color='success'>GET /api/users</Code>
              </p>
              <p>
                With headers: <Code color='success'>Content-Type: application/json</Code>
              </p>
            </div>

            <div className='rounded-lg bg-red-50 p-4'>
              <h3 className='mb-2 font-semibold'>Error Handling</h3>
              <p>
                Catch errors with: <Code color='danger'>try...catch</Code>
              </p>
              <p>
                Log them using: <Code color='danger'>console.error()</Code>
              </p>
            </div>
          </div>
        </div>

        {/* Multiple Code Snippets */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Multiple Code Snippets</h2>
          <div className='space-y-3'>
            <p>
              Create a new component with <Code>React.useState()</Code> and <Code>React.useEffect()</Code>
            </p>
            <p>
              Import utilities: <Code>{`import { cn } from "@/lib/utils"`}</Code>
            </p>
            <p>
              CSS classes: <Code>className=&quot;flex items-center gap-2&quot;</Code>
            </p>
          </div>
        </div>

        {/* Code with Commands */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Terminal Commands</h2>
          <div className='space-y-3'>
            <p>
              Navigate to directory: <Code color='default'>cd my-project</Code>
            </p>
            <p>
              Install dependencies: <Code color='primary'>npm install</Code>
            </p>
            <p>
              Start development server: <Code color='success'>npm run dev</Code>
            </p>
            <p>
              Build for production: <Code color='warning'>npm run build</Code>
            </p>
            <p>
              Run tests: <Code color='secondary'>npm test</Code>
            </p>
          </div>
        </div>

        {/* Code with File Paths */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>File Paths</h2>
          <div className='space-y-3'>
            <p>
              Main component: <Code>src/components/ui/button.tsx</Code>
            </p>
            <p>
              Styles: <Code>src/styles/globals.css</Code>
            </p>
            <p>
              Configuration: <Code>tailwind.config.js</Code>
            </p>
            <p>
              Package file: <Code>package.json</Code>
            </p>
            <p>
              Environment: <Code>.env.local</Code>
            </p>
          </div>
        </div>

        {/* Code with Variables */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Variables and Functions</h2>
          <div className='space-y-3'>
            <p>
              State variable: <Code color='primary'>const [count, setCount] = useState(0)</Code>
            </p>
            <p>
              Props interface: <Code color='secondary'>interface ButtonProps</Code>
            </p>
            <p>
              Event handler: <Code color='success'>{`onClick={handleClick}`}</Code>
            </p>
            <p>
              CSS variable: <Code color='warning'>--primary-color</Code>
            </p>
            <p>
              Environment variable: <Code color='danger'>process.env.NODE_ENV</Code>
            </p>
          </div>
        </div>

        {/* Code with Keyboard Shortcuts */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Keyboard Shortcuts</h2>
          <div className='space-y-3'>
            <p>
              Save file: <Code>Ctrl + S</Code> (Windows/Linux) or <Code>Cmd + S</Code> (Mac)
            </p>
            <p>
              Open command palette: <Code>Ctrl + Shift + P</Code>
            </p>
            <p>
              Format document: <Code>Shift + Alt + F</Code>
            </p>
            <p>
              Toggle terminal: <Code>Ctrl + `</Code>
            </p>
          </div>
        </div>

        {/* Code Documentation Examples */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Documentation Examples</h2>
          <div className='space-y-4'>
            <div className='rounded-lg border p-4'>
              <h3 className='mb-3 font-semibold'>Button Component</h3>
              <div className='space-y-2'>
                <p>
                  <strong>Import:</strong> <Code>{`import { Button } from "@heroui/react"`}</Code>
                </p>
                <p>
                  <strong>Usage:</strong> <Code>{`<Button color="primary">Click me</Button>`}</Code>
                </p>
                <p>
                  <strong>Props:</strong> <Code>color</Code>, <Code>size</Code>, <Code>variant</Code>
                </p>
              </div>
            </div>

            <div className='rounded-lg border p-4'>
              <h3 className='mb-3 font-semibold'>Custom Hook</h3>
              <div className='space-y-2'>
                <p>
                  <strong>Definition:</strong> <Code>const useLocalStorage = (key, initialValue) =&gt; {}</Code>
                </p>
                <p>
                  <strong>Usage:</strong>{' '}
                  <Code>const [value, setValue] = useLocalStorage(&apos;key&apos;, &apos;default&apos;)</Code>
                </p>
                <p>
                  <strong>Return:</strong> <Code>[value, setValue]</Code>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styled Code */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Code</h2>
          <div className='space-y-3'>
            <p>
              Custom background:
              <Code className='bg-gradient-to-r from-purple-500 to-pink-500 text-white'>gradient-code</Code>
            </p>
            <p>
              Larger padding:
              <Code className='bg-black px-3 py-2 font-mono text-green-400'>terminal-style</Code>
            </p>
            <p>
              Border style:
              <Code className='border-2 border-dashed border-blue-500 bg-blue-50'>dashed-border</Code>
            </p>
          </div>
        </div>

        {/* Real-world Usage Examples */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Real-world Usage Examples</h2>
          <div className='space-y-4'>
            <div className='rounded-lg bg-gray-50 p-4'>
              <h3 className='mb-2 font-semibold'>Git Commands</h3>
              <div className='space-y-1'>
                <p>
                  • Clone repository: <Code>git clone https://github.com/user/repo.git</Code>
                </p>
                <p>
                  • Create branch: <Code>git checkout -b feature/new-feature</Code>
                </p>
                <p>
                  • Commit changes: <Code>git commit -m &quot;Add new feature&quot;</Code>
                </p>
                <p>
                  • Push to remote: <Code>git push origin feature/new-feature</Code>
                </p>
              </div>
            </div>

            <div className='rounded-lg bg-blue-50 p-4'>
              <h3 className='mb-2 font-semibold'>Database Queries</h3>
              <div className='space-y-1'>
                <p>
                  • Select all: <Code color='primary'>SELECT * FROM users</Code>
                </p>
                <p>
                  • Insert record: <Code color='success'>INSERT INTO users (name, email) VALUES (?, ?)</Code>
                </p>
                <p>
                  • Update record: <Code color='warning'>UPDATE users SET name = ? WHERE id = ?</Code>
                </p>
                <p>
                  • Delete record: <Code color='danger'>DELETE FROM users WHERE id = ?</Code>
                </p>
              </div>
            </div>

            <div className='rounded-lg bg-green-50 p-4'>
              <h3 className='mb-2 font-semibold'>React Patterns</h3>
              <div className='space-y-1'>
                <p>
                  • Component props: <Code color='primary'>{`<MyComponent prop={value} />`}</Code>
                </p>
                <p>
                  • Conditional rendering: <Code color='secondary'>{`{condition && <Component />}`}</Code>
                </p>
                <p>
                  • Map over array: <Code color='success'>{`{items.map(item => <Item key={item.id} />)}`}</Code>
                </p>
                <p>
                  • Event handling: <Code color='warning'>{`onClick={() => setCount(count + 1)}`}</Code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeTest

CodeTest.auth = false

CodeTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}
