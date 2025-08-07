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

export const TableHeader = TableHeaderHeroUI
export const TableBody = TableBodyHeroUI
export const TableColumn = TableColumnHeroUI
export const TableRow = TableRowHeroUI
export const TableCell = TableCellHeroUI

export type { TableHeaderProps, TableBodyProps, TableColumnProps, TableRowProps, TableCellProps } from '@heroui/react'
