import React, { forwardRef } from 'react'
import {
  Table as TableHeroUI,
  TableHeader as TableHeaderHeroUI,
  TableBody as TableBodyHeroUI,
  TableColumn as TableColumnHeroUI,
  TableRow as TableRowHeroUI,
  TableCell as TableCellHeroUI,
  TableProps as TablePropsHeroUI
} from '@heroui/react'

export type TableProps = TablePropsHeroUI

export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  return <TableHeroUI ref={ref} {...props} />
})

Table.displayName = 'Table'

export type TableHeaderProps<T extends object = object> = React.ComponentProps<typeof TableHeaderHeroUI<T>>

export const TableHeader = <T extends object = object>({ ...props }: TableHeaderProps<T>) => {
  return <TableHeaderHeroUI {...props} />
}

TableHeader.displayName = 'TableHeader'

export type TableBodyProps<T extends object = object> = React.ComponentProps<typeof TableBodyHeroUI<T>>

export const TableBody = <T extends object = object>({ ...props }: TableBodyProps<T>) => {
  return <TableBodyHeroUI {...props} />
}

TableBody.displayName = 'TableBody'

export type TableColumnProps<T extends object = object> = React.ComponentProps<typeof TableColumnHeroUI<T>>

export const TableColumn = <T extends object = object>({ ...props }: TableColumnProps<T>) => {
  return <TableColumnHeroUI {...props} />
}

TableColumn.displayName = 'TableColumn'

export type TableRowProps = React.ComponentProps<typeof TableRowHeroUI>

export const TableRow: React.FC<TableRowProps> = props => {
  return <TableRowHeroUI {...props} />
}

TableRow.displayName = 'TableRow'

export type TableCellProps = React.ComponentProps<typeof TableCellHeroUI>

export const TableCell: React.FC<TableCellProps> = props => {
  return <TableCellHeroUI {...props} />
}

TableCell.displayName = 'TableCell'
