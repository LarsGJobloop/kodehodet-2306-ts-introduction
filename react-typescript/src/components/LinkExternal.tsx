import React from "react"

/**
 * Interfaces in TypeScript is a 
 * way to define the shape
 * of an object, there are not
 * to many differences compared
 * to defining this as a type instead
 */
interface LinkExternalProps {
  /**
   * The URL to link to
   */
  href: string,
  children: React.ReactNode,
  // You can specify that a field is
  // optional (possibly undefined)
  // by appending a '?'
  className?: string
}

export function LinkExternal(props: LinkExternalProps) {
  const {href, children, className} = props

  return (
    <a className={className} href={href}>{children}</a>
  )
}