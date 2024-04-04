import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


interface TableProps extends ComponentProps<'td'> {

}
export function TableCell(props: TableProps) {
  return (
    <td {...props} className={twMerge("px-4 py-3 text-sm text-zinc-300", props.className)} ></td>
  )
}