import { Select, SelectItem } from '@/components/heroui'

export default function TestSelectPage() {
  const items = [
    { key: '1', label: 'Option 1' },
    { key: '2', label: 'Option 2' },
    { key: '3', label: 'Option 3' }
  ]

  return (
    <div className='p-8'>
      <h1 className='mb-4 text-2xl font-bold'>Test Select Component</h1>

      <div className='space-y-4'>
        <Select label='Choose an option' placeholder='Select an option' className='max-w-xs'>
          {items.map(item => (
            <SelectItem key={item.key} value={item.key}>
              {item.label}
            </SelectItem>
          ))}
        </Select>

        <Select label='Static options' placeholder='Select a fruit' className='max-w-xs'>
          <SelectItem key='apple'>Apple</SelectItem>
          <SelectItem key='banana'>Banana</SelectItem>
          <SelectItem key='orange'>Orange</SelectItem>
        </Select>
      </div>
    </div>
  )
}
