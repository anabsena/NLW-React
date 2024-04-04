import { ComponentProps } from "react"


interface TableProps extends ComponentProps<'th'> {

}
export function TableHeader(props: TableProps) {
  return (
    <th className="px-4 py-3 text-sm font-semibold text-left" {...props}></th>
  )
}