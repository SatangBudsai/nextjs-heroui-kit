import { forwardRef } from 'react'
import {
  Table as TableHeroUI,
  TableHeader as TableHeaderHeroUI,
  TableBody as TableBodyHeroUI,
  TableColumn as TableColumnHeroUI,
  TableRow as TableRowHeroUI,
  TableCell as TableCellHeroUI
} from '@heroui/react'

type TableProps = React.ComponentProps<typeof TableHeroUI> & {}

const Table = forwardRef<React.ElementRef<typeof TableHeroUI>, TableProps>((props, ref) => {
  return <TableHeroUI ref={ref} {...props} />
})
Table.displayName = 'Table'

type TableHeaderProps = React.ComponentProps<typeof TableHeaderHeroUI> & {}

const TableHeader = ({ ...props }: TableHeaderProps) => {
  return <TableHeaderHeroUI {...props} />
}

type TableBodyProps = React.ComponentProps<typeof TableBodyHeroUI> & {}

const TableBody = ({ ...props }: TableBodyProps) => {
  return <TableBodyHeroUI {...props} />
}

type TableColumnProps = React.ComponentProps<typeof TableColumnHeroUI> & {}

const TableColumn = ({ ...props }: TableColumnProps) => {
  return <TableColumnHeroUI {...props} />
}

type TableRowProps = React.ComponentProps<typeof TableRowHeroUI> & {}

const TableRow = ({ ...props }: TableRowProps) => {
  return <TableRowHeroUI {...props} />
}

type TableCellProps = React.ComponentProps<typeof TableCellHeroUI> & {}

const TableCell = ({ ...props }: TableCellProps) => {
  return <TableCellHeroUI {...props} />
}

export default Table
export { TableHeader, TableBody, TableColumn, TableRow, TableCell }
