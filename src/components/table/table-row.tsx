import { ComponentProps } from "react"


interface TableProps extends ComponentProps<'tr'> {

}
export function TableRow(props: TableProps) {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5" {...props} />
  )
}