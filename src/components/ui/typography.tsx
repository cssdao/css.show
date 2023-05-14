/* eslint-disable react/no-unescaped-entities */
type TypographyProps = { children: React.ReactNode }
export function TypographyH1({ children }: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

export function TypographyH2({ children }: TypographyProps) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  )
}

export function TypographyH3({ children }: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export function TypographyH4({ children }: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}

export function TypographyP({ children }: TypographyProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children }: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {children}
    </blockquote>
  )
}

export function TypographyList({ children }: TypographyProps) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {/* <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li> */}
      {children}
    </ul>
  )
}

export function TypographyInlineCode({ children }: TypographyProps) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  )
}

export function TypographyLead({ children }: TypographyProps) {
  return (
    <p className="text-xl text-muted-foreground">
      {children}
    </p>
  )
}

export function TypographyLarge({ children }: TypographyProps) {
  return (
    <div className="text-lg font-semibold">{children}</div>
  )
}

export function TypographySmall({ children }: TypographyProps) {
  return (
    <small className="text-sm font-medium leading-none">{children}</small>
  )
}

export function TypographyMuted({ children }: TypographyProps) {
  return (
    <p className="text-sm text-muted-foreground">{children}</p>
  )
}
