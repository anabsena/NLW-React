import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'>{
  children: string
  href: string
}
const NavLink = (props: NavLinkProps) => {
  return (
    <a  {...props} className='font-medium text-sm'>{props.children}</a>
  )
}

export default NavLink