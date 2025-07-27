const fs = require('fs')
const path = require('path')

// Simple components that don't need forwardRef (single component without children collections)
const simpleComponents = [
  'alert',
  'button',
  'badge',
  'card',
  'checkbox',
  'chip',
  'circular-progress',
  'code',
  'date-input',
  'date-picker',
  'divider',
  'image',
  'kbd',
  'link',
  'modal',
  'pagination',
  'popover',
  'progress',
  'radio',
  'scrollbar',
  'skeleton',
  'slider',
  'snippet',
  'spacer',
  'spinner',
  'switch',
  'textarea',
  'tooltip',
  'user'
]

function fixSimpleComponent(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')

  // Replace Fragment import with forwardRef
  content = content.replace(/import { Fragment } from 'react'/, "import { forwardRef } from 'react'")

  // Find the component definition pattern
  const componentMatch = content.match(/const (\w+) = \({ \.\.\.props }: \w+Props\) => {/)
  if (!componentMatch) return

  const componentName = componentMatch[1]
  const heroUIName = `${componentName}HeroUI`

  // Replace the component definition with forwardRef version
  const oldPattern = new RegExp(
    `const ${componentName} = \\({ \\.\\.\\.props }: \\w+Props\\) => \\{\\s*return \\(\\s*<Fragment>\\s*<${heroUIName} \\{\\.\\.\\.props\\} />\\s*</Fragment>\\s*\\)\\s*\\}`,
    'gs'
  )

  const newPattern = `const ${componentName} = forwardRef<React.ElementRef<typeof ${heroUIName}>, ${componentName}Props>(
  (props, ref) => {
    return <${heroUIName} ref={ref} {...props} />
  }
)
${componentName}.displayName = '${componentName}'`

  content = content.replace(oldPattern, newPattern)

  fs.writeFileSync(filePath, content)
  console.log(`Fixed: ${filePath}`)
}

// Fix simple components
simpleComponents.forEach(componentName => {
  const filePath = path.join(__dirname, 'src', 'components', 'heroui', componentName, 'index.tsx')
  if (fs.existsSync(filePath)) {
    fixSimpleComponent(filePath)
  }
})
